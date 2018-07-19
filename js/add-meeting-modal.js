"use strict";

var newMeetingOpenModalButton = document.querySelector(".page-header__link");
var formCloseModalButton = document.querySelector(".add-meeting-form__cancel");
var newMeeting = document.querySelector(".new-meeting");
var diagramDate = document.querySelector(".diagram-date");
var diagramContent = document.querySelector(".diagram-content");
var newMeetingCloseModalButton = document.querySelector(".new-meeting__close");
var buttonAddEventFromTimeline = document.querySelectorAll(".timeline__add-event");

newMeetingOpenModalButton.addEventListener("click", function (evt) {
  addNewMeetingModal(evt);
}, false);

formCloseModalButton.addEventListener("click", function (evt) {
  closeNewMeetingModal (evt);
}, false);

newMeetingCloseModalButton.addEventListener("click", function (evt) {
  closeNewMeetingModal (evt);
}, false);

addListenerToEveryTimelineButton();

function addListenerToEveryTimelineButton () {
  for (var i = 0; i < buttonAddEventFromTimeline.length; i++) {
    buttonAddEventFromTimeline[i].addEventListener("click", function (evt) {
      addNewMeetingModal (evt);
    });
  }
};

function addNewMeetingModal (evt) {

  evt.preventDefault();

  var elementTarget = evt.target;

  newMeetingOpenModalButton.classList.add("page-header__link--hide");

  diagramDate.classList.add("diagram-date--close");

  diagramContent.classList.add("diagram-content--close");

  newMeeting.classList.add("new-meeting--show");

  setDataForm (elementTarget);

};

function setDataForm (currentElement) {
  var eventDate = currentElement.getAttribute("data-event-date");
  var startTime = currentElement.getAttribute("data-event-start");
  var endTime = currentElement.getAttribute("data-event-end");
  var eventDateForm = document.getElementById("meeting-date");
  var eventStartTimeForm = document.getElementById("meeting-start-time");
  var eventEndTimeForm = document.getElementById("meeting-end-time");

  eventDateForm.setAttribute("value", eventDate);
  eventStartTimeForm.setAttribute("value", startTime);
  eventEndTimeForm.setAttribute("value", endTime);

};

function closeNewMeetingModal (evt) {

  newMeeting.classList.remove("new-meeting--show");

  diagramDate.classList.remove("diagram-date--close");

  diagramContent.classList.remove("diagram-content--close");

  newMeetingOpenModalButton.classList.remove("page-header__link--hide");
};
