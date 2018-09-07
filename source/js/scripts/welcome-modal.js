'use strict';

(function(){
  var welcomeModalElement = document.querySelector('.welcome-modal');

  window.addEventListener('load', function () {
    setTimeout(closeWelcomeModal, 1000);
  }, false);

  function closeWelcomeModal() {
    welcomeModalElement.classList.add('welcome-modal--hidden');
  }
})();
