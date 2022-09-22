<?php

namespace Drupal\organigrams;

use Drupal\taxonomy\VocabularyListBuilder;
use Drupal\Core\Entity\EntityInterface;

/**
 * Defines a class to highlight organigram vocabularies.
 *
 * @see \Drupal\taxonomy\Entity\Vocabulary
 */
class OrganigramsListBuilder extends VocabularyListBuilder {

  /**
   * {@inheritdoc}
   */
  public function buildRow(EntityInterface $entity) {
    $row['label'] = $entity->label();

    // Add a prefix if the taxonomy has organigrams settings.
    if (!empty($entity->getThirdPartySettings('organigrams'))) {
      $row['label'] = $this->t('Organigram:') . ' ' . $row['label'];
    }

    $row['description']['data'] = ['#markup' => $entity->getDescription()];
    return $row + parent::buildRow($entity);
  }

}
