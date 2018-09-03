'use strict';

var newMeetingOpenModalButton = document.querySelector('.page-header__link');
var formCloseModalButton = document.querySelector('.add-meeting-form__cancel');
var newMeeting = document.querySelector('.new-meeting');
var diagramDate = document.querySelector('.diagram-date');
var diagramContent = document.querySelector('.diagram-content');
var newMeetingCloseModalButton = document.querySelector('.new-meeting__close');
var buttonAddEventFromTimeline = document.querySelectorAll('.timeline__add-event');
var eventDateForm = document.getElementById('meeting-date');
var eventStartTimeForm = document.getElementById('meeting-start-time');
var eventEndTimeForm = document.getElementById('meeting-end-time');
var eventCreateButton = document.querySelector('.add-meeting-form__submit');
var eventCreatedModal = document.querySelector('.meeting-created');
var eventCreatedModalClose = document.querySelector('.meeting-created__close');

// Открывает окно создания Новой встречи
// Через нажатие на кнопку 'Создать встречу'
newMeetingOpenModalButton.addEventListener('click', function (evt) {

  evt.preventDefault();

  var elementTarget = evt.target;

  addNewMeetingModule(elementTarget);

}, false);

// Открывает окно создания Новой встречи
// С помощью нажатия на один из свободных слотов с переговорками

addListenerToEveryTimelineButton();

// Но сперва делаем цикл, который добавляет
// Обработчик событий для всех свободных слотов в timeline

function addListenerToEveryTimelineButton() {
  for (var i = 0; i < buttonAddEventFromTimeline.length; i++) {
    buttonAddEventFromTimeline[i].addEventListener('click', function (evt) {
      addNewMeetingModal(evt);
    });
  }
}

// Закрываем модалку новой встречи
// Через крестик

newMeetingCloseModalButton.addEventListener('click', function (evt) {
  closeNewMeetingModal(evt);
}, false);

// Закрываем модалку новой встречи
// Через кнопку Отмена

formCloseModalButton.addEventListener('click', function (evt) {
  closeNewMeetingModal(evt);
}, false);

// Далее идет функция для открытия Модалки новой встречи

function addNewMeetingModal(evt) {

  evt.preventDefault();

  var elementTarget = evt.target;

  addNewMeetingModule();

  setDataForm(elementTarget);
}

function addNewMeetingModule() { // Удалил elementTarget
  newMeetingOpenModalButton.classList.add('page-header__link--hide');

  diagramDate.classList.add('diagram-date--close');

  diagramContent.classList.add('diagram-content--close');

  newMeeting.classList.add('new-meeting--show');
}

function setDataForm(currentElement) {
  var eventDate = currentElement.getAttribute('data-event-date');
  var startTime = currentElement.getAttribute('data-event-start');
  var endTime = currentElement.getAttribute('data-event-end');

  eventDateForm.setAttribute('value', eventDate);
  eventStartTimeForm.setAttribute('value', startTime);
  eventEndTimeForm.setAttribute('value', endTime);
}

function closeNewMeetingModal(evt) {

  evt.preventDefault();

  eventStartTimeForm.setAttribute('value', '00:00');
  eventEndTimeForm.setAttribute('value', '00:00');

  newMeeting.classList.remove('new-meeting--show');

  diagramDate.classList.remove('diagram-date--close');

  diagramContent.classList.remove('diagram-content--close');

  newMeetingOpenModalButton.classList.remove('page-header__link--hide');
}

// Добавляем слушатель событий
// На кнопку создания встречи

eventCreateButton.addEventListener('click', function (evt) {

  closeNewMeetingModal(evt);

  eventCreatedModal.classList.remove('meeting-created--hidden');
});

// Закрываем модальное окно созданного события

eventCreatedModalClose.addEventListener('click', function (evt) {
  evt.preventDefault();

  eventCreatedModal.classList.add('meeting-created--hidden');
});
