"use strict";

//Устанавливает текущую дату

var today = new Date();
var dateOptionsShort = {
  day: "numeric",
  month: "short"
}

var dateOptionsLong = {
  day: "numeric",
  month: "long",
  year: "numeric"
}

var currentDateTextShort = today.toLocaleString("ru", dateOptionsShort);
currentDateTextShort = currentDateTextShort.slice(0, currentDateTextShort.length - 1);

var currentDateTextLong = today.toLocaleString("ru", dateOptionsLong);

var currentDateElement = document.querySelector(".actually-date__day-value");
currentDateElement.textContent = (currentDateTextShort + " · Сегодня");

setDateAttrForm ();

function setDateAttrForm () {
  document.querySelector(".add-meeting-form__date").setAttribute("value", currentDateTextLong);
}

// Начинаем работать с данными по этажам
// Переговоркам и коллегам

var floorsTemplate = document.querySelector("#floor-template");
var meetingRoomsTemplate = document.querySelector("#meeting-rooms-template");
var meetingRoomsListElement = document.querySelector(".meeting-rooms");
var eventFree = document.querySelector("#timeline-item-free");
var eventBlocked = document.querySelector("#timeline-item-blocked");
var eventData = document.querySelector("#event-data-template");

var floors = ["7 этаж", "6 этаж"];

var workers = [
  {
    name: "Дарт Вейдер",
    avatar: "img/dart-veider-avatar.jpg",
    floor: floors[0]
  },
  {
    name: "Человек паук",
    avatar: "img/spider-avatar.jpg",
    floor: floors[1]
  },
  {
    name: "Железный человек",
    avatar: "img/iron-man-avatar.jpg",
    floor: floors[0]
  }
];

// Здесь находим блок с коллегами
// И Генерим туда сотрудников

var participantTemplate = document.querySelector("#participant-template");
var participantDropList = document.querySelector(".participants-list--drop");

// Это функция генерации коллег
generateParticipantsDropList ();
function generateParticipantsDropList () {

  for (var i = 0; i < workers.length; i++) {

    var participantElement = participantTemplate.content.cloneNode("true");
    var participantAvatar = participantElement.querySelector(".participants-list__avatar");
    var participantName = participantElement.querySelector(".participants-list__name");
    var participantFloor = participantElement.querySelector(".participants-list__floor");

    participantAvatar.setAttribute("src", workers[i].avatar);
    participantName.textContent = workers[i].name;
    participantFloor.textContent = " · " + workers[i].floor;

    participantDropList.appendChild(participantElement);
  };
};

// Здесь мы добавляем обработчик событий на
// каждый элемент с сотрудников
// При клике мы копируем содержимое и вставляет в блок
// С выбранными коллегами

var participantsItems = document.querySelectorAll(".participants-list__item--drop");
var participantCheckedList = document.querySelector(".participants-list--checked")

setListenerEveryParticipant ();
function setListenerEveryParticipant () {
  for (var i = 0; i < participantsItems.length; i++) {
    participantsItems[i].addEventListener("click", function () {
      var participantElement = this.cloneNode("true");
      participantElement.classList.remove("participants-list__item--drop");
      participantElement.querySelector(".participants-list__avatar").classList.remove("participants-list__avatar--drop");
      participantElement.querySelector(".participants-list__close").classList.remove("participants-list__close--hidden");
      participantCheckedList.appendChild(participantElement);
      participantElement.removeChild(participantElement.querySelector(".participants-list__floor"));
    });
  }
}

