var DomElsHandlerFactory = () => {
  var contentBlock = document.querySelector(`#indexDireita9`);
  var loadingBlock = document.querySelector(`.loading-container`)
  var tableBlock = document.querySelector(`.main-menu`);
  var pagBlock = document.querySelector(".pagination ul");
  var table = document.querySelector("#who-table>tbody");
  var btnSearch = document.querySelector(".loupe");
  var btnDropdown = document.querySelector(".calendario-main");
  var btnsDropdownList = document.querySelectorAll(".dropdown-content>span");
  var inputSearch = document.querySelector(".Busca-texto");
  var alertBox = document.querySelector("#alertBox");

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
    if(alertBox.style.display === `none` || alertBox.style.display === '') {
      loadingBlock.style.display = `none`;
      alertBox.style.display = `block`;
    } else {
      loadingBlock.style.display = `block`;
      alertBox.style.display = `none`;
    }
  };

  var renderPagination = (totalPages, page = 1) => {
    els.pagBlock.innerHTML = '';
    var liTag = '';
    var active;
    var beforePage = page - 1;
    var afterPage = page + 1;
    if(page > 2){ //Se o valor da pagina for menor que 2 Enumerator, add 1 depois do botão anterior
      liTag += `<li class="first numb" data-page=1 ></li>`;
      if(page > 3){ //Se o valor é maior que 3 após add (...) depois do  primeiro li ou pagina
        liTag += `<li class="dots"><span>...</span></li>`;
      }
    }
    // quantas paginas ou li mostra antes da atual li
    if (page == totalPages) {
      beforePage = beforePage - 2;
    } else if (page == totalPages - 1) {
      beforePage = beforePage - 1;
    }
    // quantas paginas ou li mostra depois da atual li
    if (page == 1) {
      afterPage = afterPage + 2;
    } else if (page == 2) {
      afterPage  = afterPage + 1;
    }
    for (var plength = beforePage; plength <= afterPage; plength++) {
      if (plength > totalPages) { //if plength is greater than totalPage length then continue
        continue;
      }
      if (plength == 0) { //if plength is 0 than add +1 in plength value
        plength = plength + 1;
      }
      if(page == plength){ //if page is equal to plength than assign active string in the active variable
        active = "active";
      }else{ //else leave empty to the active variable
        active = "";
      }
      liTag += `<li class="numb ${active}" data-page=${plength}>${plength}</li>`;
    }
    if(page < totalPages - 1){ //if page value is less than totalPage value by -1 then show the last li or page
      if(page < totalPages - 2){ //if page value is less than totalPage value by -2 then add this (...) before the last li or page
        liTag += `<li id="dots"class="dots"><span>...</span></li>`;
      }
      liTag += `<li class="last numb" data-page=${totalPages}>${totalPages}</li>`;
    }
    els.pagBlock.innerHTML = liTag;
  };

  var renderTable = (list) => {
    els.table.innerHTML =  "";
    list.map((cloud) => {
      let apenasData = cloud.birth.substr(0,10);
      let dia = apenasData.substr(8, 2);
      let mes = apenasData.substr(5, 2);
      let dataFormatada = `${dia}/${mes}`;
      let qsomos = `
          <tr>
              <td>${cloud.name}</td>
              <td>${dataFormatada}</td>
              <td>${cloud.roleName}</td>
              <td>${cloud.ua}</td>
              <td>${cloud.email1}</td>
          </tr>
      `
      els.table.insertAdjacentHTML("beforeend", qsomos);
    });
  }

  return {
    contentBlock,
    loadingBlock,
    tableBlock,
    pagBlock,
    table,
    btnSearch,
    btnDropdown,
    btnsDropdownList,
    inputSearch,
    alertToogle,
    loadingToogle,
    renderPagination,
    renderTable
  };
};