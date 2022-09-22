/**
 * [ApiHandlerFactory] Manipula o a API
 * de reserva de sala.
 * @author Jose Maciel <jose.maciel@extreme.digital>
 * @version 1.0
 * @copyright Proderj 2022.
 */

var ApiHandlerFactory = () => {

  var getApiUrl = (origin) => {
    var apiUri = {
      'http://www.intranet1.proderj.rj.gov.br': 'http://localhost:8091',
      'http://www.intranetdrupal.proderj.rj.gov.br': 'http://www.intranetapi.proderj.rj.gov.br/index.php',
      'http://www.intranet.proderj.rj.gov.br': 'http://www.intranetapi.rj.gov.br/index.php',
      'default': 'http://localhost:8110'
    };
    return (apiUri[origin] || apiUri['default']);
  };

  /**
   * [get] Cronstrói a requisição
   * do método que retorna a lista de reserva.
   *
   * @return  {Promise}
   */
  var get = async (pagination = 0) => {
    var url = `${getApiUrl(location.origin)}/contributors/${pagination}`;
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
   * [get] Cronstrói a requisição
   * do método que retorna a lista de reserva.
   *
   * @return  {Promise}
   */
  var search = async (type = 'name', keyWord = '') => {
    var url = {
      'name': `${getApiUrl(location.origin)}/contributors/search?word=${keyWord}`,
      'ua': `${getApiUrl(location.origin)}/contributors/uaRoName?ua=${keyWord}`,
      'roleName': `${getApiUrl(location.origin)}/contributors/uaRoName?roleName=${keyWord}`,
    };
    var init = { 
      method: 'GET'
    };
    if(self.fetch) {
      var resp = await fetch(url[type], init);
      return await resp.json();
    } else {
      console.log('Fectch não existe');
    }
  };

  return {
    get,
    search
  };
};