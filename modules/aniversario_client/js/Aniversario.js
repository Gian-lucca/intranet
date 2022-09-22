/**
 * FormClient - Client para consumo da API de Aniversariantes
 * de Sala.
 * @author 
 * @version 1.0
 * @copyright Proderj 2022.
 */

var els = DomElsHandlerFactory();
var apiHandler = ApiHandlerFactory();
var list = EventHandlerFactory();
var dtBirthday = EventHandlerFactory();

/**
 * [birthday] Cronstrói a requisição
 * do método que retorna a lista de aniversariantes.
 */
var initEvents = () => {
  els.btnSearch.addEventListener('click', (e) => {
    if (els.inputSearch && els.inputSearch.value) {
      var keyWord = els.inputSearch.value;
      e.stopPropagation();
      els.loadingToogle();
      var contributors = apiHandler.search('name', keyWord);
      contributors.then((res) => {
        list.item = res;
        setTimeout(() => {
          els.loadingToogle();
        }, 300);
      }).catch((error) => {
        console.error(error);
        setTimeout(() => {
          els.alertToogle();
        }, 300);
      });
    }
  });
  list.registerListener((val) => {
    els.renderTable(val);
  });
  dtBirthday.registerListener((val) => {
    var dateArr = val.split('/');
    var keyWord = `${dateArr[1]}-${dateArr[0]}`;
    console.log({
      loc: 'dtBirthday.registerListener',
      val,
      keyWord
    });
    els.loadingToogle();
    var contributors = apiHandler.search('date', keyWord);
    contributors.then((res) => {
      list.item = res;
      setTimeout(() => {
        els.loadingToogle();
      }, 300);
    }).catch((error) => {
      console.error(error);
      setTimeout(() => {
        els.alertToogle();
      }, 300);
    });
  });
}

const birthday = async () => {
  var contributors = apiHandler.get();
  initEvents();
  contributors.then((res) => {
    list.item = res;
    setTimeout(() => {
      els.loadingToogle();
    }, 300);
  }).catch((error) => {
    console.error(error);
    setTimeout(() => {
      els.alertToogle();
    }, 300);
  });
}

birthday()

  $(() => {
  $( "#datepicker" ).datepicker({
    minDate: new Date((new Date()).getFullYear(), 0, 1),
    dateFormat: 'dd/mm/yy',
    monthNames: ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],
    dayNames:["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"],
    dayNamesShort:["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],
    dayNamesMin:["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],
    weekHeader:"Sm",
    firstDay:1,
    closeText:"Fechar",
    prevText:"&#x3C;Anterior",
    nextText:"Próximo&#x3E;",
    currentText:"Hoje",
    showOtherMonths: true,
    selectOtherMonths: true,
    onSelect: (dateText) => {
      console.log(dateText);
      dtBirthday.item = dateText;
    }
  }
  );
});