var rooms = [
  {
    name: "Ржавый фред",
    floor: floors[1],
    size: "3-6 человек",
    freeTime: false,
    meetings: [
      {
        meetingsName: "Рассуждения о высоком",
        date: currentDateTextLong,
        participants: [workers[1], workers[0]],
        startTime: "08:00",
        endTime: "11:15",
        during: "3h15m",
        available: false
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: currentDateTextLong,
        participants: [workers[0], workers[1], workers[0], workers[1], workers[0], workers[1], workers[0]],
        startTime: "11:15",
        endTime: "12:15",
        during: "1h0m",
        available: false
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: currentDateTextLong,
        participants: [workers[0]],
        startTime: "12:15",
        endTime: "13:30",
        during: "1h15m",
        available: false
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: currentDateTextLong,
        participants: [workers[0]],
        startTime: "14:30",
        endTime: "17:00",
        during: "3h30m",
        available: false
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: currentDateTextLong,
        participants: [workers[0]],
        startTime: "17:00",
        endTime: "20:00",
        during: "3h0m",
        available: false
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: currentDateTextLong,
        participants: [workers[0]],
        startTime: "20:00",
        endTime: "22:30",
        during: "2h30m",
        available: false
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: currentDateTextLong,
        participants: [workers[0]],
        startTime: "22:30",
        endTime: "23:00",
        during: "0h30m",
        available: false
      }
    ]
  },
  {
    name: "Прачечная",
    floor: floors[1],
    size: "до 10 человек",
    freeTime: true,
    meetings: [
      {
        meetingsName: "Рассуждения о высоком",
        date: currentDateTextLong,
        participants: [workers[0]],
        startTime: "08:00",
        endTime: "10:45",
        during: "2h45m",
        available: false
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: currentDateTextLong,
        participants: [workers[0]],
        startTime: "10:45",
        endTime: "12:15",
        during: "1h30m",
        available: false
      },
      {
        meetingsName: "",
        date: currentDateTextLong,
        participants: [],
        startTime: "12:15",
        endTime: "13:00",
        during: "0h45m",
        available: true
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: currentDateTextLong,
        participants: [workers[0]],
        startTime: "13:00",
        endTime: "14:00",
        during: "1h0m",
        available: false
      },
      {
        meetingsName: "",
        date: currentDateTextLong,
        participants: [],
        startTime: "14:00",
        endTime: "14:45",
        during: "0h45m",
        available: true
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: currentDateTextLong,
        participants: [workers[0]],
        startTime: "14:45",
        endTime: "17:00",
        during: "2h15m",
        available: false
      },
      {
        meetingsName: "",
        date: currentDateTextLong,
        participants: [],
        startTime: "17:00",
        endTime: "17:45",
        during: "0h45m",
        available: true
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: currentDateTextLong,
        participants: [workers[0]],
        startTime: "17:45",
        endTime: "18:15",
        during: "0h30m",
        available: false
      },
      {
        meetingsName: "",
        date: currentDateTextLong,
        participants: [],
        startTime: "18:15",
        endTime: "20:00",
        during: "1h45m",
        available: true
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: currentDateTextLong,
        participants: [workers[0]],
        startTime: "20:00",
        endTime: "22:30",
        during: "2h30m",
        available: false
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: currentDateTextLong,
        participants: [workers[0]],
        startTime: "22:30",
        endTime: "23:00",
        during: "0h30m",
        available: false
      }
    ]
  },
  {
    name: "Желтый дом",
    floor: floors[1],
    size: "до 10 человек",
    freeTime: true,
    meetings: [
      {
        meetingsName: "Рассуждения о высоком",
        date: currentDateTextLong,
        participants: [workers[0]],
        startTime: "08:00",
        endTime: "10:45",
        during: "2h45m",
        available: false
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: currentDateTextLong,
        participants: [workers[0]],
        startTime: "10:45",
        endTime: "12:00",
        during: "1h15m",
        available: false
      },
      {
        meetingsName: "",
        date: currentDateTextLong,
        participants: [],
        startTime: "12:00",
        endTime: "14:30",
        during: "2h30m",
        available: true
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: currentDateTextLong,
        participants: [workers[0]],
        startTime: "14:30",
        endTime: "17:00",
        during: "2h30m",
        available: false
      },
      {
        meetingsName: "",
        date: currentDateTextLong,
        participants: [],
        startTime: "17:00",
        endTime: "20:00",
        during: "3h0m",
        available: true
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: currentDateTextLong,
        participants: [workers[0]],
        startTime: "20:00",
        endTime: "22:30",
        during: "2h30m",
        available: false
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: currentDateTextLong,
        participants: [workers[0]],
        startTime: "22:30",
        endTime: "23:00",
        during: "0h30m",
        available: false
      }
    ]
  },
  {
    name: "Оранжевый тюльпан",
    floor: floors[1],
    size: "до 10 человек",
    freeTime: false,
    meetings: [
      {
        meetingsName: "Рассуждения о высоком",
        date: currentDateTextLong,
        participants: [workers[0]],
        startTime: "08:00",
        endTime: "10:45",
        during: "2h45m",
        available: false
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: currentDateTextLong,
        participants: [workers[0]],
        startTime: "10:45",
        endTime: "12:15",
        during: "1h30m",
        available: false
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: currentDateTextLong,
        participants: [workers[0]],
        startTime: "12:15",
        endTime: "14:30",
        during: "2h15m",
        available: false
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: currentDateTextLong,
        participants: [workers[0]],
        startTime: "14:30",
        endTime: "17:00",
        during: "2h30m",
        available: false
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: currentDateTextLong,
        participants: [workers[0]],
        startTime: "17:00",
        endTime: "20:00",
        during: "3h0m",
        available: false
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: currentDateTextLong,
        participants: [workers[0]],
        startTime: "20:00",
        endTime: "22:30",
        during: "2h30m",
        available: false
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: currentDateTextLong,
        participants: [workers[0]],
        startTime: "22:30",
        endTime: "23:00",
        during: "0h30m",
        available: false
      }
    ]
  },
  {
    name: "Джокер",
    floor: floors[0],
    size: "3-6 человек",
    freeTime: true,
    meetings: [
      {
        meetingsName: "Рассуждения о высоком",
        date: currentDateTextLong,
        participants: [workers[0], "Человек паук", "Железный человек"],
        startTime: "08:00",
        endTime: "9:45",
        during: "1h45m",
        available: false
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: currentDateTextLong,
        participants: [workers[0]],
        startTime: "9:45",
        endTime: "12:00",
        during: "2h15m",
        available: false
      },
      {
        meetingsName: "",
        date: currentDateTextLong,
        participants: [],
        startTime: "12:00",
        endTime: "14:15",
        during: "2h15m",
        available: true
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: currentDateTextLong,
        participants: [workers[0]],
        startTime: "14:15",
        endTime: "16:45",
        during: "2h30m",
        available: false
      },
      {
        meetingsName: "",
        date: currentDateTextLong,
        participants: [],
        startTime: "16:45",
        endTime: "19:45",
        during: "3h0m",
        available: true
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: currentDateTextLong,
        participants: [workers[0]],
        startTime: "19:45",
        endTime: "22:15",
        during: "2h30m",
        available: false
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: currentDateTextLong,
        participants: [workers[0]],
        startTime: "22:15",
        endTime: "23:00",
        during: "0h45m",
        available: false
      }
    ]
  },
  {
    name: "Мариванна",
    floor: floors[0],
    size: "3-6 человек",
    freeTime: true,
    meetings: [
      {
        meetingsName: "Рассуждения о высоком",
        date: currentDateTextLong,
        participants: [workers[0]],
        startTime: "08:00",
        endTime: "10:45",
        during: "2h45m",
        available: false
      },
      {
        meetingsName: "",
        date: currentDateTextLong,
        participants: [],
        startTime: "10:45",
        endTime: "14:30",
        during: "3h45m",
        available: true
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: currentDateTextLong,
        participants: [workers[0]],
        startTime: "14:30",
        endTime: "17:00",
        during: "2h30m",
        available: false
      },
      {
        meetingsName: "",
        date: currentDateTextLong,
        participants: [],
        startTime: "17:00",
        endTime: "18:45",
        during: "1h45m",
        available: true
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: currentDateTextLong,
        participants: [workers[0]],
        startTime: "18:45",
        endTime: "22:30",
        during: "3h45m",
        available: false
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: currentDateTextLong,
        participants: [workers[0]],
        startTime: "22:30",
        endTime: "23:00",
        during: "0h30m",
        available: false
      }
    ]
  },
  {
    name: "Тонкий боб",
    floor: floors[0],
    size: "3-6 человек",
    freeTime: true,
    meetings: [
      {
        meetingsName: "Рассуждения о высоком",
        date: currentDateTextLong,
        participants: [workers[0]],
        startTime: "08:00",
        endTime: "10:45",
        during: "2h45m",
        available: false
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: currentDateTextLong,
        participants: [workers[0]],
        startTime: "10:45",
        endTime: "12:15",
        during: "1h30m",
        available: false
      },
      {
        meetingsName: "",
        date: currentDateTextLong,
        participants: [],
        startTime: "12:15",
        endTime: "14:30",
        during: "2h15m",
        available: true
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: currentDateTextLong,
        participants: [workers[0]],
        startTime: "14:30",
        endTime: "17:00",
        during: "2h30m",
        available: false
      },
      {
        meetingsName: "",
        date: currentDateTextLong,
        participants: [],
        startTime: "17:00",
        endTime: "20:00",
        during: "3h0m",
        available: true
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: currentDateTextLong,
        participants: [workers[0]],
        startTime: "20:00",
        endTime: "22:30",
        during: "2h30m",
        available: false
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: currentDateTextLong,
        participants: [workers[0]],
        startTime: "22:30",
        endTime: "23:00",
        during: "0h30m",
        available: false
      }
    ]
  },
  {
    name: "Черная вдова",
    floor: floors[0],
    size: "3-6 человек",
    freeTime: true,
    meetings: [
      {
        meetingsName: "Рассуждения о высоком",
        date: currentDateTextLong,
        participants: [workers[0]],
        startTime: "08:00",
        endTime: "10:45",
        during: "2h45m",
        available: false
      },
      {
        meetingsName: "",
        date: currentDateTextLong,
        participants: [],
        startTime: "10:45",
        endTime: "12:15",
        during: "1h30m",
        available: true
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: currentDateTextLong,
        participants: [workers[0]],
        startTime: "12:15",
        endTime: "14:30",
        during: "2h15m",
        available: false
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: currentDateTextLong,
        participants: [workers[0]],
        startTime: "14:30",
        endTime: "18:00",
        during: "3h30m",
        available: false
      },
      {
        meetingsName: "",
        date: currentDateTextLong,
        participants: [],
        startTime: "18:00",
        endTime: "20:00",
        during: "2h0m",
        available: true
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: currentDateTextLong,
        participants: [workers[0]],
        startTime: "20:00",
        endTime: "22:30",
        during: "2h30m",
        available: false
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: currentDateTextLong,
        participants: [workers[0]],
        startTime: "22:30",
        endTime: "23:00",
        during: "0h30m",
        available: false
      }
    ]
  },
  {
    name: "Белорусский ликер",
    floor: floors[0],
    size: "3-6 человек",
    freeTime: true,
    meetings: [
      {
        meetingsName: "Рассуждения о высоком",
        date: currentDateTextLong,
        participants: [workers[0]],
        startTime: "08:00",
        endTime: "10:45",
        during: "2h45m",
        available: false
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: currentDateTextLong,
        participants: [workers[0]],
        startTime: "10:45",
        endTime: "12:15",
        during: "1h30m",
        available: false
      },
      {
        meetingsName: "",
        date: currentDateTextLong,
        participants: [],
        startTime: "12:15",
        endTime: "14:30",
        during: "2h15m",
        available: true
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: currentDateTextLong,
        participants: [workers[0]],
        startTime: "14:30",
        endTime: "17:00",
        during: "2h30m",
        available: false
      },
      {
        meetingsName: "",
        date: currentDateTextLong,
        participants: [],
        startTime: "17:00",
        endTime: "20:00",
        during: "3h0m",
        available: true
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: currentDateTextLong,
        participants: [workers[0]],
        startTime: "20:00",
        endTime: "22:30",
        during: "2h30m",
        available: false
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: currentDateTextLong,
        participants: [workers[0]],
        startTime: "22:30",
        endTime: "23:00",
        during: "0h30m",
        available: false
      }
    ]
  }
];

