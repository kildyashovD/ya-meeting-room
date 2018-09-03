'use strict';

var ESC_KEYCODE = 27;

var timelineEventBlockes = document.querySelectorAll('.timeline__item--blocked');

addListenerToEveryBlockedEvent();

function addListenerToEveryBlockedEvent() {

  for (var i = 0; i < timelineEventBlockes.length; i++) {

    timelineEventBlockes[i].addEventListener('click', function (evt) {

      var currentTimeline = evt.target;
      var currentEventData = currentTimeline.querySelector('.event-data');
      var removeClass = 'event-data--show';

      if (currentEventData.classList.contains('event-data--show')) {

        currentEventData.classList.remove('event-data--show');

      } else {

        currentEventData.classList.add('event-data--show');

        closeElementWindowClick(currentTimeline, currentEventData, removeClass);

      }
    }, false);
  }
}

function closeElementWindowClick(currentElement, currentSelector, removeClass) {
  window.addEventListener('click', function (evt) {

    if (evt.target !== currentElement) {
      currentSelector.classList.remove(removeClass);
    }
  }, false);

  document.addEventListener('keydown', function (evt) {

    if (evt.keyCode === ESC_KEYCODE) {
      currentSelector.classList.remove(removeClass);
    }
  }, false);
}
