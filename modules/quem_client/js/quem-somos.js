// * [apiUrl] Variável global para a url da API.
var els = DomElsHandlerFactory();
var apiHandler = ApiHandlerFactory();
var list = EventHandlerFactory();
var pagination = {
  total: 0,
  page: 1,
  searchBy: 'name',
  caller: 'quemsomos',
  keyWord: ''
};

var createLiEvents = () => {
  var lis = els.pagBlock.querySelectorAll('li');
  lis.forEach((li, i) => {
    if(li.id !== 'dots') {
      li.addEventListener(`click`, (e) => {
        els.loadingToogle();
        pagination.page = parseInt(e.target.dataset.page);
        if (pagination.caller === 'btnSearch') {
          var contributors = apiHandler.search(pagination.searchBy, pagination.keyWord);
        } else {
          var contributors = apiHandler.get(pagination.page -1);
        }
        initEvents();
        contributors.then((res) => {
          list.item = res.result;
          setTimeout(() => {
            els.loadingToogle();
          }, 300);
        }).catch((error) => {
          console.log(error);
          setTimeout(() => {
            els.alertToogle();
          }, 300);
        });
      });
    }
  });
}

var initEvents = () => {
  els.btnSearch.addEventListener('click', (e) => {
    if (els.inputSearch) var keyWord = els.inputSearch.value;
    pagination.keyWord = keyWord;
    pagination.caller = 'btnSearch';
    console.log({
      loc: 'btnSearch',
      caller: pagination.caller
    });
    e.stopPropagation();
    els.loadingToogle();
    var contributors = apiHandler.search(pagination.searchBy, keyWord);
    contributors.then((res) => {
      console.log(res.result);
      list.item = res.result;
      setTimeout(() => {
        els.loadingToogle();
      }, 300);
    }).catch((error) => {
      console.log(error);
      setTimeout(() => {
        els.alertToogle();
      }, 300);
    });
  });
  els.btnDropdown.addEventListener('click', (e) => {
    $('.dropdown-content').slideToggle();
    e.stopPropagation();
  });
  els.btnsDropdownList.forEach((btn, i) => {
    btn.addEventListener(`click`, (e) => {
      pagination.searchBy = e.target.dataset.search;
      $('.dropdown-content').slideToggle();
      e.stopPropagation();
    });
  });
  list.registerListener((val) => {
    els.renderTable(val.contributors);
    pagination.total = val.totalOfPositions;
    els.renderPagination(pagination.total, pagination.page);
    createLiEvents();
  });
}

/**
 * [qsomos] Constrói a requisição
 * do método que retorna a lista de quem somos.
 */

const quemsomos = async () => { 
  var contributors = apiHandler.get();
  initEvents();
  contributors.then((res) => {
    console.log({
      loc: 'quemsomos',
      caller: pagination.caller
    });
    list.item = res.result;
    setTimeout(() => {
      els.loadingToogle();
    }, 300);
  }).catch((error) => {
    console.log(error);
    setTimeout(() => {
      els.alertToogle();
    }, 300);
  });
};

quemsomos();
