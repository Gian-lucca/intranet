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
  var get = async () => {
    var url = `${getApiUrl(location.origin)}/reservation`;
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
   * [save] Cronstrói a requisição
   * do método que salva uma reserva.
   *
   * @return  {Promise}
   */
  var save = async (formData = {}) => {
    var url = `${getApiUrl(location.origin)}/reservation/create`;
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
   * [save] Cronstrói a requisição
   * do método que salva uma reserva.
   *
   * @return  {Promise}
   */
  var find = async (formData = {}) => {
    var url = `${getApiUrl(location.origin)}/reservation/find`;
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
   * [update] Cronstrói a requisição
   * do método que atualiza reserva.
   *
   * @return  {Promise}
   */
  var update = async (id = '', formData = {}) => {
    var url = `${getApiUrl(location.origin)}/reservation/update/${id}`;
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
   * [remove] Cronstrói a requisição
   * do método que apaga uma reserva.
   *
   * @return  {Promise}
   */
  var remove = async (id = '') => {
    var url = `${getApiUrl(location.origin)}/reservation/remove/${id}`;
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

  return {
    get,
    save,
    find,
    update,
    remove
  };

};