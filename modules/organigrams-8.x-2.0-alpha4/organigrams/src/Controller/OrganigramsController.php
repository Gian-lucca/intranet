<?php

namespace Drupal\organigrams\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\taxonomy\VocabularyInterface;
use Drupal\Core\Access\AccessResult;
use Drupal\organigrams\TaxonomyTermTree;
use Drupal\Component\Serialization\Json;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Provides route responses for organigrams.module.
 */
class OrganigramsController extends ControllerBase {

  /**
   * The Taxonomy Tree builder.
   *
   * @var \Drupal\organigrams\TaxonomyTermTree
   */
  protected $taxonomyTermTree;

  /**
   * Constructs a OrganigramsController object.
   *
   * @param \Drupal\organigrams\TaxonomyTermTree $taxonomyTermTree
   *   The Taxonomy Tree builder.
   */
  public function __construct(TaxonomyTermTree $taxonomyTermTree) {
    $this->taxonomyTermTree = $taxonomyTermTree;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static($container->get('organigrams.taxonomy_term_tree'));
  }

  /**
   * Returns a form to add a new vocabulary.
   *
   * @return array
   *   The vocabulary add form.
   */
  public function addForm() {
    $term = $this->entityTypeManager()->getStorage('taxonomy_vocabulary')->create();
    return $this->entityFormBuilder()->getForm($term);
  }

  /**
   * Returns a form to add a new term to a vocabulary.
   *
   * @param \Drupal\taxonomy\VocabularyInterface $taxonomy_vocabulary
   *   The vocabulary this term will be added to.
   *
   * @return array
   *   The organigram as a render array.
   */
  public function viewOrganigram(VocabularyInterface $taxonomy_vocabulary) {
    $output = [];

    // Check for permission.
    if (!$this->currentUser()->hasPermission('view organigrams')) {
      return $output;
    }

    // Use our own service to get the hierarchical overview of taxonomy terms
    // in this vocabulary.
    $output = $this->taxonomyTermTree->loadList($taxonomy_vocabulary->id());

    // Include the organigram css.
    $output['#attached']['library'][] = 'organigrams/organigrams';

    return $output;
  }

  /**
   * Outputs the items of an organigram in JSON.
   *
   * @param \Drupal\taxonomy\VocabularyInterface $taxonomy_vocabulary
   *   The vocabulary to export the items from.
   *
   * @return array
   *   A render array.
   */
  public function exportOrganigramItems(VocabularyInterface $taxonomy_vocabulary) {
    // Get all terms in this vocabulary.
    $terms = $this->entityTypeManager()->getStorage('taxonomy_term')->loadTree($taxonomy_vocabulary->id(), 0, NULL, TRUE);

    // Setup array for export data.
    $export_data = [];

    // Check if there are terms.
    if (!empty($terms)) {
      // Ignore these term fields.
      $ignore_fields = [
        'uuid',
        'revision_id',
        'langcode',
        'vid',
        'revision_created',
        'revision_user',
        'revision_log_message',
        'changed',
        'default_langcode',
        'revision_default',
        'revision_translation_affected',
      ];

      // Iterate through the terms.
      foreach ($terms as $term) {
        // Get field definitions.
        $fields = $term->getFieldDefinitions();

        // Create array for the term data.
        $term_data = [];

        // Iterate through the fields.
        foreach ($fields as $field_name => $field) {
          // Continue if the field is in the ignore array.
          if (in_array($field_name, $ignore_fields)) {
            continue;
          }

          // Process the fields.
          switch ($field_name) {
            case 'tid':
              // Export tid as iid so the import works with D7 and D8 exports.
              $term_data['iid'] = $term->get($field_name)->value;
              break;

            case 'parent':
              // The parent needs to be retrieved in a different way.
              $term_data['parent'] = $term->parent->target_id;
              break;

            default:
              // Remove field_o_ from the field name and store it with it's
              // value in the term_data array.
              $term_data[str_replace('field_o_', '', $field_name)] = $term->get($field_name)->value;
          }
        }

        // Add the term data to the export array.
        $export_data[] = $term_data;
      }
    }

    // Textarea for the Json encoded organigram items.
    $form['organigrams_items_json'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Organigram items JSON'),
      '#description' => '',
      '#value' => Json::encode($export_data),
      '#rows' => 20,
    ];

    return $form;
  }

  /**
   * Checks if a vocabulary contains organigrams settings.
   *
   * @param \Drupal\taxonomy\VocabularyInterface $taxonomy_vocabulary
   *   The vocabulary to perform the access check on.
   *
   * @return \Drupal\Core\Access\AccessResultInterface
   *   The access result.
   */
  public function isOrganigram(VocabularyInterface $taxonomy_vocabulary) {
    if (!empty($taxonomy_vocabulary->getThirdPartySettings('organigrams'))) {
      return AccessResult::allowed();
    }
    return AccessResult::forbidden();
  }

}
