CONTENTS OF THIS FILE
----------------------

 * Introduction
 * Upgrading from 1.x to 2.x
 * Requirements
 * Installation
 * Configuration
 * Browser support
 * References

INTRODUCTION
------------

Organigrams provides the ability to easily create and manage organization
charts, also knows as organigrams or organograms.

This module expands the taxonomy module. After installing, a button
"Add organigram" is added to the vocabulary page. This button creates
a vocabulary with additional fields required for creating an organigram.

This version of organigrams uses CSS to draw an organization chart from an
unordered list eliminating a lot of code and settings needed for the canvas
rendering in the previous version. Because of the CSS solution, nearly every
aspect of an organigram can be styled.

UPGRADING FROM 1.x TO 2.x
-------------------------
Before upgrading from version 1.x to 2.x there are some preparations to be
made.

### Transfering canvas settings to CSS
Version 2 uses CSS instead of HTML5 canvas so all data required for the canvas
transformation will be deleted when upgrading to version 2, this includes:

Vocabulary fields (third party settings):

  * organigrams_background_color
  * organigrams_background_color_hover
  * organigrams_border_color
  * organigrams_border_color_hover
  * organigrams_bottom_radius
  * organigrams_canvas_height
  * organigrams_canvas_width
  * organigrams_center
  * organigrams_font_color
  * organigrams_font_color_hover
  * organigrams_font_name
  * organigrams_font_size
  * organigrams_horizontal_offset
  * organigrams_horizontal_space
  * organigrams_line_color
  * organigrams_line_height
  * organigrams_node_height
  * organigrams_node_width
  * organigrams_shadow_offset
  * organigrams_top_radius
  * organigrams_vertical_alignment
  * organigrams_vertical_space

Taxonomy fields:

  * field_o_background_color
  * field_o_background_color_hover
  * field_o_bold_border
  * field_o_border_color
  * field_o_border_color_hover
  * field_o_font_color
  * field_o_font_color_hover
  * field_o_image_alignment

Make sure all of these settings are transfered to CSS before upgrading. Once
deleted, the data cannot be retrieved.

### Re-upload images
The taxonomy field field_o_image_url is deleted (along with it's data) and is
replaced with an actual file field (field_image) so take notes which image urls
are used before upgrading so they can be uploaded as real images after
upgrading.

### Staff functions values update
In canvas, the position of a staff function could be set to l (left) or r
(right). In CSS, the order is defined by the weight of the taxonomy terms so l
and r are removed as options and are replaced by s (staff). You don't have to
do anything for this.

REQUIREMENTS
------------

 This module requirements jQuery to work. If you want to make
 use of the token support, you will need the following modules:

  * Token: https://www.drupal.org/project/token
  * Token Filter: https://www.drupal.org/project/token_filter

INSTALLATION
------------

 * Install as usual, see
   https://www.drupal.org/docs/8/extending-drupal-8/installing-contributed-modules-find-import-enable-configure-drupal-8
   for further information.

CONFIGURATION
-------------

 * Create organigrams in Administration >> Structure >> Taxonomy >> Add
   organigram.

 * Import Drupal 7 organigrams in Administration >> Structure >> Taxonomy >>
   Add organigram >> Import Drupal 7 Organigram.

 * As organigrams are actually vocabularies, the taxonomy permissions are
   honored.
   Configure organigrams specific user permissions in Administration >>
   People >> Permissions:

   - Create organigrams
     Can create organigrams.

   - Import Drupal 7 organigrams
     Can import Drupal 7 organigrams.

   - View organigrams
     Can view organigrams.

 * Organigrams are available as dedicated pages, blocks and tokens (requires
   the modules token (https://www.drupal.org/project/token) and token_filter
   (https://www.drupal.org/project/token_filter)).

BROWSER SUPPORT
---------------

 Organigrams is tested in the following browsers:

 * Microsoft Edge 85.0.564.63
 * Google Chrome version 86.0.4240.80
 * Mozilla Firefox version 82.0
 * Microsoft Internet Explorer 11

REFERENCES
----------

 * Based on the Organigram module by Frederic Hennequin, see:
   https://www.drupal.org/sandbox/daeron/1603000

 * CSS based on an article written by Robert Wenzel:
   https://dzone.com/articles/css-flex-based-orgchart-with-zk
