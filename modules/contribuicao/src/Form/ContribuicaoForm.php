<?php

/*
|--------------------------------------------------------------------------
| ContribuicaoForm.php
|--------------------------------------------------------------------------|
| Arquivo Classe que implementa toda contrução dos campos do formulário
| author Davi Bernardo <davi.santos@extreme.digital>
| version 1.1
| copyright Proderj 2021.
*/

/**
 * @file
 * Contains \Drupal\contribuicao\Form\ContribuicaoForm.
 * ClassForm
 */

namespace Drupal\contribuicao\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\node\Entity\Node;

/**
 * Formulário de contribuicao
 */
class ContribuicaoForm extends FormBase {
  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'contribuicao_form';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $protocolo = date("Ymd").rand(2,999);;
    $form['contribuicaoprotocolo'] = array(
      '#type' => 'hidden',
      '#title' => t('Seu Protocolo, você receberá o mesmo por email'),
      '#size' => 60,
      '#maxlength' => 100,
      '#value' => $protocolo,
      '#attributes'=> [
        'class' => ['inputs'],
        'readonly' => 'readonly'
      ]
    );
    $form['contribuicaonome'] = array(
      '#type' => 'textfield',
      '#title' => t('Nome Completo'),
      '#size' => 60,      
      '#maxlength' => 60,
      '#required' => TRUE,
      '#attributes'=> [
        'placeholder' => 'Nome Completo',
        'class' => ['inputs']
      ]
    );	 
  
    $form['contribuicaoemail'] = array(
      '#type' => 'email',
      '#title' => t('E-mail'),
      '#size' => 60,
      '#maxlength' => 100,
      '#required' => TRUE,
      '#attributes'=> [
        'placeholder' => 'E-mail válido',
        'class' => ['inputs']
      ]
    );

    $form['contribuicaocpf'] = array(
      '#type' => 'textfield',
      '#title' => t('CPF'),
      '#size' => 60,      
      '#maxlength' => 60,
      '#required' => TRUE,
      '#attributes'=> [
        'placeholder' => '___.___.___-__',
        'class' => ['inputs', 'cpf']
      ]
    );	

    $form['contribuicaoorgao'] = array(
      '#type' => 'textfield',
      '#title' => t('Orgao'),
      '#size' => 60,      
      '#maxlength' => 60,
      '#required' => TRUE,
      '#attributes'=> [
        'placeholder' => 'Órgão',
        'class' => ['inputs']
      ]
    );	

    $form['contribuicaocargo'] = array(
      '#type' => 'textfield',
      '#title' => t('Cargo'),
      '#size' => 60,      
      '#maxlength' => 60,
      '#required' => TRUE,
      '#attributes'=> [
        'placeholder' => 'Cargo',
        'class' => ['inputs']
      ]
    );	

