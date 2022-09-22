<?php

namespace Drupal\organigrams\Plugin\Derivative;

use Drupal\Component\Plugin\Derivative\DeriverBase;
use Drupal\Core\Entity\EntityStorageInterface;
use Drupal\Core\Plugin\Discovery\ContainerDeriverInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\Core\StringTranslation\StringTranslationTrait;

/**
 * Provides block plugin definitions for organigrams.
 *
 * @see \Drupal\organigrams\Plugin\Block\NodeBlock
 */
class OrganigramsBlocks extends DeriverBase implements ContainerDeriverInterface {
  use StringTranslationTrait;

  /**
   * The node storage.
   *
   * @var \Drupal\Core\Entity\EntityStorageInterface
   */
  protected $taxonomyStorage;

  /**
   * Constructs new OrganigramsBlocks.
   *
   * @param \Drupal\Core\Entity\EntityStorageInterface $taxonomy_storage
   *   The taxonomy storage.
   */
  public function __construct(EntityStorageInterface $taxonomy_storage) {
    $this->taxonomyStorage = $taxonomy_storage;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, $base_plugin_id) {
    return new static(
      $container->get('entity_type.manager')->getStorage('taxonomy_vocabulary')
    );
  }

  /**
   * {@inheritdoc}
   *
   * Create a block for every organigram.
   */
  public function getDerivativeDefinitions($base_plugin_definition) {
    // Load all vocabularies and iterate through them.
    $taxonomy_vocabularies = $this->taxonomyStorage->loadMultiple();
    foreach ($taxonomy_vocabularies as $vocabulary) {
      // Skip if the vocabulary has no organigrams settings.
      if (empty($vocabulary->getThirdPartySettings('organigrams'))) {
        continue;
      }

      // Create the block.
      $this->derivatives[$vocabulary->id()] = $base_plugin_definition;
      $this->derivatives[$vocabulary->id()]['admin_label'] = $this->t('Organigram block:') . ' ' . $vocabulary->label();
    }

    return $this->derivatives;
  }

}
