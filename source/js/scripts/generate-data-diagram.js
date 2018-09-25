'use strict';

// Здесь заполняет данные в таблицу с встречами
// Начинаем работать с данными по этажам
// Переговорками и коллегам

(function () {

  var floorsTemplate = document.querySelector('#floor-template');
  var meetingRoomsTemplate = document.querySelector('#meeting-rooms-template');
  var meetingRoomsListElement = document.querySelector('.meeting-rooms');
  var eventFree = document.querySelector('#timeline-item-free');
  var eventBlocked = document.querySelector('#timeline-item-blocked');

  generateFloorsData();

  function generateFloorsData() {

    for (var i = 0; i < floors.length; i++) {

      var floorsElement = floorsTemplate.content.cloneNode('true');

      floorsElement.querySelector('.meeting-rooms__floor').textContent = floors[i];

      meetingRoomsListElement.appendChild(floorsElement);

      generateMeetingRoomsData(i);
    }
  }

  function generateMeetingRoomsData(i) {

    for (var k = 0; k < rooms.length; k++) {

      var roomsElement = meetingRoomsTemplate.content.cloneNode('true');
      var meetingRoomsCount;

      if (rooms[k].floor === floors[i]) {

        if (rooms[k].freeTime !== true) {
          roomsElement.firstElementChild.classList.add('meeting-rooms__data--disabled');
        }

        roomsElement.querySelector('.meeting-rooms__name').textContent = rooms[k].name;

        roomsElement.querySelector('.meeting-rooms__size').textContent = rooms[k].size;

        meetingRoomsListElement.querySelectorAll('.meeting-rooms__item')[i].appendChild(roomsElement);

        meetingRoomsCount = meetingRoomsListElement.querySelectorAll('.timeline').length;

        generateTimelines(i, k, meetingRoomsCount);
      }
    }
  }

  function generateTimelines(i, k, meetingRoomsCount) {

    for (var j = 0; j < rooms[k].meetings.length; j++) {

      var timelineFree = eventFree.content.cloneNode('true');
      var timelineBlocked = eventBlocked.content.cloneNode('true');
      var timelineDuringTime = rooms[k].meetings[j].during;

      if (rooms[k].meetings[j].available) {

        timelineFree.querySelector('.timeline__item').classList.add('timeline__item--' + timelineDuringTime);

        setFreeEventDataAttr(timelineFree, k, j, i);

        meetingRoomsListElement.querySelectorAll('.timeline')[meetingRoomsCount - 1].appendChild(timelineFree);

      } else {

        timelineBlocked.querySelector('.timeline__item').classList.add('timeline__item--' + timelineDuringTime);

        timelineBlocked.querySelector('.event-data__name').textContent = rooms[k].meetings[j].meetingsName;

        timelineBlocked.querySelector('.event-data__date').textContent = rooms[k].meetings[j].date;

        timelineBlocked.querySelector('.event-data__time').textContent = rooms[k].meetings[j].startTime + ' ' + ' - ' + ' ' + rooms[k].meetings[j].endTime;

        timelineBlocked.querySelector('.event-data__rooms').textContent = rooms[k].name;

        timelineBlocked.querySelector('.event-data__participant-name').textContent = rooms[k].meetings[j].participants[0].name;

        timelineBlocked.querySelector('.event-data__participant-avatar').setAttribute('src', rooms[k].meetings[j].participants[0].avatar);

        if (rooms[k].meetings[j].participants.length > 1) {

          var wordEnding;

          if ((rooms[k].meetings[j].participants.length - 1) === 1) {
            wordEnding = '';
          } else if ((rooms[k].meetings[j].participants.length - 1) > 1 && (rooms[k].meetings[j].participants.length - 1) < 4) {
            wordEnding = 'а';
          } else {
            wordEnding = 'ов';
          }

          timelineBlocked.querySelector('.event-data__participants-count').textContent = 'и ' + (rooms[k].meetings[j].participants.length - 1) + ' участник' + wordEnding;
        }

        meetingRoomsListElement.querySelectorAll('.timeline')[meetingRoomsCount - 1].appendChild(timelineBlocked);
      }
    }
  }

  function setFreeEventDataAttr(currentElement, k, j, i) {
    currentElement.querySelector('.timeline__add-event').setAttribute('data-event-date', rooms[k].meetings[j].date);
    currentElement.querySelector('.timeline__add-event').setAttribute('data-event-start', rooms[k].meetings[j].startTime);
    currentElement.querySelector('.timeline__add-event').setAttribute('data-event-end', rooms[k].meetings[j].endTime);
    currentElement.querySelector('.timeline__add-event').setAttribute('data-event-room', rooms[k].name);
    currentElement.querySelector('.timeline__add-event').setAttribute('data-event-floor', floors[i]);
  }
})();
