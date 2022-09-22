<?php

namespace Drupal\aniversario_client\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * [ReservaController] Controller do client.
 */

class AniversarioController extends ControllerBase {

    /**
     * [render] Retorna array com as configurações
     * ( templates, variáveis, etc ) da página
     * gerada pelo módulo.
     *
     * @return array
     * A simple renderable array.
     */
    public function renderAniversario() {
        $module_handler = \Drupal::service('module_handler');
        $module_path = $module_handler->getModule('aniversario_client')->getPath();
        return [
            '#theme' => 'aniversario_client',
            '#m_path' => $module_path,
            '#attached' => [
                'library' => [
                    'aniversario_client/aniversario_client_assets',
                ]
            ],
        ];
    }
}