generateFloorsTemplate ();

function generateFloorsTemplate () {

  for (var i = 0; i < floors.length; i++) {

    var floorsElement = floorsTemplate.content.cloneNode("true");

    floorsElement.querySelector(".meeting-rooms__floor").textContent = floors[i];

    meetingRoomsListElement.appendChild(floorsElement);

    generateMeetingRoomsTemplate (i);
  }
};

function generateMeetingRoomsTemplate (i) {

  for (var k = 0; k < rooms.length; k++) {

    var roomsElement = meetingRoomsTemplate.content.cloneNode("true");
    var meetingRoomsCount;

    if (rooms[k].floor === floors[i]) {

      roomsElement.querySelector(".meeting-rooms__name").textContent = rooms[k].name;

      roomsElement.querySelector(".meeting-rooms__size").textContent = rooms[k].size;

      meetingRoomsListElement.querySelectorAll(".meeting-rooms__item")[i].appendChild(roomsElement);

      meetingRoomsCount = meetingRoomsListElement.querySelectorAll(".timeline").length;

      generateTimelineTemplate (i, k, meetingRoomsCount);
    }
  }
};

function generateTimelineTemplate (i, k, meetingRoomsCount) {

  for (var j = 0; j < rooms[k].meetings.length; j++) {

    var timelineFree = eventFree.content.cloneNode("true");
    var timelineBlocked = eventBlocked.content.cloneNode("true");
    var timelineDuringTime = rooms[k].meetings[j].during;

    if(rooms[k].meetings[j].available) {

      timelineFree.querySelector(".timeline__item").classList.add("timeline__item--" + timelineDuringTime);

      setFreeEventDataAttr (timelineFree, k, j, i);

      meetingRoomsListElement.querySelectorAll(".timeline")[meetingRoomsCount - 1].appendChild(timelineFree);

    } else {

      timelineBlocked.querySelector(".timeline__item").classList.add("timeline__item--" + timelineDuringTime);

      timelineBlocked.querySelector(".event-data__name").textContent = rooms[k].meetings[j].meetingsName;

      timelineBlocked.querySelector(".event-data__date").textContent = rooms[k].meetings[j].date;

      timelineBlocked.querySelector(".event-data__time").textContent = rooms[k].meetings[j].startTime + " - " + rooms[k].meetings[j].endTime;

      timelineBlocked.querySelector(".event-data__rooms").textContent = rooms[k].name;

      timelineBlocked.querySelector(".event-data__participant-name").textContent = rooms[k].meetings[j].participants[0].name;

      timelineBlocked.querySelector(".event-data__participant-avatar").setAttribute("src", rooms[k].meetings[j].participants[0].avatar);

      if (rooms[k].meetings[j].participants.length > 1) {

        var wordEnding =
        ((rooms[k].meetings[j].participants.length - 1) == 1) ? "" :
        ((rooms[k].meetings[j].participants.length - 1) > 1 && (rooms[k].meetings[j].participants.length - 1) < 4) ? "а" :
        ((rooms[k].meetings[j].participants.length - 1) > 4) ? "ов" : "тест";

        timelineBlocked.querySelector(".event-data__participants-count").textContent = "и " + (rooms[k].meetings[j].participants.length - 1) + " участник" + wordEnding;
      }

      meetingRoomsListElement.querySelectorAll(".timeline")[meetingRoomsCount - 1].appendChild(timelineBlocked);
    }
  }
}

function setFreeEventDataAttr (currentElement, k, j, i) {
  currentElement.querySelector(".timeline__add-event").setAttribute("data-event-date", rooms[k].meetings[j].date);
  currentElement.querySelector(".timeline__add-event").setAttribute("data-event-start", rooms[k].meetings[j].startTime);
  currentElement.querySelector(".timeline__add-event").setAttribute("data-event-end", rooms[k].meetings[j].endTime);
  currentElement.querySelector(".timeline__add-event").setAttribute("data-event-room", rooms[k].name);
  currentElement.querySelector(".timeline__add-event").setAttribute("data-event-floor", floors[i]);

};
