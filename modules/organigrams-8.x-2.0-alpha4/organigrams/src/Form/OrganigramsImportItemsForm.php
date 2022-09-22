<?php

namespace Drupal\organigrams\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\taxonomy\Entity\Term;
use Drupal\taxonomy\VocabularyInterface;
use Drupal\Component\Serialization\Json;
use Drupal\Core\Link;
use Drupal\Core\Url;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Provides the settings form for this module.
 */
class OrganigramsImportItemsForm extends FormBase {

  /**
   * The entity type manager.
   *
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface
   */
  protected $entityTypeManager;

  /**
   * The term storage handler.
   *
   * @var \Drupal\taxonomy\TermStorageInterface
   */
  protected $storageController;

  /**
   * Constructs an OrganigramsImportTermsForm object.
   *
   * @param \Drupal\Core\Entity\EntityTypeManagerInterface $entity_type_manager
   *   The entity type manager service.
   */
  public function __construct(EntityTypeManagerInterface $entity_type_manager) {
    $this->entityTypeManager = $entity_type_manager;
    $this->storageController = $entity_type_manager->getStorage('taxonomy_term');
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('entity_type.manager')
    );
  }

  /**
   * Returns a unique string identifying the form.
   *
   * @return string
   *   The unique string identifying the form.
   */
  public function getFormId() {
    return 'organigrams_import_terms_form';
  }

  /**
   * Form constructor.
   *
   * @param array $form
   *   An associative array containing the structure of the form.
   * @param \Drupal\Core\Form\FormStateInterface $form_state
   *   The current state of the form.
   * @param \Drupal\taxonomy\VocabularyInterface $taxonomy_vocabulary
   *   The vocabulary to import the terms to.
   *
   * @return array
   *   The form structure.
   */
  public function buildForm(array $form, FormStateInterface $form_state, VocabularyInterface $taxonomy_vocabulary = NULL) {
    // Don't do anything if no vocabulary is found.
    if (empty($taxonomy_vocabulary)) {
      return [
        '#markup' => $this->t('No vocabulary found.'),
      ];
    }

    // Add the vocabulary to the form_state.
    $form_state->set(['taxonomy', 'vocabulary'], $taxonomy_vocabulary);

    // Textarea for the organigram items JSON.
    $form['organigrams_items_json'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Organigram items JSON'),
      '#description' => $this->t('JSON output of organigrams version 7.x and 8.x is supported.'),
      '#required' => TRUE,
      '#rows' => 20,
    ];

    // Add a warning message.
    $form['warning'] = [
      '#markup' => '<strong>' . $this->t('Warning: this will delete all existing organigram items!') . '</strong>',
    ];

    // Group submit handlers in an actions element with a key of "actions".
    $form['actions'] = [
      '#type' => 'actions',
    ];

    // Add a submit button that handles the submission of the form.
    $form['actions']['submit'] = [
      '#type' => 'submit',
      '#value' => $this->t('Submit'),
    ];

    return $form;
  }

  /**
   * Validate the JSON.
   *
   * @param array $form
   *   An associative array containing the structure of the form.
   * @param \Drupal\Core\Form\FormStateInterface $form_state
   *   The current state of the form.
   */
  public function validateForm(array &$form, FormStateInterface $form_state) {
    parent::validateForm($form, $form_state);

    $organigram_items = Json::decode($form_state->getValue('organigrams_items_json'));

    if (empty($organigram_items)) {
      $form_state->setErrorByName('organigrams_items_json', $this->t('No organigram items found in the JSON.'));
    }
  }

  /**
   * Form submission handler.
   *
   * @param array $form
   *   An associative array containing the structure of the form.
   * @param \Drupal\Core\Form\FormStateInterface $form_state
   *   The current state of the form.
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    // Get the decoded organigram items.
    $organigram_items = json_decode($form_state->getValue('organigrams_items_json'));

    // Get the vocabulary.
    $vocabulary = $form_state->get(['taxonomy', 'vocabulary']);

    // Get all terms in this vocabulary.
    $existing_tids = \Drupal::entityQuery('taxonomy_term')
      ->condition('vid', $vocabulary->id())
      ->execute();

    if (!empty($existing_tids)) {
      // Load the entities.
      $entities = $this->storageController->loadMultiple($existing_tids);
      // Delete them.
      $this->storageController->delete($entities);
    }

    // Create a mapping array for the term ID's.
    $iid_mapping = [];
    // Iterate through the organigram items.
    foreach ($organigram_items as $item) {
      // Create a new term array.
      $term_array = [
        'name' => $item->name,
        'vid' => $vocabulary->id(),
        'parent' => $item->parent,
        'weight' => $item->weight,
      ];

      // Convert the old parent to the new parent if possible.
      if (isset($iid_mapping[$item->parent])) {
        $term_array['parent'] = $iid_mapping[$item->parent];
      }

      // Ignore these fields.
      $ignore_keys = [
        'iid',
        'oid',
        'rdf_mapping',
        'organigrams_machine_name',
        'depth',
      ];

      // Iterate through the item fields.
      foreach ($item as $key => $value) {
        if (in_array($key, $ignore_keys)) {
          continue;
        }

        // Change the value of the position to s if it's l or r.
        if ($key == 'position' && in_array($value, ['l', 'r'])) {
          $value = 's';
        }

        // Add the field to the term array.
        $term_array['field_o_' . $key] = $value;
      }

      // Create the term.
      $term = Term::create($term_array);
      // Save the term.
      $term->save();

      // Create mapping for the new term ID to be used as parent.
      $iid_mapping[$item->iid] = $term->id();
    }

    // Create an overview link.
    $organigram_link = Link::fromTextAndUrl($this->t('overview'), Url::fromUserInput('/admin/structure/taxonomy/manage/' . $vocabulary->id() . '/overview'));

    // Show message.
    $this->messenger()->addMessage($this->t('Organigram items imported. Go to @overview.', [
      '@overview' => $organigram_link->toString(),
    ]));
  }

}
