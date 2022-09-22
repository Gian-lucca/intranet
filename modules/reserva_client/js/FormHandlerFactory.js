/**
 * [FormHandlerFactory] Manipula o form
 * de reserva de sala.
 * @author Jose Maciel <jose.maciel@extreme.digital>
 * @version 1.0
 * @copyright Proderj 2022.
 */

/**
 * [FormHandlerFactory]
 *
 * @return  {object}
 */
var FormHandlerFactory = () => {

  /**
   * [modalToogle] Exibe/Esconde o modal com
   * o formulário de reserva
   *
   * @return  {void}
   */
  var modalToogle = () => {
    var modal = document.querySelector(`#indexDireita10`);
    if(modal) {
      modalDisplay = modal.style.display;
      if (modalDisplay === `none`) {
        modal.style.display = `flex`;
      } else {
        modal.style.display = `none`;
      }
    }
  };

  /**
   * [validator] Validação básica dos dados vindos
   * do formulários
   *
   * @param   {object}  formObj obj com dados do 
   * formulário.
   *
   * @return  {boolean} true se ok, false caso contrário.
   */
   var validator = (formObj = {}) => {
    if(formObj.meetRoom === false) return false;
    if(formObj.resStart.search(/false/g) !== -1) return false;
    if(formObj.resEnd.search(/false/g) !== -1) return false;
    if(formObj.name.search(/false/g) !== -1) return false;
    if(formObj.email.search(/false/g) !== -1) return false;
    if(formObj.phone.search(/false/g) !== -1) return false;
    if(formObj.phone.search(/[^0-9]/g) !== -1) return false;
    var now = Date.now();
    var timeStart = new Date(formObj.resStart);
    var timeEnd = new Date(formObj.resEnd);
    if(timeStart.getTime() < now) return false;
    if(timeEnd.getTime() <= timeStart.getTime()) return false;
    return true;
  };

  var phoneMask = () => {
    document.getElementById('phone').addEventListener('blur',  (e) => {
      var x = e.target.value.replace(/\D/g, '').match(/(\d{2})(\d{5})(\d{4})/);
      e.target.value = `(${x[1]}) ${x[2]}-${x[3]}`;
    });
  };

  /**
 * [getFormValues] Captura os dados do formulário
 * e converte em objeto para ser validado.
 *
 * @return  {object/boolean} obj com dados validados ou false.
 */
  var getFormValues = () => {
    var reservationDate = document.querySelector(`[name="data"]`).value || false;
    var reservationRoomSelect = document.querySelector(`[name="sala"]`);
    var reservationInitTimeSelect = document.querySelector(`[name="horaI"]`);
    var reservationFinalTimeSelect = document.querySelector(`[name="horaF"]`);
    var reservationRoom = reservationRoomSelect.options[reservationRoomSelect.selectedIndex].value || false;
    var reservationInitTime = reservationInitTimeSelect.options[reservationInitTimeSelect.selectedIndex].value || false;
    var reservationFinalTime = reservationFinalTimeSelect.options[reservationFinalTimeSelect.selectedIndex].value || false;
    var reservationName = document.querySelector(`[name="nome"]`).value || 'false';
    var reservationEmail = document.querySelector(`[name="email"]`).value || 'false';
    var reservationPhone = document.querySelector(`[name="telefone"]`).value || 'false';
    var reservationNeeds = document.querySelector(`[name="recursos"]`).value || false;
    var form = {
        name: reservationName,
        email: reservationEmail,
        meetRoom: reservationRoom,
        needs: reservationNeeds,
        phone: reservationPhone.replace(/\D/g, ''),
        resStart: `${reservationDate} ${reservationInitTime}`,
        resEnd: `${reservationDate} ${reservationFinalTime}`
    };
    if(validator(form)){
      return form;
    } else {
      return false;
    }
  }

  /**
   * [handleUpdateForm] Manipula o formulário para exibir
   * o objeto a ser atualizado.
   *
   * @param   {object} reservation objeto a ser atualizado.
   *
   * @return  {DOM object} botão de ação do formulário.
   */
   var handleUpdateForm = (reservation = {}) => {
    var timeStart = reservation.resStart.split(' ');
    var timeEnd = reservation.resEnd.split(' ');
    document.querySelector(`[name="data"]`).value  = timeStart[0] || '';
    document.querySelector(`[name="sala"]`).value = reservation.meetRoom;
    document.querySelector(`[name="horaI"]`).value = timeStart[1];
    document.querySelector(`[name="horaF"]`).value = timeEnd[1];
    document.querySelector(`[name="nome"]`).value = reservation.name || '';
    document.querySelector(`[name="email"]`).value = reservation.email || '';
    document.querySelector(`[name="telefone"]`).value = reservation.phone || '';
    document.querySelector(`[name="recursos"]`).value = reservation.needs || '';
    document.querySelector(`.reserva-div1>h1`).innerHTML = 'Atualizar Reserva de Sala de Reunião';
    var btnUpAction =document.querySelector(`.upd-reservation`);
    var btnAction = document.querySelector(`.booking-action`);
    btnAction.disabled = true;
    btnAction.style.display = 'none';
    btnUpAction.disabled = false;
    btnUpAction.style.display = 'flex';
    return btnUpAction;
  };

  var getTest = () => {
    return 'Teste de export de variável';
  };

  return {
    modalToogle,
    validator,
    phoneMask,
    getFormValues,
    handleUpdateForm,
    getTest
  };
}