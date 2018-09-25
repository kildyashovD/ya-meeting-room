'use strict';

var scrollElement = document.querySelector('.main-content');
var roomsName = document.querySelectorAll('.meeting-rooms__name');

scrollElement.addEventListener('scroll', function () {
  roomsOnScroll(roomsName);
}, false);

function roomsOnScroll(e) {
  if (scrollElement.scrollLeft > 140) {
    for (var i = 0; i < e.length; i++) {
      e[i].classList.add('meeting-rooms__name--mob-scroll-js');
      e[i].style.left = scrollElement.scrollLeft + 12 + 'px';
    }
  } else {
    for (var k = 0; k < e.length; k++) {
      if (e[k].classList.contains('meeting-rooms__name--mob-scroll-js')) {
        e[k].classList.remove('meeting-rooms__name--mob-scroll-js');
      }
    }
  }
}
