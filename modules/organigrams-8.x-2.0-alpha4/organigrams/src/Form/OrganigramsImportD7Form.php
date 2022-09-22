<?php

namespace Drupal\organigrams\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\taxonomy\Entity\Vocabulary;
use Drupal\taxonomy\Entity\Term;
use Drupal\Core\Link;
use Drupal\Core\Url;

/**
 * Provides the settings form for this module.
 */
class OrganigramsImportD7Form extends FormBase {

  /**
   * Returns a unique string identifying the form.
   *
   * @return string
   *   The unique string identifying the form.
   */
  public function getFormId() {
    return 'organigrams_import_drupal7_form';
  }

  /**
   * Form constructor.
   *
   * @param array $form
   *   An associative array containing the structure of the form.
   * @param \Drupal\Core\Form\FormStateInterface $form_state
   *   The current state of the form.
   *
   * @return array
   *   The form structure.
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    // Node templates in JSON.
    $form['organigrams_d7_json'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Drupal 7 organigram JSON'),
      '#description' => '',
      '#required' => TRUE,
      '#rows' => 20,
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

    $organigram = json_decode($form_state->getValue('organigrams_d7_json'));

    if (empty($organigram->organigram)) {
      $form_state->setErrorByName('organigrams_d7_json', $this->t('No organigram found in the JSON.'));
    }
    else {
      $vocabularies = taxonomy_vocabulary_get_names();

      if (isset($vocabularies[$organigram->organigram->machine_name])) {
        $form_state->setErrorByName('organigrams_d7_json', $this->t('An organigram with the machine name "@machine_name" already exists. Change the machine name or remove the existing one to import this organigram.', [
          '@machine_name' => $organigram->organigram->machine_name,
        ]));
      }
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
    $organigram = json_decode($form_state->getValue('organigrams_d7_json'));

    $vocabulary = Vocabulary::create([
      'vid' => $organigram->organigram->machine_name,
      'description' => $organigram->organigram->description,
      'name' => $organigram->organigram->name,
    ]);

    // Add a third party setting to indicate this vocabulary is an organigram.
    $vocabulary->setThirdPartySetting('organigrams', 'is_organigram', TRUE);
    $vocabulary->save();

    organigrams_create_term_fields($vocabulary->id());

    if (!empty($organigram->items)) {
      // Create a mapping array for the term ID's.
      $iid_mapping = [];
      // Iterate through the organigram items.
      foreach ($organigram->items as $item) {
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

        $ignore_keys = [
          'iid',
          'oid',
          'rdf_mapping',
          'organigrams_machine_name',
          'depth',
        ];

        foreach ($item as $key => $value) {
          if (in_array($key, $ignore_keys)) {
            continue;
          }

          // Change the value of the position to s if it's l or r.
          if ($key == 'position' && in_array($value, ['l', 'r'])) {
            $value = 's';
          }

          $term_array['field_o_' . $key] = $value;
        }

        // Create the term.
        $term = Term::create($term_array);
        // Save the term.
        $term->save();

        // Create mapping for the new term ID to be used as parent.
        $iid_mapping[$item->iid] = $term->id();
      }
    }

    $organigram_link = Link::fromTextAndUrl($organigram->organigram->name, Url::fromUserInput('/admin/structure/taxonomy/manage/' . $organigram->organigram->machine_name . '/overview'));

    // Show message.
    $this->messenger()->addMessage($this->t('Organigram "@name" imported.', [
      '@name' => $organigram_link->toString(),
    ]));
  }

}
