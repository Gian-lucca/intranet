<?php

/**
 * @file
 * Hooks and documentation related to organigrams module.
 */

/**
 * @addtogroup hooks
 * @{
 */

/**
 * Alter the hierarchical taxonomy term tree.
 *
 * @param array $items
 *   The array of taxonomy terms.
 */
function hook_organigrams_taxonomy_term_tree_alter(array &$items) {
}

/**
 * Alter the markup of a taxonomy term.
 *
 * @param string $markup
 *   Contains rendered html.
 * @param object $object
 *   Contains a taxonomy term.
 */
function hook_organigrams_taxonomy_term_markup_alter(string &$markup, object $term) {
}

/**
 * @} End of "addtogroup hooks".
 */
