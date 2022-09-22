/**
 * FormClient - Client para consumo da API de Reserva
 * de Sala.
 * @author Jose Maciel <jose.maciel@extreme.digital>
 * @version 1.0
 * @copyright Proderj 2021.
 */

/**
 * [apiUrl] Variável global para a url da API.
 *
 * @var {String}
 */
// var apiUrl = 'http://localhost:8091';
var apiUrl = 'http://www.intranetapi.rj.gov.br/index.php';

/**
 * [apiUrl] Variável global para a lista de reservas.
 *
 * @var {String}
 */
var list;

/**
 * [render] Renderiza a tela de Reserva
 *
 * @param   {DOM object} el componente onde será inserida a
 * tela de Reserva.
 * @param   {undefined[]}  resList lista com reservas já existentes
 *
 * @return  {DOM object}
 */
var render = (el, resList = []) => {
  var date = new Date();
  var component = `
  <div>
  <section  id = "indexDireita9" class = "indexDireita">
  <div class = "esquerda"></div>
  <section class = "indexDireitaInicial">
      <div class = "direitaTitulo">
          <div class = "direitaTituloLinha"></div>
          <div class = "direitaTituloTexto">
              <div id = "paginaInicial9" class = "iconePointerSublinhado iconePointer">
                  <h3>Página Inicial</h3>
              </div>
              <h3>></h3>
              <h3>Serviços</h3>
              <h3>></h3>
              <h3>Reserva Sala de Reunião</h3>
          </div>
          <h1>Reserva Sala de Reunião</h1>
      </div>
      <div class = "reservaDireita">
          <div class = "reservaDireitaCima">
              <div>
                  <h2></h2>
                  <br>
                  <div class = "reservaDireitaCimaCalendario">
                      <img src = "/sites/intranetProderj/themes/intranetProderj/intranetProderj/imagens/icon_calendario.png" style="width: auto;">
                      <p>
                          ${date.toLocaleString('pt-BR')}
                      </p>
                  </div>
              </div>
              <div id = "reservaBotao" class = "botaoCompleto"> 
                  <div class="botao">
                      Solicitar Reserva de Sala de Reunião
                  </div>
              </div>
          </div>
          <div class = "reservaDireitaTabela">
              <table class="tabela" id = "tabela3">
                  <thead>
                      <tr>
                          <th id = "width">Data Reserva</th>
                          <th id = "width">Hora de Início</th>
                          <th id = "width">Hora de Termino</th>
                          <th>Sala de Reunião</th>
                          <th>Nome do Solicitante</th>
                          <th id = "width">Status</th>
                          <th id = "width"></th>
                      </tr>
                  </thead>
                  <tbody>
                      ${getRows(resList)}
                  </tbody>
              </table>
          </div>
      </div>
  </section>
  </section>
  <section style = "display: none;" id = "indexDireita10" class = "reservaCompleto">
  <div id = "reservaCompleto-botao2" class = "reservaCompleto-botao">
      <img id = "iconeFechar" src = "/sites/intranetProderj/themes/intranetProderj/intranetProderj/imagens/Ícones/X.png">
  </div>
  <div class = "reserva">
      <div class = "reserva-div1">
          <h1>Solicitação de Reserva de Sala de Reunião</h1>
      </div>
      <div class = "reserva-div2">
          <div class="alert" style="display:none">
            <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
            <span>Atenção! Preencha corretamente os campos asinalados com * (Obrigatórios).</span>
          </div>
          <div class="form">
              <div class = "reservaFormFlex">
                  <div class = "reservaFormFlexCampos">
                      <label id = "labels">* Data da Reserva:</label>
                      <input class = "reservaInput" value="yyyy-MM-dd" type="date"  name="data" required>
                  </div>
                  <div class = "reservaFormFlexCampos">
                      <label class = "sala" for="sala">* Sala:</label>
                      <select class = "reservaInput" name="sala">
                          <option value="" disabled selected>Selecione</option>
                          <option value="24 andar">24º andar</option>
                          <option value="25 andar">25º andar</option>
                      </select>
                  </div>
              </div>
              <div class = "reservaFormFlex">
                  <div class = "reservaFormFlexCampos">
                      <label class = "horaI" for="horaI">* Hora Inicial da Reserva:</label>
                      <select class = "reservaInput" name="horaI"  required>
                          <option value="" disabled selected>Selecione</option>
                          <option value="09:00:00">09:00:00</option>
                          <option value="10:00:00">10:00:00</option>
                          <option value="11:00:00">11:00:00</option>
                          <option value="12:00:00">12:00:00</option>
                          <option value="13:00:00">13:00:00</option>
                          <option value="14:00:00">14:00:00</option>
                          <option value="15:00:00">15:00:00</option>
                          <option value="16:00:00">16:00:00</option>
                          <option value="17:00:00">17:00:00</option>
                      </select>
                  </div>
                  <div class = "reservaFormFlexCampos">
                      <label class = "horaF" for="horaF">* Hora Final da Reserva:</label>
                      <select class = "reservaInput" name="horaF"  required>
                          <option value="" disabled selected>Selecione</option>
                          <option value="10:00:00">10:00:00</option>
                          <option value="11:00:00">11:00:00</option>
                          <option value="12:00:00">12:00:00</option>
                          <option value="13:00:00">13:00:00</option>
                          <option value="14:00:00">14:00:00</option>
                          <option value="15:00:00">15:00:00</option>
                          <option value="16:00:00">16:00:00</option>
                          <option value="17:00:00">17:00:00</option>
                          <option value="18:00:00">18:00:00</option>
                      </select>
                  </div>
              </div>
              <div>
                  <div class = "reservaFormFlexCampos2">
                      <label for="nome">* Nome do Solicitante:</label>
                      <input class = "reservaInput2" type="text" name="nome"  required>
                  </div>
                  <div class = "reservaFormFlexCampos2">
                      <label for="email">* Email:</label>
                      <input class = "reservaInput2" type="email" placeholder="fulano@mail.com" name="email"  required>
                  </div>
                  <div class = "reservaFormFlexCampos2">
                      <label for="telefone">* Telefone:</label>
                      <input id="phone" class = "reservaInput2" type="tel" placeholder="(xx)xxxxx-xxxx" name="telefone"  required/>
                  </div>
              </div>
              <div class = "reservaFormFlexCampos2">
                  <label for="recursos">Informe os Recursos Extras que irá Precisar:</label>
                  <textarea name="recursos"></textarea>
              </div>
              <div style = "margin-top: 10px; text-align: -webkit-center;">
                  <div class  = "botaoForm">
                      <input class="booking-action" type="button" id = "botaoForm" value="Reservar" />
                      <input class="booking-action upd-reservation" type="button" id = "botaoForm" value="Atualizar Reserva" disabled style="display: none;"/>
                  </div>
              </div>
          </div>
      </div>
  </div>
  </section>
  </div>
  `;

  var parser = new DOMParser();
  var doc = parser.parseFromString(component, "text/html");
  el.appendChild(doc.body.firstChild);
};

