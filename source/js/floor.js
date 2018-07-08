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

for (var i = 0; i < floors.length; i++) {
  var floorsElement = floorsTemplate.content.cloneNode("true");

  floorsElement.querySelector(".meeting-rooms__floor").textContent = floors[i];

  meetingRoomsListElement.appendChild(floorsElement);
}

for (var n = 0; n < rooms.length; n++) {
  var roomsElement = meetingRoomsTemplate.content.cloneNode("true");
  if (rooms[n].floor === "6 этаж") {
    roomsElement.querySelector(".meeting-rooms__name").textContent = rooms[n].name;
    roomsElement.querySelector(".meeting-rooms__size").textContent = rooms[n].size;

    meetingRoomsListElement.querySelector(".meeting-rooms__item").appendChild(roomsElement);
  } else {
    roomsElement.querySelector(".meeting-rooms__name").textContent = rooms[n].name;
    roomsElement.querySelector(".meeting-rooms__size").textContent = rooms[n].size;

    meetingRoomsListElement.querySelectorAll(".meeting-rooms__item")[floors.length-1].appendChild(roomsElement);
  }
}
