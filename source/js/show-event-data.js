"use strict";

var ESC_KEYCODE = 27;

var timelineEventBlocked = document.querySelectorAll(".timeline__item--blocked");

addListenerToEveryBlockedEvent ();

function addListenerToEveryBlockedEvent () {

  for (var i = 0; i < timelineEventBlocked.length; i++) {

    timelineEventBlocked[i].addEventListener("click", function () {

      var currentTimeline = this;
      var currentEventData = this.querySelector(".event-data");

      if (currentEventData.classList.contains("event-data--show")) {

        currentEventData.classList.remove("event-data--show");

      } else {

        currentEventData.classList.add("event-data--show");

        window.addEventListener("click", function (evt) {

          if (evt.target !== currentTimeline) {
            currentEventData.classList.remove("event-data--show");
          }
        }, false);

        document.addEventListener("keydown", function (evt) {

          if (evt.keyCode === ESC_KEYCODE) {
            currentEventData.classList.remove("event-data--show");
          }
        }, false);
      }
    }, false);
  }
};