/**
 * [getRows] Converte a lista de Reservas em linhas
 * de tabela HTML no formato string
 *
 * @param   {undefined[]}  arr lista com reservas já existentes
 *
 * @return  {string}
 */
var getRows = (arr = []) => {
  var str = '';
  if (!Array.isArray(arr) || !arr.length) {
    str = `
    <tr>
      <td>
        Nenhum item encontrado.
      </td>
    </tr>
    `;
  } else {
    arr.forEach((item, i) => {
        var timeStart = item.resStart.split(' ');
        var timeEnd = item.resEnd.split(' ');
        var dateStr = timeStart[0].split("-");
        var dateStart = `${dateStr[2]}/${dateStr[1]}/${dateStr[0]}`;
        var tr = `
        <tr>
          <td>${dateStart}</td>
          <td>${timeStart[1]}</td>
          <td>${timeEnd[1]}</td>
          <td>${item.meetRoom == '24 andar' ? '24º andar': '25º andar'}</td>
          <td>${item.name}</td>
          <td>Reserva Confirmada</td>
          <td>
            <div class = "iconesFlex">
              <div class = "iconePointer update-btn">
                <img data-id="${item.id}" src="/sites/intranetProderj/themes/intranetProderj/intranetProderj/imagens/Icon_Editar.png">
              </div>
              <div class="iconePointer del-btn">
                <img data-id="${item.id}" src="/sites/intranetProderj/themes/intranetProderj/intranetProderj/imagens/Icon_Deletar.png">
              </div>
            </div>
          </td>
        </tr>
        `
        str += tr;
    });
  }
  return str;
};

var phoneMask = () => {
  document.getElementById('phone').addEventListener('blur',  (e) => {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{2})(\d{5})(\d{4})/);
    e.target.value = `(${x[1]}) ${x[2]}-${x[3]}`;
  });
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
  if(formObj.phone === '') return false;
  var now = Date.now();
  var timeStart = new Date(formObj.resStart);
  var timeEnd = new Date(formObj.resEnd);
  if(timeStart.getTime() < now) return false;
  if(timeEnd.getTime() <= timeStart.getTime()) return false;
  return true;
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
};

/**
 * [getReservations] Cronstrói a requisição
 * do método que retorna a lista de reserva.
 *
 * @return  {Promise}
 */
var getReservations = async () => {
  var url = `${apiUrl}/reservation`;
  var init = { 
    method: 'GET'
  };
  if(self.fetch) {
    var resp = await fetch(url, init);
    return await resp.json();
  } else {
    console.log('Fectch não existe');
  }
};

