'use strict';

(function () {

  window.currentDateTextShort = dateCurrent.toLocaleString('ru', DateOption.short);
  currentDateTextShort = currentDateTextShort.slice(0, currentDateTextShort.length - 1);

  window.currentDateTextLong = dateCurrent.toLocaleString('ru', DateOption.long);

  var currentDateElement = document.querySelector('.actually-date__day-value');
  currentDateElement.textContent = (currentDateTextShort + ' · Сегодня');

  setDateAttrForm();

  function setDateAttrForm() {
    document.querySelector('.add-meeting-form__date').setAttribute('value', currentDateTextLong);
  }
})();
