"use strict";

var floorsTemplate = document.querySelector("#floor-template");
var meetingRoomsTemplate = document.querySelector("#meeting-rooms-template");
var meetingRoomsListElement = document.querySelector(".meeting-rooms");
var floors = ["7 этаж", "6 этаж"];
var rooms = [
  {
    name: "Ржавый фред",
    floor: floors[1],
    size: "3-6 человек",
    available: false
  },
  {
    name: "Прачечная",
    floor: floors[1],
    size: "до 10 человек",
    available: true
  },
  {
    name: "Желтый дом",
    floor: floors[1],
    size: "до 10 человек",
    available: true
  },
  {
    name: "Оранжевый тюльпан",
    floor: floors[1],
    size: "до 10 человек",
    available: false
  },
  {
    name: "Джокер",
    floor: floors[0],
    size: "3-6 человек",
    available: true
  },
  {
    name: "Мариванна",
    floor: floors[0],
    size: "3-6 человек",
    available: true
  },
  {
    name: "Тонкий боб",
    floor: floors[0],
    size: "3-6 человек",
    available: true
  },
  {
    name: "Черная вдова",
    floor: floors[0],
    size: "3-6 человек",
    available: true
  },
  {
    name: "Белорусский ликер",
    floor: floors[0],
    size: "3-6 человек",
    available: true
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

    if (rooms[k].floor === floors[i]) {

      roomsElement.querySelector(".meeting-rooms__name").textContent = rooms[k].name;

      roomsElement.querySelector(".meeting-rooms__size").textContent = rooms[k].size;

      meetingRoomsListElement.querySelectorAll(".meeting-rooms__item")[i].appendChild(roomsElement);
    }
  }
};
