<?php

namespace Drupal\organigrams;

use Drupal\Core\Entity\EntityTypeManager;
use Drupal\Core\Entity\EntityFieldManager;
use Drupal\Core\Render\Element;
use Drupal\Core\Render\Markup;
use Drupal\Core\Link;
use Drupal\Core\Url;

/**
 * Loads taxonomy terms in a tree.
 *
 * Thanks to Danny Sipos:
 * https://www.webomelette.com/loading-taxonomy-terms-tree-drupal-8.
 */
class TaxonomyTermTree {

  /**
   * The entity type manager.
   *
   * @var \Drupal\Core\Entity\EntityTypeManager
   */
  protected $entityTypeManager;

  /**
   * The entity field manager.
   *
   * @var \Drupal\Core\Entity\EntityFieldManager
   */
  protected $entityFieldManager;

  /**
   * TaxonomyTermTree constructor.
   *
   * @param \Drupal\Core\Entity\EntityTypeManager $entityTypeManager
   *   Contains the entity type manager.
   * @param \Drupal\Core\Entity\EntityFieldManager $entityFieldManager
   *   Contains the entity field manager.
   */
  public function __construct(EntityTypeManager $entityTypeManager, EntityFieldManager $entityFieldManager) {
    $this->entityTypeManager = $entityTypeManager;
    $this->entityFieldManager = $entityFieldManager;
  }

  /**
   * Loads the tree of a vocabulary.
   *
   * @param string $vocabulary
   *   Contains the vocabulary machine name.
   *
   * @return array
   *   Contains the taxonomy tree.
   */
  public function load($vocabulary) {
    // Load all terms of the vocabulary.
    $terms = $this->entityTypeManager->getStorage('taxonomy_term')->loadTree($vocabulary, 0, NULL, TRUE);

    // Define the tree array and iterate through the terms to fill it.
    $tree = [];
    foreach ($terms as $tree_object) {
      $this->buildTree($tree, $tree_object, $vocabulary);
    }

    return $tree;
  }

  /**
   * Populates a tree array given a taxonomy term tree object.
   *
   * @param array $tree
   *   Contains the tree so far.
   * @param object $object
   *   Contains a taxonomy term possibly with children.
   * @param string $vocabulary
   *   Contains the vocabulary machine name.
   */
  protected function buildTree(array &$tree, $object, $vocabulary) {
    // Do nothing when depth is not 0.
    if ($object->depth != 0) {
      return;
    }

    // Add the term to the tree and create a children entry.
    $tree[$object->id()] = $object;
    $tree[$object->id()]->children = [];

    // Reference the tree children to the object children.
    $object_children = &$tree[$object->id()]->children;

    // Load the children of this taxonomy term.
    $children = $this->entityTypeManager->getStorage('taxonomy_term')->loadChildren($object->id());
    // Stop if no children are found.
    if (!$children) {
      return;
    }

    // Iterate through all children and recursively add them to the tree array.
    $child_tree_objects = $this->entityTypeManager->getStorage('taxonomy_term')->loadTree($vocabulary, $object->id(), NULL, TRUE);
    foreach ($children as $child) {
      foreach ($child_tree_objects as $child_tree_object) {
        if ($child_tree_object->id() == $child->id()) {
          $this->buildTree($object_children, $child_tree_object, $vocabulary);
        }
      }
    }
  }

  /**
   * Loads the tree of a vocabulary and puts it in an item list.
   *
   * @param string $vocabulary
   *   Contains the vocabulary machine name.
   *
   * @return array
   *   Renderable array containing an item list.
   */
  public function loadList($vocabulary) {
    // Get all taxonomy terms.
    $terms = $this->entityTypeManager->getStorage('taxonomy_term')->loadTree($vocabulary, 0, NULL, TRUE);

    // Set the positions to retreive.
    $positions = ['u', 's'];

    // Build a hierarchical taxonomy term array.
    $items = [];
    foreach ($terms as $tree_object) {
      $this->buildListTree($items, $tree_object, $vocabulary, $positions);
    }

    // Provide the ability to alter the taxonomy tree.
    \Drupal::moduleHandler()->alter('organigrams_taxonomy_term_tree', $items);

    // Return an item list.
    return [
      '#theme' => 'item_list',
      '#type' => 'ul',
      '#attributes' => [
        'class' => ['orgchart', 'organigram-' . $vocabulary],
      ],
      '#items' => $items,
    ];
  }

