'use strict';

(function () {

  window.dateCurrent = new Date();

  window.DateConst = {
    YEAR: dateCurrent.getFullYear(),
    MONTH: dateCurrent.getMonth(),
    DAY: dateCurrent.getDate(),
  };

})();
