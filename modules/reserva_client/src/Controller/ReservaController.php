<?php

namespace Drupal\reserva_client\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * [ReservaController] Controller do client.
 */

class ReservaController extends ControllerBase {

    /**
     * [render] Retorna array com as configurações
     * ( templates, variáveis, etc ) da página
     * gerada pelo módulo.
     *
     * @return array
     * A simple renderable array.
     */
    public function render() {
        $module_handler = \Drupal::service('module_handler');
        $module_path = $module_handler->getModule('reserva_client')->getPath();
        return [
            '#theme' => 'reserva_client',
            '#m_path' => $module_path,
            '#attached' => [
                'library' => [
                    'reserva_client/reserva_client_assets',
                ]
            ],
        ];
    }
}