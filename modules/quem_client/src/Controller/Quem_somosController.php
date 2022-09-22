<?php

namespace Drupal\quem_client\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * [ReservaController] Controller do client.
 */

class Quem_somosController extends ControllerBase {

    /**
     * [render] Retorna array com as configurações
     * ( templates, variáveis, etc ) da página
     * gerada pelo módulo.
     *
     * @return array
     * A simple renderable array.
     */
    public function render_quem() {
        $module_handler = \Drupal::service('module_handler');
        $module_path = $module_handler->getModule('quem_client')->getPath();
        return [
            '#theme' => 'quem_client',
            '#m_path' => $module_path,
            '#attached' => [
                'library' => [
                    'quem_client/quem_client_assets',
                ]
            ],
        ];
    }
}