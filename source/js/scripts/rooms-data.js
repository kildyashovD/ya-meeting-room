'use strict';

(function () {
  window.rooms = [
    {
      name: 'Ржавый фред',
      floor: floors[1],
      size: '3-6 человек',
      freeTime: false,
      meetings: [
        {
          meetingsName: 'О насущном',
          date: currentDateTextLong,
          participants: [workers[1], workers[0]],
          startTime: '08:00',
          endTime: '11:15',
          during: '3h15m',
          available: false
        },
        {
          meetingsName: 'Синк по безопасности мира',
          date: currentDateTextLong,
          participants: [workers[8], workers[1], workers[5], workers[3], workers[2], workers[4], workers[6]],
          startTime: '11:15',
          endTime: '12:15',
          during: '1h0m',
          available: false
        },
        {
          meetingsName: 'На встрече с моделями',
          date: currentDateTextLong,
          participants: [workers[2]],
          startTime: '12:15',
          endTime: '13:30',
          during: '1h15m',
          available: false
        },
        {
          meetingsName: 'Рассуждения о высоком',
          date: currentDateTextLong,
          participants: [workers[0]],
          startTime: '14:30',
          endTime: '17:00',
          during: '3h30m',
          available: false
        },
        {
          meetingsName: 'Рассуждения о высоком',
          date: currentDateTextLong,
          participants: [workers[0]],
          startTime: '17:00',
          endTime: '20:00',
          during: '3h0m',
          available: false
        },
        {
          meetingsName: 'Рассуждения о высоком',
          date: currentDateTextLong,
          participants: [workers[0]],
          startTime: '20:00',
          endTime: '22:30',
          during: '2h30m',
          available: false
        },
        {
          meetingsName: 'Рассуждения о высоком',
          date: currentDateTextLong,
          participants: [workers[0]],
          startTime: '22:30',
          endTime: '23:00',
          during: '0h30m',
          available: false
        }
      ]
    },
    {
      name: 'Прачечная',
      floor: floors[1],
      size: 'до 10 человек',
      freeTime: true,
      meetings: [
        {
          meetingsName: 'Рассуждения о высоком',
          date: currentDateTextLong,
          participants: [workers[0]],
          startTime: '08:00',
          endTime: '10:45',
          during: '2h45m',
          available: false
        },
        {
          meetingsName: 'Рассуждения о высоком',
          date: currentDateTextLong,
          participants: [workers[0]],
          startTime: '10:45',
          endTime: '12:15',
          during: '1h30m',
          available: false
        },
        {
          meetingsName: '',
          date: currentDateTextLong,
          participants: [],
          startTime: '12:15',
          endTime: '13:00',
          during: '0h45m',
          available: true
        },
        {
          meetingsName: 'Рассуждения о высоком',
          date: currentDateTextLong,
          participants: [workers[0]],
          startTime: '13:00',
          endTime: '14:00',
          during: '1h0m',
          available: false
        },
        {
          meetingsName: '',
          date: currentDateTextLong,
          participants: [],
          startTime: '14:00',
          endTime: '14:45',
          during: '0h45m',
          available: true
        },
        {
          meetingsName: 'Рассуждения о высоком',
          date: currentDateTextLong,
          participants: [workers[0]],
          startTime: '14:45',
          endTime: '17:00',
          during: '2h15m',
          available: false
        },
        {
          meetingsName: '',
          date: currentDateTextLong,
          participants: [],
          startTime: '17:00',
          endTime: '17:45',
          during: '0h45m',
          available: true
        },
        {
          meetingsName: 'Рассуждения о высоком',
          date: currentDateTextLong,
          participants: [workers[0]],
          startTime: '17:45',
          endTime: '18:15',
          during: '0h30m',
          available: false
        },
        {
          meetingsName: '',
          date: currentDateTextLong,
          participants: [],
          startTime: '18:15',
          endTime: '20:00',
          during: '1h45m',
          available: true
        },
        {
          meetingsName: 'Рассуждения о высоком',
          date: currentDateTextLong,
          participants: [workers[0]],
          startTime: '20:00',
          endTime: '22:30',
          during: '2h30m',
          available: false
        },
        {
          meetingsName: 'Рассуждения о высоком',
          date: currentDateTextLong,
          participants: [workers[0]],
          startTime: '22:30',
          endTime: '23:00',
          during: '0h30m',
          available: false
        }
      ]
    },
    {
      name: 'Желтый дом',
      floor: floors[1],
      size: 'до 10 человек',
      freeTime: true,
      meetings: [
        {
          meetingsName: 'Рассуждения о высоком',
          date: currentDateTextLong,
          participants: [workers[0]],
          startTime: '08:00',
          endTime: '10:45',
          during: '2h45m',
          available: false
        },
        {
          meetingsName: 'Рассуждения о высоком',
          date: currentDateTextLong,
          participants: [workers[0]],
          startTime: '10:45',
          endTime: '12:00',
          during: '1h15m',
          available: false
        },
        {
          meetingsName: '',
          date: currentDateTextLong,
          participants: [],
          startTime: '12:00',
          endTime: '14:30',
          during: '2h30m',
          available: true
        },
        {
          meetingsName: 'Рассуждения о высоком',
          date: currentDateTextLong,
          participants: [workers[0]],
          startTime: '14:30',
          endTime: '17:00',
          during: '2h30m',
          available: false
        },
        {
          meetingsName: '',
          date: currentDateTextLong,
          participants: [],
          startTime: '17:00',
          endTime: '20:00',
          during: '3h0m',
          available: true
        },
        {
          meetingsName: 'Рассуждения о высоком',
          date: currentDateTextLong,
          participants: [workers[0]],
          startTime: '20:00',
          endTime: '22:30',
          during: '2h30m',
          available: false
        },
        {
          meetingsName: 'Рассуждения о высоком',
          date: currentDateTextLong,
          participants: [workers[0]],
          startTime: '22:30',
          endTime: '23:00',
          during: '0h30m',
          available: false
        }
      ]
    },
    {
      name: 'Оранжевый тюльпан',
      floor: floors[1],
      size: 'до 10 человек',
      freeTime: false,
      meetings: [
        {
          meetingsName: 'Рассуждения о высоком',
          date: currentDateTextLong,
          participants: [workers[0]],
          startTime: '08:00',
          endTime: '10:45',
          during: '2h45m',
          available: false
        },
        {
          meetingsName: 'Рассуждения о высоком',
          date: currentDateTextLong,
          participants: [workers[0]],
          startTime: '10:45',
          endTime: '12:15',
          during: '1h30m',
          available: false
        },
        {
          meetingsName: 'Рассуждения о высоком',
          date: currentDateTextLong,
          participants: [workers[0]],
          startTime: '12:15',
          endTime: '14:30',
          during: '2h15m',
          available: false
        },
        {
          meetingsName: 'Рассуждения о высоком',
          date: currentDateTextLong,
          participants: [workers[0]],
          startTime: '14:30',
          endTime: '17:00',
          during: '2h30m',
          available: false
        },
        {
          meetingsName: 'Рассуждения о высоком',
          date: currentDateTextLong,
          participants: [workers[0]],
          startTime: '17:00',
          endTime: '20:00',
          during: '3h0m',
          available: false
        },
        {
          meetingsName: 'Рассуждения о высоком',
          date: currentDateTextLong,
          participants: [workers[0]],
          startTime: '20:00',
          endTime: '22:30',
          during: '2h30m',
          available: false
        },
        {
          meetingsName: 'Рассуждения о высоком',
          date: currentDateTextLong,
          participants: [workers[0]],
          startTime: '22:30',
          endTime: '23:00',
          during: '0h30m',
          available: false
        }
      ]
    },
    {
      name: 'Джокер',
      floor: floors[0],
      size: '3-6 человек',
      freeTime: true,
      meetings: [
        {
          meetingsName: 'Рассуждения о высоком',
          date: currentDateTextLong,
          participants: [workers[0], 'Человек паук', 'Железный человек'],
          startTime: '08:00',
          endTime: '9:45',
          during: '1h45m',
          available: false
        },
        {
          meetingsName: 'Рассуждения о высоком',
          date: currentDateTextLong,
          participants: [workers[0]],
          startTime: '9:45',
          endTime: '12:00',
          during: '2h15m',
          available: false
        },
        {
          meetingsName: '',
          date: currentDateTextLong,
          participants: [],
          startTime: '12:00',
          endTime: '14:15',
          during: '2h15m',
          available: true
        },
        {
          meetingsName: 'Рассуждения о высоком',
          date: currentDateTextLong,
          participants: [workers[0]],
          startTime: '14:15',
          endTime: '16:45',
          during: '2h30m',
          available: false
        },
        {
          meetingsName: '',
          date: currentDateTextLong,
          participants: [],
          startTime: '16:45',
          endTime: '19:45',
          during: '3h0m',
          available: true
        },
        {
          meetingsName: 'Рассуждения о высоком',
          date: currentDateTextLong,
          participants: [workers[0]],
          startTime: '19:45',
          endTime: '22:15',
          during: '2h30m',
          available: false
        },
        {
          meetingsName: 'Рассуждения о высоком',
          date: currentDateTextLong,
          participants: [workers[0]],
          startTime: '22:15',
          endTime: '23:00',
          during: '0h45m',
          available: false
        }
      ]
    },
    {
      name: 'Мариванна',
      floor: floors[0],
      size: '3-6 человек',
      freeTime: true,
      meetings: [
        {
          meetingsName: 'Рассуждения о высоком',
          date: currentDateTextLong,
          participants: [workers[0]],
          startTime: '08:00',
          endTime: '10:45',
          during: '2h45m',
          available: false
        },
        {
          meetingsName: '',
          date: currentDateTextLong,
          participants: [],
          startTime: '10:45',
          endTime: '14:30',
          during: '3h45m',
          available: true
        },
        {
          meetingsName: 'Рассуждения о высоком',
          date: currentDateTextLong,
          participants: [workers[0]],
          startTime: '14:30',
          endTime: '17:00',
          during: '2h30m',
          available: false
        },
        {
          meetingsName: '',
          date: currentDateTextLong,
          participants: [],
          startTime: '17:00',
          endTime: '18:45',
          during: '1h45m',
          available: true
        },
        {
          meetingsName: 'Рассуждения о высоком',
          date: currentDateTextLong,
          participants: [workers[0]],
          startTime: '18:45',
          endTime: '22:30',
          during: '3h45m',
          available: false
        },
        {
          meetingsName: 'Рассуждения о высоком',
          date: currentDateTextLong,
          participants: [workers[0]],
          startTime: '22:30',
          endTime: '23:00',
          during: '0h30m',
          available: false
        }
      ]
    },
    {
      name: 'Тонкий боб',
      floor: floors[0],
      size: '3-6 человек',
      freeTime: true,
      meetings: [
        {
          meetingsName: 'Рассуждения о высоком',
          date: currentDateTextLong,
          participants: [workers[0]],
          startTime: '08:00',
          endTime: '10:45',
          during: '2h45m',
          available: false
        },
        {
          meetingsName: 'Рассуждения о высоком',
          date: currentDateTextLong,
          participants: [workers[0]],
          startTime: '10:45',
          endTime: '12:15',
          during: '1h30m',
          available: false
        },
        {
          meetingsName: '',
          date: currentDateTextLong,
          participants: [],
          startTime: '12:15',
          endTime: '14:30',
          during: '2h15m',
          available: true
        },
        {
          meetingsName: 'Рассуждения о высоком',
          date: currentDateTextLong,
          participants: [workers[0]],
          startTime: '14:30',
          endTime: '17:00',
          during: '2h30m',
          available: false
        },
        {
          meetingsName: '',
          date: currentDateTextLong,
          participants: [],
          startTime: '17:00',
          endTime: '20:00',
          during: '3h0m',
          available: true
        },
        {
          meetingsName: 'Рассуждения о высоком',
          date: currentDateTextLong,
          participants: [workers[0]],
          startTime: '20:00',
          endTime: '22:30',
          during: '2h30m',
          available: false
        },
        {
          meetingsName: 'Рассуждения о высоком',
          date: currentDateTextLong,
          participants: [workers[0]],
          startTime: '22:30',
          endTime: '23:00',
          during: '0h30m',
          available: false
        }
      ]
    },
    {
      name: 'Черная вдова',
      floor: floors[0],
      size: '3-6 человек',
      freeTime: true,
      meetings: [
        {
          meetingsName: 'Рассуждения о высоком',
          date: currentDateTextLong,
          participants: [workers[0]],
          startTime: '08:00',
          endTime: '10:45',
          during: '2h45m',
          available: false
        },
        {
          meetingsName: '',
          date: currentDateTextLong,
          participants: [],
          startTime: '10:45',
          endTime: '12:15',
          during: '1h30m',
          available: true
        },
        {
          meetingsName: 'Рассуждения о высоком',
          date: currentDateTextLong,
          participants: [workers[0]],
          startTime: '12:15',
          endTime: '14:30',
          during: '2h15m',
          available: false
        },
        {
          meetingsName: 'Рассуждения о высоком',
          date: currentDateTextLong,
          participants: [workers[0]],
          startTime: '14:30',
          endTime: '18:00',
          during: '3h30m',
          available: false
        },
        {
          meetingsName: '',
          date: currentDateTextLong,
          participants: [],
          startTime: '18:00',
          endTime: '20:00',
          during: '2h0m',
          available: true
        },
        {
          meetingsName: 'Рассуждения о высоком',
          date: currentDateTextLong,
          participants: [workers[0]],
          startTime: '20:00',
          endTime: '22:30',
          during: '2h30m',
          available: false
        },
        {
          meetingsName: 'Рассуждения о высоком',
          date: currentDateTextLong,
          participants: [workers[0]],
          startTime: '22:30',
          endTime: '23:00',
          during: '0h30m',
          available: false
        }
      ]
    },
    {
      name: 'Белорусский ликер',
      floor: floors[0],
      size: '3-6 человек',
      freeTime: true,
      meetings: [
        {
          meetingsName: 'Рассуждения о высоком',
          date: currentDateTextLong,
          participants: [workers[0]],
          startTime: '08:00',
          endTime: '10:45',
          during: '2h45m',
          available: false
        },
        {
          meetingsName: 'Рассуждения о высоком',
          date: currentDateTextLong,
          participants: [workers[0]],
          startTime: '10:45',
          endTime: '12:15',
          during: '1h30m',
          available: false
        },
        {
          meetingsName: '',
          date: currentDateTextLong,
          participants: [],
          startTime: '12:15',
          endTime: '14:30',
          during: '2h15m',
          available: true
        },
        {
          meetingsName: 'Рассуждения о высоком',
          date: currentDateTextLong,
          participants: [workers[0]],
          startTime: '14:30',
          endTime: '17:00',
          during: '2h30m',
          available: false
        },
        {
          meetingsName: '',
          date: currentDateTextLong,
          participants: [],
          startTime: '17:00',
          endTime: '20:00',
          during: '3h0m',
          available: true
        },
        {
          meetingsName: 'Рассуждения о высоком',
          date: currentDateTextLong,
          participants: [workers[0]],
          startTime: '20:00',
          endTime: '22:30',
          during: '2h30m',
          available: false
        },
        {
          meetingsName: 'Рассуждения о высоком',
          date: currentDateTextLong,
          participants: [workers[0]],
          startTime: '22:30',
          endTime: '23:00',
          during: '0h30m',
          available: false
        }
      ]
    }
  ];
})();
