"use strict";

var floorsTemplate = document.querySelector("#floor-template");
var meetingRoomsTemplate = document.querySelector("#meeting-rooms-template");
var meetingRoomsListElement = document.querySelector(".meeting-rooms");
var eventFree = document.querySelector("#timeline-item-free");
var eventBlocked = document.querySelector("#timeline-item-blocked");
var floors = ["7 этаж", "6 этаж"];
var rooms = [
  {
    name: "Ржавый фред",
    floor: floors[1],
    size: "3-6 человек",
    freeTime: false,
    meetings: [
      {
        meetingsName: "Рассуждения о высоком",
        date: "14 декабря",
        participants: ["Дарт Вейдер"],
        startTime: "08:00",
        endTime: "11:15",
        during: "3h15m",
        available: false
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: "14 декабря",
        participants: ["Дарт Вейдер"],
        startTime: "11:15",
        endTime: "12:15",
        during: "1h0m",
        available: false
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: "14 декабря",
        participants: ["Дарт Вейдер"],
        startTime: "12:15",
        endTime: "13:30",
        during: "1h15m",
        available: false
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: "14 декабря",
        participants: ["Дарт Вейдер"],
        startTime: "14:30",
        endTime: "17:00",
        during: "3h30m",
        available: false
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: "14 декабря",
        participants: ["Дарт Вейдер"],
        startTime: "17:00",
        endTime: "20:00",
        during: "3h0m",
        available: false
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: "14 декабря",
        participants: ["Дарт Вейдер"],
        startTime: "20:00",
        endTime: "22:30",
        during: "2h30m",
        available: false
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: "14 декабря",
        participants: ["Дарт Вейдер"],
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
        date: "14 декабря",
        participants: ["Дарт Вейдер"],
        startTime: "08:00",
        endTime: "10:45",
        during: "2h45m",
        available: false
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: "14 декабря",
        participants: ["Дарт Вейдер"],
        startTime: "10:45",
        endTime: "12:15",
        during: "1h30m",
        available: false
      },
      {
        meetingsName: "",
        date: "14 декабря",
        participants: [],
        startTime: "12:15",
        endTime: "13:00",
        during: "0h45m",
        available: true
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: "14 декабря",
        participants: ["Дарт Вейдер"],
        startTime: "13:00",
        endTime: "14:00",
        during: "1h0m",
        available: false
      },
      {
        meetingsName: "",
        date: "14 декабря",
        participants: [],
        startTime: "14:00",
        endTime: "14:45",
        during: "0h45m",
        available: true
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: "14 декабря",
        participants: ["Дарт Вейдер"],
        startTime: "14:45",
        endTime: "17:00",
        during: "2h15m",
        available: false
      },
      {
        meetingsName: "",
        date: "14 декабря",
        participants: [],
        startTime: "17:00",
        endTime: "17:45",
        during: "0h45m",
        available: true
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: "14 декабря",
        participants: ["Дарт Вейдер"],
        startTime: "17:45",
        endTime: "18:15",
        during: "0h30m",
        available: false
      },
      {
        meetingsName: "",
        date: "14 декабря",
        participants: [],
        startTime: "18:15",
        endTime: "20:00",
        during: "1h45m",
        available: true
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: "14 декабря",
        participants: ["Дарт Вейдер"],
        startTime: "20:00",
        endTime: "22:30",
        during: "2h30m",
        available: false
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: "14 декабря",
        participants: ["Дарт Вейдер"],
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
        date: "14 декабря",
        participants: ["Дарт Вейдер"],
        startTime: "08:00",
        endTime: "10:45",
        during: "2h45m",
        available: false
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: "14 декабря",
        participants: ["Дарт Вейдер"],
        startTime: "10:45",
        endTime: "12:00",
        during: "1h15m",
        available: false
      },
      {
        meetingsName: "",
        date: "14 декабря",
        participants: [],
        startTime: "12:00",
        endTime: "14:30",
        during: "2h30m",
        available: true
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: "14 декабря",
        participants: ["Дарт Вейдер"],
        startTime: "14:30",
        endTime: "17:00",
        during: "2h30m",
        available: false
      },
      {
        meetingsName: "",
        date: "14 декабря",
        participants: [],
        startTime: "17:00",
        endTime: "20:00",
        during: "3h0m",
        available: true
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: "14 декабря",
        participants: ["Дарт Вейдер"],
        startTime: "20:00",
        endTime: "22:30",
        during: "2h30m",
        available: false
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: "14 декабря",
        participants: ["Дарт Вейдер"],
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
        date: "14 декабря",
        participants: ["Дарт Вейдер"],
        startTime: "08:00",
        endTime: "10:45",
        during: "2h45m",
        available: false
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: "14 декабря",
        participants: ["Дарт Вейдер"],
        startTime: "10:45",
        endTime: "12:15",
        during: "1h30m",
        available: false
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: "14 декабря",
        participants: ["Дарт Вейдер"],
        startTime: "12:15",
        endTime: "14:30",
        during: "2h15m",
        available: false
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: "14 декабря",
        participants: ["Дарт Вейдер"],
        startTime: "14:30",
        endTime: "17:00",
        during: "2h30m",
        available: false
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: "14 декабря",
        participants: ["Дарт Вейдер"],
        startTime: "17:00",
        endTime: "20:00",
        during: "3h0m",
        available: false
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: "14 декабря",
        participants: ["Дарт Вейдер"],
        startTime: "20:00",
        endTime: "22:30",
        during: "2h30m",
        available: false
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: "14 декабря",
        participants: ["Дарт Вейдер"],
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
        date: "14 декабря",
        participants: ["Дарт Вейдер"],
        startTime: "08:00",
        endTime: "9:45",
        during: "1h45m",
        available: false
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: "14 декабря",
        participants: ["Дарт Вейдер"],
        startTime: "9:45",
        endTime: "12:00",
        during: "2h15m",
        available: false
      },
      {
        meetingsName: "",
        date: "14 декабря",
        participants: [],
        startTime: "12:00",
        endTime: "14:15",
        during: "2h15m",
        available: true
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: "14 декабря",
        participants: ["Дарт Вейдер"],
        startTime: "14:15",
        endTime: "16:45",
        during: "2h30m",
        available: false
      },
      {
        meetingsName: "",
        date: "14 декабря",
        participants: [],
        startTime: "16:45",
        endTime: "19:45",
        during: "3h0m",
        available: true
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: "14 декабря",
        participants: ["Дарт Вейдер"],
        startTime: "19:45",
        endTime: "22:15",
        during: "2h30m",
        available: false
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: "14 декабря",
        participants: ["Дарт Вейдер"],
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
        date: "14 декабря",
        participants: ["Дарт Вейдер"],
        startTime: "08:00",
        endTime: "10:45",
        during: "2h45m",
        available: false
      },
      {
        meetingsName: "",
        date: "14 декабря",
        participants: [],
        startTime: "10:45",
        endTime: "14:30",
        during: "3h45m",
        available: true
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: "14 декабря",
        participants: ["Дарт Вейдер"],
        startTime: "14:30",
        endTime: "17:00",
        during: "2h30m",
        available: false
      },
      {
        meetingsName: "",
        date: "14 декабря",
        participants: [],
        startTime: "17:00",
        endTime: "18:45",
        during: "1h45m",
        available: true
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: "14 декабря",
        participants: ["Дарт Вейдер"],
        startTime: "18:45",
        endTime: "22:30",
        during: "3h45m",
        available: false
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: "14 декабря",
        participants: ["Дарт Вейдер"],
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
        date: "14 декабря",
        participants: ["Дарт Вейдер"],
        startTime: "08:00",
        endTime: "10:45",
        during: "2h45m",
        available: false
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: "14 декабря",
        participants: ["Дарт Вейдер"],
        startTime: "10:45",
        endTime: "12:15",
        during: "1h30m",
        available: false
      },
      {
        meetingsName: "",
        date: "14 декабря",
        participants: [],
        startTime: "12:15",
        endTime: "14:30",
        during: "2h15m",
        available: true
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: "14 декабря",
        participants: ["Дарт Вейдер"],
        startTime: "14:30",
        endTime: "17:00",
        during: "2h30m",
        available: false
      },
      {
        meetingsName: "",
        date: "14 декабря",
        participants: [],
        startTime: "17:00",
        endTime: "20:00",
        during: "3h0m",
        available: true
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: "14 декабря",
        participants: ["Дарт Вейдер"],
        startTime: "20:00",
        endTime: "22:30",
        during: "2h30m",
        available: false
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: "14 декабря",
        participants: ["Дарт Вейдер"],
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
        date: "14 декабря",
        participants: ["Дарт Вейдер"],
        startTime: "08:00",
        endTime: "10:45",
        during: "2h45m",
        available: false
      },
      {
        meetingsName: "",
        date: "14 декабря",
        participants: [],
        startTime: "10:45",
        endTime: "12:15",
        during: "1h30m",
        available: true
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: "14 декабря",
        participants: ["Дарт Вейдер"],
        startTime: "12:15",
        endTime: "14:30",
        during: "2h15m",
        available: false
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: "14 декабря",
        participants: ["Дарт Вейдер"],
        startTime: "14:30",
        endTime: "18:00",
        during: "3h30m",
        available: false
      },
      {
        meetingsName: "",
        date: "14 декабря",
        participants: [],
        startTime: "18:00",
        endTime: "20:00",
        during: "2h0m",
        available: true
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: "14 декабря",
        participants: ["Дарт Вейдер"],
        startTime: "20:00",
        endTime: "22:30",
        during: "2h30m",
        available: false
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: "14 декабря",
        participants: ["Дарт Вейдер"],
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
        date: "14 декабря",
        participants: ["Дарт Вейдер"],
        startTime: "08:00",
        endTime: "10:45",
        during: "2h45m",
        available: false
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: "14 декабря",
        participants: ["Дарт Вейдер"],
        startTime: "10:45",
        endTime: "12:15",
        during: "1h30m",
        available: false
      },
      {
        meetingsName: "",
        date: "14 декабря",
        participants: [],
        startTime: "12:15",
        endTime: "14:30",
        during: "2h15m",
        available: true
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: "14 декабря",
        participants: ["Дарт Вейдер"],
        startTime: "14:30",
        endTime: "17:00",
        during: "2h30m",
        available: false
      },
      {
        meetingsName: "",
        date: "14 декабря",
        participants: [],
        startTime: "17:00",
        endTime: "20:00",
        during: "3h0m",
        available: true
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: "14 декабря",
        participants: ["Дарт Вейдер"],
        startTime: "20:00",
        endTime: "22:30",
        during: "2h30m",
        available: false
      },
      {
        meetingsName: "Рассуждения о высоком",
        date: "14 декабря",
        participants: ["Дарт Вейдер"],
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
  //debugger;
  for (var k = 0; k < rooms.length; k++) {

    var roomsElement = meetingRoomsTemplate.content.cloneNode("true");
    var meetingRoomsCount;

    if (rooms[k].floor === floors[i]) {

      roomsElement.querySelector(".meeting-rooms__name").textContent = rooms[k].name;

      roomsElement.querySelector(".meeting-rooms__size").textContent = rooms[k].size;

      meetingRoomsListElement.querySelectorAll(".meeting-rooms__item")[i].appendChild(roomsElement);

      meetingRoomsCount = meetingRoomsListElement.querySelectorAll(".timeline").length;

      generateTimelineTemplate (k, meetingRoomsCount);
    }
  }
};

function generateTimelineTemplate (k, meetingRoomsCount) {

  for (var j = 0; j < rooms[k].meetings.length; j++) {

    var timelineFree = eventFree.content.cloneNode("true");
    var timelineBlocked = eventBlocked.content.cloneNode("true");
    var timelineDuringTime = rooms[k].meetings[j].during;

    if(rooms[k].meetings[j].available) {
      timelineFree.querySelector(".timeline__item").classList.add("timeline__item--" + timelineDuringTime);

      meetingRoomsListElement.querySelectorAll(".timeline")[meetingRoomsCount - 1].appendChild(timelineFree);
    } else {
      timelineBlocked.querySelector(".timeline__item").classList.add("timeline__item--" + timelineDuringTime);

      meetingRoomsListElement.querySelectorAll(".timeline")[meetingRoomsCount - 1].appendChild(timelineBlocked);
    }
  }
}