  /**
   * Populates a tree array with list items given a taxonomy term tree object.
   *
   * @param array $items
   *   The populated tree so far.
   * @param object $object
   *   Contains a taxonomy term.
   * @param string $vocabulary
   *   Contains the machine name of the vocabulary.
   * @param array $fields
   *   Contains the fields to show for taxonomy terms.
   */
  protected function buildListTree(array &$items, $object, $vocabulary, array $positions) {
    // Stop if depth is not 0.
    if ($object->depth != 0) {
      return;
    }

    // Get the position of the child.
    $position = $object->get('field_o_position')->first()->getValue();

    // Only process the children with the given position.
    if (!in_array($position['value'], $positions)) {
      return;
    }

    // Set default name for the object. Replace | with a linebreak.
    $markup = str_replace('|', '<br />', $object->getName());

    // Check if an image is uploaded.
    if (!empty($object->get('field_o_image')->entity)) {
      // Get the image uri.
      $image_uri = $object->get('field_o_image')->entity->getFileUri();
      if (!empty($image_uri)) {
        // Render image with an image_style.
        $image = [
          '#theme' => 'image_style',
          '#style_name' => 'thumbnail',
          '#uri' => $image_uri,
        ];
        $markup = render($image) . $markup;
      }
    }

    // Check if a link is present.
    if (!$object->get('field_o_url')->isEmpty()) {
      $url = $object->get('field_o_url')->first()->getValue();

      if (!empty($url['value'])) {
        // Since D8, we have to check for ourselves if the link is internal or
        // external.
        $components = parse_url($url['value']);

        if (isset($components['scheme'])) {
          $url = Url::fromUri($url['value']);
        }
        else {
          $url = Url::fromUri('internal:' . $url['value']);
        }

        // Create the link.
        // Use Markup::create in case the markup contains an image.
        $markup = Markup::create($markup);
        $link = Link::fromTextAndUrl($markup, $url);
        $renderable_link = $link->toRenderable();
        $renderable_link['#attributes'] = [
          'class' => ['nodecontent'],
        ];
        $markup = render($renderable_link);
      }
    }
    // If not, wrap the mkarup in a div.
    else {
      $markup = '<div class="nodecontent">' . $markup . '</div>';
    }

    // Provide the ability to alter the markup of a term.
    \Drupal::moduleHandler()->alter('organigrams_taxonomy_term_markup', $markup, $object);

    // Create classes array.
    $classes = [];

    // Check if a custom class is set.
    if (!$object->get('field_o_css_classes')->isEmpty()) {
      $class_list = $object->get('field_o_css_classes')->first()->getValue();
      if (!empty($class_list['value'])) {
        // Multiple classes are separated by a space so explode here.
        $classes = explode(' ', trim($class_list['value']));
      }
    }

    // Add the root class to the first child.
    if ($object->get('parent')->target_id == 0) {
      $classes[] = 'root';
    }

    // Create the list item.
    $items[$object->id()] = [
      '#markup' => $markup,
      'assists' => [],
      'children' => [
        // The children must always be below the assists.
        '#weight' => 100,
      ],
      '#wrapper_attributes' => [
        'class' => $classes,
      ],
    ];

    // Try to load the children of this object.
    $children = $this->entityTypeManager->getStorage('taxonomy_term')->loadChildren($object->id());

    // Stop and add a class if no children are found.
    if (!$children) {
      $items[$object->id()]['#wrapper_attributes']['class'][] = 'leaf';
      return;
    }

    // Make the children and assists referenced.
    $object_children = &$items[$object->id()]['children'];
    $object_assists = &$items[$object->id()]['assists'];

    // Get all children.
    $child_tree_objects = $this->entityTypeManager->getStorage('taxonomy_term')->loadTree($vocabulary, $object->id(), NULL, TRUE);

    // Iterate through all children and recursively add them to the tree array.
    foreach ($children as $child) {
      foreach ($child_tree_objects as $child_tree_object) {
        if ($child_tree_object->id() == $child->id()) {
          // First, get the assists.
          $this->buildListTree($object_assists, $child_tree_object, $vocabulary, ['s']);
          // Secondly, get the normal children.
          $this->buildListTree($object_children, $child_tree_object, $vocabulary, ['u']);
        }
      }
    }

    // The assists need to be grouped by 2 in an array so check if there are
    // assists.
    if (!empty(Element::children($object_assists))) {
      // Start a new assist array.
      $assist_num = 0;

      // Iterate through the assists.
      foreach (Element::children($object_assists) as $child) {
        // Create the array if it doesn't exists.
        if (!isset($items[$object->id()]['assists' . $assist_num])) {
          $items[$object->id()]['assists' . $assist_num] = [
            '#attributes' => [
              'class' => ['nodeassists'],
            ],
          ];
        }

        // Put the assist in the new array and remove the original one.
        $items[$object->id()]['assists' . $assist_num][$child] = $object_assists[$child];
        unset($object_assists[$child]);

        // Move on to the next assists array if this one has 2 children.
        $children = Element::children($items[$object->id()]['assists' . $assist_num]);
        if (count($children) >= 2) {
          $assist_num++;
        }
      }

      // Iterate through the object to check for lonely assists.
      foreach ($items[$object->id()] as $key => $value) {
        if (substr($key, 0, 7) == 'assists') {
          // If an assist group only contains 1 assist, add a dummy to fix
          // the connection lines.
          if (count(Element::children($value)) == 1) {
            $items[$object->id()][$key][] = [
              '#markup' => '',
              '#wrapper_attributes' => [
                'class' => ['dummy'],
              ],
            ];
          }
        }
      }
    }
  }

}