    $form['contribuicaotexto'] = array(
      '#type' => 'textarea',
      '#title' => t('Contribuição'),
      '#size' => 60,
      '#maxlength' => 1000,
      '#required' => TRUE,
      '#attributes'=> [
        'class' => ['inputs'],
        'placeholder' => 'Contribuição',
      ]
    );
    $form['contribuicaojustificativa'] = array(
      '#type' => 'textarea',
      '#title' => t('Justificativa'),
      '#rows' => 5,
      '#cols' => 45,
      '#maxlength' => 1000,
      '#required' => TRUE,
      '#resizable' => 'none',
      '#attributes'=> [
        'placeholder' => 'Justificativa',
        'class' => ['inputs']        
      ]
    );
    $form['submit'] = array(
      '#type' => 'submit',
      '#value' => t('Enviar'),
      '#attributes'=> [
        'class' => ['botao']
      ]
    );
    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function validateForm(array &$form, FormStateInterface $form_state) {
	/**
	 * Valida nome
	 * Apenas letras
     */
    $contribuicaonome = trim($form_state->getValue('contribuicaonome'));
    
    if (!preg_match("/^([a-zA-Z ]+)$/", $contribuicaonome)) {
	    $form_state->setErrorByName('contribuicaonome', $this->t('Carateres inválidos no seu nome'));
    }
    
    /**
     * Valida email
     */
    $contribuicaoemail = trim($form_state->getValue('contribuicaoemail'));
  
    if ($contribuicaoemail !== '' && !\Drupal::service('email.validator')->isValid($contribuicaoemail)) {
      $form_state->setErrorByName('contribuicaoemail', $this->t('Endereço de email inválido'));  
    }

    /**
     * Valida Justificativa
     */
    $contribuicaojustificativa = trim($form_state->getValue('contribuicaojustificativa'));
  
    if ($contribuicaojustificativa == '') {
      $form_state->setErrorByName('contribuicaojustificativa', $this->t('A justificativa não pode estar vazia'));  
    }

  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    /**
     * Pega os dados do Imput
     */
    $contribuicaoprotocolo = trim($form_state->getValue('contribuicaoprotocolo'));
    $contribuicaonome = trim($form_state->getValue('contribuicaonome'));
    $contribuicaocpf = trim($form_state->getValue('contribuicaocpf'));
    $contribuicaoorgao = trim($form_state->getValue('contribuicaoorgao'));
    $contribuicaocargo = trim($form_state->getValue('contribuicaocargo'));
    $contribuicaoemail = trim($form_state->getValue('contribuicaoemail'));
    $contribuicaotexto = trim($form_state->getValue('contribuicaotexto'));
    $contribuicaojustificativa = trim($form_state->getValue('contribuicaojustificativa'));
    
    /**
     * Salva os dados do formulário de contribuicao
     */
     $node = Node::create([
     'type' => 'contribuicao_form',
     'langcode' => 'en',
     'created' => \Drupal::time()->getRequestTime(),
     'changed' => \Drupal::time()->getRequestTime(),
     // Default admin user ID.
     'uid' => 1,
     'title' => t('Formulário de contribuicao'),
     'field_contribuicao_protocolo' => $contribuicaoprotocolo,
     'field_contribuicao_nome' => $contribuicaonome,
     'field_contribuicao_cpf' => $contribuicaocpf,
     'field_contribuicao_orgao' => $contribuicaoorgao,
     'field_contribuicao_cargo' => $contribuicaocargo,
     'field_contribuicao_texto' => $contribuicaotexto,
     'field_contribuicao_email' => $contribuicaoemail,
     'field_contribuicao_justificativa' => $contribuicaojustificativa,
     'status' => 0,
     'promote' => 0,
    ]);
    $node->save();
    
    /**
     * Pega o email que será enviado 
     */
    $config = $this->config('contribuicao.adminsettings');
    $contribuicao_admin_email = trim($config->get('contribuicao_admin_email'));
    
    if ($contribuicao_admin_email) {
      /**
       * Envia email
       */
      $mail_manager = \Drupal::service('plugin.manager.mail');
      $langcode = \Drupal::currentUser()->getPreferredLangcode();
      $params['message']['contribuicaoprotocolo'] = $contribuicaoprotocolo;
      $params['message']['contribuicaonome'] = $contribuicaonome;
      $params['message']['contribuicaoorgao'] = $contribuicaoorgao;
      $params['message']['contribuicaocpf'] = $contribuicaocpf;
      $params['message']['contribuicaocargo'] = $contribuicaocargo;
      $params['message']['contribuicaotexto'] = $contribuicaotexto;
      $params['message']['contribuicaoemail'] = $contribuicaoemail;
      $params['message']['contribuicaojustificativa'] = $contribuicaojustificativa;
      
      $to = $contribuicao_admin_email;
      //envia email para o email que foi salvo no painel de administrativo
      $result = $mail_manager->mail('contribuicao', 'contribuicao_notificacao', $to, $langcode, $params, NULL, 'true');
      //envia protocolo para o usuário que solicitou o email
      $result = $mail_manager->mail('contribuicao', 'contribuicao_protocolo', $contribuicaoemail, $langcode, $params, NULL, 'true');
   }

    /**
     * Retorna mensagem Sucesso
     */
    \Drupal::messenger()->addStatus(t('Obrigado ' . $contribuicaonome . '! Sua mensagem foi enviada com sucesso! Enviamos o Protocolo<b> '.$contribuicaoprotocolo.' </b> para seu email!'));
  }
 
}
