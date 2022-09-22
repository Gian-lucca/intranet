/**
 * [FormHandlerFactory] Criar um 
 * de reserva de sala.
 * @author Jose Maciel <jose.maciel@extreme.digital>
 * @version 1.0
 * @copyright Proderj 2022.
 */

var EventHandlerFactory = () => {
  return {
    _itemInternal: 10,
    _itemListener: function(val) {},
    set item(val) {
      this._itemInternal = val;
      this._itemListener(val);
    },
    get item() {
      return this._itemInternal;
    },
    registerListener: function(listener) {
      this._itemListener = listener;
    }
  }
}