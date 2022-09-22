var DomElsHandlerFactory = () => {
  var contentBlock = document.querySelector(`#indexDireita9`);
  var loadingBlock = document.querySelector(`.loading-container`)
  var tableBlock = document.querySelector(`.main-menu`);
  var tableDiv = document.querySelector(".reservaDireitaTabela");
  var table = document.querySelector("#who-table>tbody");
  var noBirthdayBlock = document.querySelector("#noBirthday");
  var btnSearch = document.querySelector(".loupe");
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

  var renderTable = (list) => {
    if (list.status === true) {
      table.innerHTML = "";
      tableDiv.style.display = `block`;
      noBirthdayBlock.style.display = `none`;
      if (Array.isArray(list.result)) {
        list.result.map((cloud) => {
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
          table.insertAdjacentHTML("beforeend", qsomos);
        });
      } else {
        list.result.contributors.map((cloud) => {
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
          table.insertAdjacentHTML("beforeend", qsomos);
        });
      }
    }
    else {
      tableDiv.style.display = `none`;
      noBirthdayBlock.style.display = `block`;
    }
  }

  return {
    contentBlock,
    loadingBlock,
    tableBlock,
    table,
    btnSearch,
    inputSearch,
    alertToogle,
    loadingToogle,
    renderTable
  };
};