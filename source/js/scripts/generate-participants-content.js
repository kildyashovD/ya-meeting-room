'use strict';

(function () {
  // Здесь находим блок с коллегами
  // И Генерим туда сотрудников

  var participantTemplate = document.querySelector('#participant-template');
  var participantDropList = document.querySelector('.participants-list--drop');

  // Это функция генерации коллег
  generateParticipantsDropList();
  function generateParticipantsDropList() {

    for (var i = 0; i < workers.length; i++) {

      var participantElement = participantTemplate.content.cloneNode('true');
      var participantItem = participantElement.querySelector('.participants-list__item');
      var participantAvatar = participantElement.querySelector('.participants-list__avatar');
      var participantName = participantElement.querySelector('.participants-list__name');
      var participantFloor = participantElement.querySelector('.participants-list__floor');

      participantItem.setAttribute('data-id', workers[i].id);
      participantAvatar.setAttribute('src', workers[i].avatar);
      participantName.textContent = workers[i].name;
      participantFloor.textContent = ' · ' + workers[i].floor;

      participantDropList.appendChild(participantElement);
    }
  }

  // Здесь мы добавляем обработчик событий на
  // каждый элемент с сотрудников
  // При клике мы копируем содержимое и вставляет в блок
  // С выбранными коллегами

  var participantsList = document.querySelectorAll('.participants-list');
  var participantCheckedList = document.querySelector('.participants-list--checked');

  participantsList[0].addEventListener('click', function (e) {
    var targetElement = e.target;

    addCheckedParticipant(targetElement);
  });

  function addCheckedParticipant(targetElement) {
    while (targetElement !== participantsList[0]) {

      if (targetElement.classList.contains('participants-list__item--drop')) {
        var participantElement = targetElement;
        participantElement.classList.remove('participants-list__item--drop');
        participantElement.querySelector('.participants-list__avatar').classList.remove('participants-list__avatar--drop');
        participantElement.querySelector('.participants-list__close').classList.remove('participants-list__close--hidden');

        targetElement.classList.add('participants-list__item--hidden');

        participantElement.querySelector('.participants-list__floor').style.display = 'none';

        participantCheckedList.appendChild(participantElement);
        return;
      }
      targetElement = targetElement.parentNode;
    }
  }

  participantsList[1].addEventListener('click', function (e) {
    var targetElement = e.target;

    deleteCheckedParticipant(targetElement);
  });

  function deleteCheckedParticipant(targetElement) {
    while (targetElement !== participantsList[1]) {
      if (targetElement.classList.contains('participants-list__close')) {
        var participantsItem = targetElement.parentNode;
        participantsItem = participantsItem.parentNode;

        var partcipantChecked = targetElement.parentNode;

        partcipantChecked.classList.add('participants-list__item--drop');
        partcipantChecked.querySelector('.participants-list__avatar').classList.add('participants-list__avatar--drop');
        partcipantChecked.querySelector('.participants-list__close').classList.add('participants-list__close--hidden');
        partcipantChecked.classList.remove('participants-list__item--hidden');
        partcipantChecked.querySelector('.participants-list__floor').style.display = 'inline-block';

        participantDropList.appendChild(partcipantChecked);
        return;
      }
      targetElement = targetElement.parentNode;
    }
  }
})();
