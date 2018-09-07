'use strict';

var buttonOpenCalendar = document.querySelector('.actually-date__day-value');
var calendarBlock = document.querySelector('.calendar');
var calendarLayout = document.querySelector('.diagram-date__modal-layout');
var classClosedCalendar = 'calendar--closed';
var classClosedLayout = 'diagram-date__modal-layout--hidden';

// Открытие и закрытие окна

buttonOpenCalendar.addEventListener('click', function (evt) {
  evt.preventDefault();

  if (calendarBlock.classList.contains(classClosedCalendar)) {
    openModal(calendarBlock, classClosedCalendar);
    openModal(calendarLayout, classClosedLayout);
  } else {
    closeModal(calendarBlock, classClosedCalendar);
    closeModal(calendarLayout, classClosedLayout);

    deleteCurrentElement();
    addDataCalendar(DateConst.YEAR, DateConst.MONTH);
    dateYear = DateConst.YEAR;
    dateMonth = DateConst.MONTH;
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
var dateYear = dateCurrent.getFullYear();
var dateMonth = dateCurrent.getMonth();

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

  // Переходим а август и получаем первый день, который мы рисуем
  // Мы получаем первый день текущего месяца
  // И вычитаем из него количество дней предыдущего месяца
  // Получаем 27 августа
  day.setDate(day.getDate() - dayCount);
  // Присваем это значение счетчику даты за прошлый месяц
  var dayCountPreviousMonth = day.getDate();

  for (var i = 0; i < dayCount; i++) {

    var template = templateBlock.content.cloneNode(true);
    template.querySelector('.calendar__days-link').textContent = dayCountPreviousMonth;
    template.querySelector('.calendar__days-link').classList.add('calendar__days-link--unavailable');

    block.appendChild(template);

    // Прибавляем единицу для отрисовки следующего дня
    day.setDate(dayCountPreviousMonth + 1);
    // Присваиваем новое значение счетику
    dayCountPreviousMonth = day.getDate();
  }
}

// Добавление дней в текущий месяц

function generateDaysCurrentMonth(block, month, day, templateBlock) {
  while (day.getMonth() === month) {

    var dayCount = day.getDate();
    var monthCount = day.getMonth();
    var template = templateBlock.content.cloneNode(true);

    // debugger;

    template.querySelector('.calendar__days-link').textContent = day.getDate();

    // Отрисовываем синим цветом
    // Текущий день
    if (dayCount === DateConst.DAY && monthCount === DateConst.MONTH) {
      template.querySelector('.calendar__days-link').classList.add('calendar__days-link--current-day');
    }

    block.appendChild(template);

    day.setDate(dayCount + 1);
  }
}

// Добавление дней за следующий месяц

function generateDaysNextMounth(block, month, day, templateBlock) {

  // Берем первый день месяца
  // Получаем количество дней до первого дня месяца
  // 1 октября = понедельник (0 по js)
  // 0 дней - ничего не рисуем
  // Если брать октябрь и добавлять дни за ноябрь
  // 1 день ноября - четверг
  // 4 - 1 = 3
  // dayCount = 3 и добавляем 4 дня пока истинно выражение dayCount < 7

  var dayCount = day.getDay() - 1;

  if (dayCount !== 0) {
    for (var i = dayCount; i < 7; i++) {
      var dayCountNextMonth = day.getDate();

      var template = templateBlock.content.cloneNode(true);
      template.querySelector('.calendar__days-link').textContent = dayCountNextMonth;
      template.querySelector('.calendar__days-link').classList.add('calendar__days-link--unavailable');

      block.appendChild(template);

      day.setDate(dayCountNextMonth + 1);
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
