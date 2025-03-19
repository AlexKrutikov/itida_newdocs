export const sidebar = [
  {
    text: 'Информация',
    collapsed: false,
    items: [
      { text: 'Порядок лицензирования', link: '/licensing' },
      { text: 'История версий', link: '/history' }
    ]
  },
  {
    text: 'Начало работы',
    collapsed: true,
    items: [
      { text: 'Установка программы', link: '/docs/quick-start/install' },
      { text: 'Активация лицензии', link: '/docs/quick-start/activate' },
      { text: 'Добавление товаров', link: '/docs/quick-start/goods' },
      { text: 'Подключение оборудования', link: '/docs/quick-start/equipment' },
      { text: 'Формирование документов', link: '/docs/quick-start/documents' },
    ]
  },
  {
    text: 'Руководство пользователя',
    collapsed: true,
    items: [
      { text: 'Введение', link: '/docs/user-guide/intro' },
      { text: 'Запуск программы', link: '/docs/user-guide/launch' },
      { text: 'Основные сведения', link: '/docs/user-guide/basic' },
      { text: 'Импорт/экспорт', link: '/docs/user-guide/impexp' },
      { text: 'Основные справочники', link: '/docs/user-guide/directories' },
      { text: 'Документы', link: '/docs/user-guide/documents' },
      { text: 'Отчёты', link: '/docs/user-guide/reports' },
      { text: 'Модуль "Эксперт"', link: '/docs/user-guide/expert' }
    ]
  },
  {
    text: 'Администрирование',
    collapsed: true,
    items: [
      { text: 'Руководство администратора', link: '/docs/admin-guide' },
      { text: 'Интеграции', link: '/integrations' },
      { text: 'Для разработчиков', link: '/dev' }
    ]
  },
  {
    text: 'Модули',
    collapsed: true,
    items: [
      { text: 'iMark', link: '/imark' },
      { text: 'РМК', link: '/rmk' },
      { text: '54-ФЗ', link: '/fz54' },
      { text: 'Маркировка', link: '/marking' },
      { text: 'Производство', link: '/docs/prz' },
      { text: 'ЕГАИС', link: '/egais' },
      { text: 'Меркурий', link: '/mercury' },
    ]
  }
];