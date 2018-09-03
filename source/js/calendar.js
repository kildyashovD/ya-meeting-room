'use strict';

var buttonOpenCalendar = document.querySelector('.actually-date__day-value');
var calendarBlock = document.querySelector('.calendar');
// var calendarLayout = document.querySelector('.diagram-date__modal-layout');
var classClosedCalendar = 'calendar--closed';

// Открытие и закрытие окна

buttonOpenCalendar.addEventListener('click', function (evt) {
  evt.preventDefault();

  if (calendarBlock.classList.contains(classClosedCalendar)) {
    openModal(calendarBlock, classClosedCalendar);
  } else {
    closeModal(calendarBlock, classClosedCalendar);

    deleteCurrentElement();
    addDataCalendar(DATEYEAR, DATEMONTH);
    dateYear = DATEYEAR;
    dateMonth = DATEMONTH;
  }
});

function openModal(modalElement, classClosed) {
  modalElement.classList.remove(classClosed);
}

function closeModal(modalElement, classClosed) {
  modalElement.classList.add(classClosed);
}

// Добавляем данные в календарь

var contentCalendarDays = calendarBlock.querySelector('.calendar__days');
var templateDayPreviousMonth = calendarBlock.querySelector('#calendar-days-previous-month');
var templateDayCurrentMonth = calendarBlock.querySelector('#calendar-days-current-month');
var templateDayNextMonth = calendarBlock.querySelector('#calendar-days-current-month');
var dateDataGlobal = new Date();
var DATEYEAR = dateDataGlobal.getFullYear();
var DATEMONTH = dateDataGlobal.getMonth();
var DATEDAY = dateDataGlobal.getDate();
var dateYear = dateDataGlobal.getFullYear();
var dateMonth = dateDataGlobal.getMonth();

var dateHeader = calendarBlock.querySelector('.calendar__month-value');
var dateHeaderData = {
  year: 'numeric',
  month: 'long'
};

// Начало
addDataCalendar(dateYear, dateMonth);

function addDataCalendar(year, month) {
  var monthCount = month;
  var dateData = new Date(year, monthCount);

  generateHeaderMonth(dateData);

  generateDaysPreviousMonth(contentCalendarDays, monthCount, dateData, templateDayPreviousMonth);

  generateDaysCurrentMonth(contentCalendarDays, monthCount, dateData, templateDayCurrentMonth);

  generateDaysNextMounth(contentCalendarDays, monthCount, dateData, templateDayNextMonth);
}

// Добавления текущего месяца

function generateHeaderMonth(year) {

  var currentMonthString = year.toLocaleString('ru', dateHeaderData);
  currentMonthString = currentMonthString.slice(0, -3);

  dateHeader.textContent = currentMonthString;
}

// Добавление дней за прошлый период

function generateDaysPreviousMonth(block, month, day, templateBlock) {

  // Берем первый день месяца
  // Получаем количество дней до первого дня месяца
  // 1 сент = суббота (6 по js)
  // 6 - 1 = 5 дней до субботы
  var dayCount = day.getDay() - 1;

  for (var i = 0; i < dayCount; i++) {

    var template = templateBlock.content.cloneNode(true);

    block.appendChild(template);
  }
}

// Добавление дней в текущий месяц

function generateDaysCurrentMonth(block, month, day, templateBlock) {
  while (day.getMonth() === month) {

    var dayCount = day.getDate();
    var template = templateBlock.content.cloneNode(true);

    // debugger;

    template.querySelector('.calendar__days-link').textContent = day.getDate();

    // Отрисовываем синим цветом
    // Текущий день
    if (dayCount === DATEDAY) {
      template.querySelector('.calendar__days-link').classList.add('calendar__days-link--current-day');
    }

    block.appendChild(template);

    day.setDate(dayCount + 1);
  }
}

// Добавление дней за следующий день

function generateDaysNextMounth(block, month, day, templateBlock) {
  var dayCount = day.getDay() - 1;

  if (dayCount !== 0) {
    for (var i = dayCount; i < 7; i++) {
      var template = templateBlock.content.cloneNode(true);

      block.appendChild(template);
    }
  }
}

// Следующий месяц

var buttonNextMonth = calendarBlock.querySelector('.calendar__next');

buttonNextMonth.addEventListener('click', function (evt) {
  evt.preventDefault();

  dateMonth += 1;

  if (dateMonth > 11) {
    dateYear += 1;
    dateMonth = 0;
  }

  deleteCurrentElement();

  addDataCalendar(dateYear, dateMonth);

});

// Предыдущий месяц

var buttonPreviousMonth = calendarBlock.querySelector('.calendar__previous');

buttonPreviousMonth.addEventListener('click', function (evt) {

  evt.preventDefault();

  dateMonth -= 1;

  if (dateMonth < 0) {
    dateYear -= 1;
    dateMonth = 11;
  }

  deleteCurrentElement();

  addDataCalendar(dateYear, dateMonth);

});

// Удаление текущей таблицы

function deleteCurrentElement() {
  while (contentCalendarDays.firstChild) {
    contentCalendarDays.removeChild(contentCalendarDays.firstChild);
  }
}