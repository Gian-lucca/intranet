<?php

namespace Drupal\organigrams\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Drupal\Core\Session\AccountInterface;
use Drupal\Core\Access\AccessResult;
use Drupal\organigrams\Controller\OrganigramsController;
use Drupal\organigrams\TaxonomyTermTree;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Provides a 'OrganigramsBlocks' block plugin.
 *
 * @Block(
 *   id = "organigrams_block",
 *   admin_label = @Translation("Organigrams block"),
 *   deriver = "Drupal\organigrams\Plugin\Derivative\OrganigramsBlocks"
 * )
 */
class OrganigramsBlocks extends BlockBase implements ContainerFactoryPluginInterface {

  /**
   * The vocabulary interface.
   *
   * @var VocabularyInterface
   */
  private $taxonomyVocabulary;

  /**
   * The Taxonomy Tree builder.
   *
   * @var \Drupal\organigrams\TaxonomyTermTree
   */
  protected $taxonomyTermTree;

  /**
   * Creates a OrganigramsBlocks instance.
   *
   * @param array $configuration
   *   Contains the configuration.
   * @param string $plugin_id
   *   Contains the plugin id.
   * @param array $plugin_definition
   *   Contains the plugin definition.
   * @param \Drupal\Core\Entity\EntityTypeManagerInterface $entity_manager
   *   Contains the entity manager.
   * @param \Drupal\organigrams\TaxonomyTermTree $taxonomyTermTree
   *   The Taxonomy Tree builder.
   */
  public function __construct(array $configuration, $plugin_id, array $plugin_definition, EntityTypeManagerInterface $entity_manager, TaxonomyTermTree $taxonomyTermTree) {
    parent::__construct($configuration, $plugin_id, $plugin_definition);

    // Load the vocabulary.
    $this->taxonomyVocabulary = $entity_manager->getStorage('taxonomy_vocabulary')->load($this->getDerivativeId());
    // Load the Taxonomy Term Tree service.
    $this->taxonomyTermTree = $taxonomyTermTree;
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    return new static(
      $configuration,
      $plugin_id,
      $plugin_definition,
      $container->get('entity_type.manager'),
      $container->get('organigrams.taxonomy_term_tree')
    );
  }

  /**
   * {@inheritdoc}
   */
  public function build() {
    // Do nothing if the vocabulary has no organigrams settings.
    if (empty($this->taxonomyVocabulary->getThirdPartySettings('organigrams'))) {
      return;
    }

    // Build the organigram.
    $organigramsController = new OrganigramsController($this->taxonomyTermTree);
    $build = $organigramsController->viewOrganigram($this->taxonomyVocabulary);

    return $build;
  }

  /**
   * {@inheritdoc}
   */
  public function blockAccess(AccountInterface $account, $return_as_object = FALSE) {
    // Check if the user has permission to view organigrams.
    if ($account->hasPermission('view organigrams')) {
      return AccessResult::allowed();
    }
    return AccessResult::forbidden();
  }

}
