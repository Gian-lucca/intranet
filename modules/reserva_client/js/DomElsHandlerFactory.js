/**
 * [DomElsHandlerFactory] Manipula o DOM
 * da reserva de sala.
 * @author Jose Maciel <jose.maciel@extreme.digital>
 * @version 1.0
 * @copyright Proderj 2022.
 */

var DomElsHandlerFactory = () => {
  var contentBlock = document.querySelector(`#indexDireita9`);
  var loadingBlock = document.querySelector(`.loading-container`)
  var tableBlock = document.querySelector(`#indexDireita9>section>.reserva-direita-content`);
  var btnAction = document.querySelector(`.booking-action`);
  var btnOpen = document.querySelector(`#reservaBotao`);
  var btnClose = document.querySelector(`#reservaCompleto-botao2`);
  var dateTime = tableBlock.querySelector(`.reservaDireitaCima>div>div>p`);
  var tableDiv = tableBlock.querySelector(`.reservaDireitaTabela`);
  var delBtns = document.querySelectorAll(`.del-btn`);
  var upBtns = document.querySelectorAll(`.update-btn`);
  var alertDiv = document.querySelector(`.alert`);
  var alertOpError = document.querySelector(`#alertOpError`);
  var alertMsg = document.querySelector(`#alertMsg`);
  var alertServerError = document.querySelector("#alertServerError");

  var getAssets = (origin) => {
    var asset = {
      'http://localhost:8110': {
        editIcon: '/sites/default/modules/reserva_client/img/Icon_Editar.png',
        delIcon: '/sites/default/modules/reserva_client/img/Icon_Deletar.png'
      },
      'http://www.intranetdrupal.proderj.rj.gov.br': {
        editIcon: '/sites/intranetProderj/modules/reserva_client/img/Icon_Editar.png',
        delIcon: '/sites/intranetProderj/modules/reserva_client/img/Icon_Deletar.png'
      },
      'http://www.intranet.proderj.rj.gov.br': {
        editIcon: '/sites/intranetProderj/modules/reserva_client/img/Icon_Editar.png',
        delIcon: '/sites/intranetProderj/modules/reserva_client/img/Icon_Deletar.png'
      }
    };
    return (asset[origin] || asset['http://localhost:8110']);
  };

  var renderTable = (arr = []) => {
    var str = '';
    tableDiv.innerHTML = '';
    var asset = getAssets(location.origin);
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
            <td>
              <div class = "iconesFlex">
                <div class = "iconePointer update-btn">
                  <img data-id="${item.id}" src="${asset.editIcon}">
                </div>
                
              </div>
            </td>
          </tr>
        `;
        str += tr;
      });
    }
    var table = `
      <table class="tabela" id = "tabela3">
        <thead>
          <tr>
            <th id = "width">Data Reserva</th>
            <th id = "width">Hora de Início</th>
            <th id = "width">Hora de Termino</th>
            <th>Sala de Reunião</th>
            <th>Nome do Solicitante</th>
            <th id = "width">Ações</th>
          </tr>
        </thead>
        <tbody>
          ${str}
        </tbody>
      </table>
    `;
    var parser = new DOMParser();
    var doc = parser.parseFromString(table, "text/html");
    tableDiv.appendChild(doc.body.firstChild)
  };

  var loadingToogle = () => {
    if(tableBlock.style.display === `none` || tableBlock.style.display === '') {
      loadingBlock.style.display = `none`;
      tableBlock.style.display = `block`;
    } else {
      loadingBlock.style.display = `block`;
      tableBlock.style.display = `none`;
    }
  };

  var alertToogle = () => {
    if(alertServerError.style.display === `none` || alertServerError.style.display === '') {
      loadingBlock.style.display = `none`;
      alertServerError.style.display = `block`;
    } else {
      loadingBlock.style.display = `block`;
      alertServerError.style.display = `none`;
    }
  };

  var loadScreen = (arr = []) => {
    renderTable(arr)
    setTimeout(() => {
      loadingToogle();
    }, 1000);
  };

  var setTime = () => {
    var date = new Date();
    dateTime.innerHTML = '';
    dateTime.innerHTML = `${date.toLocaleString('pt-BR')}`;
  };

  var showAlert = (msg = 'default') => {
    var aMsg = {
      default: 'Atenção! Preencha corretamente os campos asinalados com * (Obrigatórios).',
      resExists: 'Já existe uma reserva para esta data.<br> Escolha outra data/horário e tente novamente.'
    };
    alertMsg.innerHTML = '';
    alertMsg.innerHTML = aMsg[msg];
    alertOpError.style.display = 'block';
    setTimeout(() => {
      alertOpError.style.display = 'none';
    }, 7000);
  }
  return {
    loadingToogle,
    loadScreen,
    setTime,
    showAlert,
    alertToogle,
    contentBlock,
    btnAction,
    btnOpen,
    btnClose,
    delBtns,
    upBtns
  };
};