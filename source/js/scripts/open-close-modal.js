'use strict';

(function () {

  function openModal(modalElement, classClosed) {
    modalElement.classList.remove(classClosed);
  }

  window.openModal = openModal;

  function closeModal(modalElement, classClosed) {
    modalElement.classList.add(classClosed);
  }

  window.closeModal = closeModal;

})();
