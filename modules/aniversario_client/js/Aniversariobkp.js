/**
 * FormClient - Client para consumo da API de Aniversariantes
 * de Sala.
 * @author 
 * @version 1.0
 * @copyright Proderj 2022.
 */


// * [apiUrl] Variável global para a url da API.

  /**
 * [birthday] Cronstrói a requisição
 * do método que retorna a lista de aniversariantes.
 */
 
// Aniversariantes
const birthday = async () => {
  let url = "http://www.intranetapi.proderj.rj.gov.br/index.php/contributors/birthday";
  let birthdayFetch = await fetch(url);
  let responseCloud = await birthdayFetch.json();

  console.log(responseCloud)

  responseCloud.result.map((cloud) => {

      // Transforma Data
      let apenasData = cloud.birth.substr(0,10)
      let data = new Date (apenasData)
      let dataFormatada = data.toLocaleDateString()
      // 
      let aniv = ` 
          
          <tr>
              
              <td>${cloud.name}</td>
              <td>${dataFormatada}</td>
              <td>${cloud.roleName}</td>
              <td>${cloud.ua}</td>
              <td>${cloud.email1}</td>
          </tr>`

      document.querySelector(".tabela tbody").insertAdjacentHTML("beforeend", aniv)
  });

  console.log(responseCloud)
}

birthday()



//   Datepicker
  $(() => {
  $( "#datepicker" ).datepicker({
    minDate: new Date((new Date()).getFullYear(), 0, 1),
    // maxDate: new Date((new Date()).getFullYear(), 11, 31),
    
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
    currentText:"Hoje"

  });
});