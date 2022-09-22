/**
 * [Reservation] Classe principal
 * da reserva de sala.
 * @author Jose Maciel <jose.maciel@extreme.digital>
 * @version 1.0
 * @copyright Proderj 2022.
 */

var apiHandler = ApiHandlerFactory();
var els = DomElsHandlerFactory();
var formHandler = FormHandlerFactory();
var list = EventHandlerFactory();



var initEvents = () => {
  els.btnOpen.addEventListener(`click`, (e) => {
    formHandler.modalToogle();
  });
  els.btnClose.addEventListener(`click`, (e) => {
    formHandler.modalToogle();
  });
  formHandler.phoneMask();
  setInterval(els.setTime, 1000);

  list.registerListener((val) => {
    els.loadScreen(val);
    els = DomElsHandlerFactory();
    initUpdateAndDeleteEvents(els.delBtns, els.upBtns);
  });
};

var initUpdateAndDeleteEvents = (delBtns = [], upBtns = []) => {
  delBtns.forEach((delBtn, i) => {
    delBtn.addEventListener('click',(e) => {
      var remove = apiHandler.remove(e.target.dataset.id);
      els.loadingToogle();
      remove.then((res) => {
        var reservations = apiHandler.get();
        reservations.then((res) => {
          list.item = res.result;
        }).catch((err) => {
          console.error(err);
          setTimeout(() => {
            els.alertToogle();
          }, 300);
        });
      }).catch((err) => {
        console.log(err);
        setTimeout(() => {
          els.alertToogle();
        }, 300);
      });
    });
  });
  upBtns.forEach((updateBtn, i) => {
    updateBtn.addEventListener('click',(e) => {
      var found = list.item.find(el => el.id == e.target.dataset.id);
      var btnUpAction = formHandler.handleUpdateForm(found);
      formHandler.modalToogle();
      btnUpAction.addEventListener('click', (e) => {
        var formValues = formHandler.getFormValues();
        if(formValues) {
          formHandler.modalToogle();
          els.loadingToogle();
          var update = apiHandler.update(found.id, formValues);
          update.then((res) => {
            var reservations = apiHandler.get();
            reservations.then((res) => {
              // Recarrega a tela após atualizar a reserva
              list.item = res.result;
            }).catch((err) => {
              console.error(err);
              setTimeout(() => {
                els.alertToogle();
              }, 300);
            });
          }).catch((err) => {
            console.error({
              msg: `updateReservation error`,
              err
              });
              setTimeout(() => {
                els.alertToogle();
              }, 300);
          });
        } else {
          els.showAlert();
        }
      });
    });
  });
}

var main = () => {
  els.setTime();
  if(els.contentBlock) {
    var reservations = apiHandler.get();
    initEvents();
    reservations.then((res) => {
      // dispara o evento para carregar a tela
      list.item = res.result;
    }).then((res) => {
      els.btnAction.addEventListener(`click`, (e) => {
        var formValues = formHandler.getFormValues();
        if(formValues) {
          var search =  apiHandler.find({
            resStart: formValues.resStart
          });
          search.then((res) => {
            if (! res.status) {
              formHandler.modalToogle();
              els.loadingToogle();
              var save = apiHandler.save(formValues);
              save.then((res) => {
                  var reservations = apiHandler.get();
                  reservations.then((res) => {
                    // Recarrega a tela após salvar a reserva
                    list.item = res.result;
                  }).catch((err) => {
                    console.error(err);
                    setTimeout(() => {
                      els.alertToogle();
                    }, 300);
                  });
              }).catch((err) => {
                  console.error(`save Reservation error`);
                  setTimeout(() => {
                    els.alertToogle();
                  }, 300);
              });
            } else {
              els.showAlert('resExists');
            }
          }).catch((err) => {
            console.error(err);
            setTimeout(() => {
              els.alertToogle();
            }, 300);
          });
        } else {
          els.showAlert();
        }
      });
    }).catch((err) => {
      console.error(err);
      setTimeout(() => {
        els.alertToogle();
      }, 300);
    });
  }
  else {
    console.error({
      error: ` render(contentBlock);`,
    });
  }
}

main();