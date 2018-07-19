"use strict";

var scrollElement = document.querySelector(".main-content");
var roomTextData = document.querySelectorAll(".meeting-rooms__text-content");
var roomSize = document.querySelectorAll(".meeting-rooms__size");

scrollElement.addEventListener("scroll", function () {

    for (var i = 0; i < roomSize.length; i++)
    roomSize[i].classList.toggle("meeting-rooms__size--hide", scrollElement.scrollLeft > 50);

    for (var j = 0; j < roomTextData.length; j++) {
      roomTextData[j].classList.toggle("meeting-rooms__text-content--mob-scroll", scrollElement.scrollLeft > 50);
    }

}, false);
