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
    collapsed: false,
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
      { text: 'Руководство администратора', collapsed: true, link: '/docs/admin-guide', items: [
        { text: 'Системные требования и установка программного обеспечения', link: '/docs/admin-guide/install' },
        { text: 'Основные сведения и лицензирование', link: '/docs/admin-guide/license' },
        { text: 'Настройка параметров системы', link: '/docs/admin-guide/settings' },
        { text: 'Резервное копирование и восстановление', link: '/docs/admin-guide/backup' },
        { text: 'Алгоритм формирования новой базы', link: '/docs/admin-guide/newbase' },
        { text: 'Настройка импорта и экспорта данных', link: '/docs/admin-guide/impexp' },
        { text: 'Сведения о справочниках системы', link: '/docs/admin-guide/directories' },
        { text: 'Настройка торгового оборудования', link: '/docs/admin-guide/equipment' },
        { text: 'Настройка скидок', link: '/docs/admin-guide/loyalty' },
        { text: 'Документы', link: '/docs/admin-guide/documents' },
        { text: 'Формы и модули', link: '/docs/admin-guide/modules' },
        { text: 'Отчеты', link: '/docs/admin-guide/reports' },
        { text: 'Генератор отчетных форм', link: '/docs/admin-guide/qreport' },
        { text: 'Служба управления данными', link: '/docs/admin-guide/idmservice' }
      ]},
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