/**
 * [saveReservation] Cronstrói a requisição
 * do método que salva uma reserva.
 *
 * @return  {Promise}
 */
var saveReservation = async (formData = {}) => {
  var url = `${apiUrl}/reservation/create`;
  var init = { 
    method: 'POST',
    body: JSON.stringify(formData) 
  };
  if(self.fetch) {
    var resp = await fetch(url, init);
    return await resp.json();
  } else {
    console.log('Fectch não existe');
  }
};

/**
 * [updateReservation] Cronstrói a requisição
 * do método que atualiza reserva.
 *
 * @return  {Promise}
 */
var updateReservation = async (id = '', formData = {}) => {
  var url = `${apiUrl}/reservation/update/${id}`;
  var init = { 
    method: 'POST',
    body: JSON.stringify(formData)
  };
  if(self.fetch) {
    var resp = await fetch(url, init);
    return await resp.json();
  } else {
    console.log('Fectch não existe');
  }
};

/**
 * [removeReservation] Cronstrói a requisição
 * do método que apaga uma reserva.
 *
 * @return  {Promise}
 */
var removeReservation = async (id = '') => {
  var url = `${apiUrl}/reservation/remove/${id}`;
  var init = { 
    method: 'GET'
  };
  if(self.fetch) {
    var resp = await fetch(url, init);
    return await resp.json();
  } else {
    console.log('Fectch não existe');
  }
};

/**
 * [modalToogle] Exibe/Esconde o modal com
 * o formulário de reserva
 *
 * @return  {[]}
 */
var modalToogle= () => {
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

/**
 * [formClient] Função principal que controla o Client
 * para consumo da API.
 *
 * @param   {string}  baseEl Seletor css que indica o elemento
 * HTML onde o Client será renderizado.
 *
 * @param   {string}  url indica qual url o Client será renderizado.
 *
 * @return  {DOM object}
 */
var formClient = (baseEl = '', url = '') => {
  var contentBlock = document.querySelector(`${baseEl}`);
  if (contentBlock  && (location == `${location.origin}${url}`)) {
    var reservations = getReservations();
    reservations.then((res) => {
      render(contentBlock, res.result);
      list = res.result;
      phoneMask();
      var btnAction = document.querySelector(`.booking-action`);
      var btnOpen = document.querySelector(`#reservaBotao`);
      var btnClose = document.querySelector(`#reservaCompleto-botao2`);
      var reservationDelBtns = document.querySelectorAll(`.del-btn`);
      var reservationUpdateBtns = document.querySelectorAll(`.update-btn`);
      if(btnOpen) {
          btnOpen.addEventListener(`click`, (e) => {
            modalToogle();
          });
      }
      if(btnClose) {
          btnClose.addEventListener(`click`, (e) => {
            modalToogle();
          });
      }
      if(btnAction) {
          btnAction.addEventListener(`click`, () => {
            var formValues = getFormValues();
            if(formValues) {
              var send = saveReservation(formValues);
              send.then((res) => {
                  console.log({
                  msg: `saveReservation success`,
                  res
                  });
                  modalToogle();
                  document.location.reload();
              }).catch((err) => {
                  console.error({
                  msg: `saveReservation error`,
                  err
                  });
              });
              console.log(formValues);
            } else {
              document.querySelector(`.alert`).style.display = 'block';
            }
          });
      }
      if(reservationDelBtns) {
        reservationDelBtns.forEach((delBtn, i) => {
          delBtn.addEventListener('click',(e) => {
            console.log(e.target.dataset.id);
            var remove = removeReservation(e.target.dataset.id);
            remove.then((res) => {
              console.log(res);
              document.location.reload();
            }).catch((err) => {
              console.log(err);
            });
          });
        });
      }
      if(reservationUpdateBtns) {
        reservationUpdateBtns.forEach((updateBtn, i) => {
          updateBtn.addEventListener('click',(e) => {
            var found = list.find(el => el.id == e.target.dataset.id);
            var btnUpAction = handleUpdateForm(found);
            modalToogle();
            btnUpAction.addEventListener('click', (e) => {
              var formValues = getFormValues();
              if(formValues) {
                var update = updateReservation(found.id, formValues);
                update.then((res) => {
                  console.log({
                    msg: `updateReservation success`,
                    res
                    });
                    modalToogle();
                    document.location.reload();
                }).catch((err) => {
                  console.error({
                    msg: `updateReservation error`,
                    err
                    });
                });
              } else {
                document.querySelector(`.alert`).style.display = 'block';
              }
            });
          });
        });
      }
    }).catch((err) => {
      console.error(err);
    });
  } else {
      console.error({
          error: ` render(contentBlock);`,
      });
  }
};

/**
 * Instancia o Client
 */
formClient('.titulo-secao', '/Reserva_sala');