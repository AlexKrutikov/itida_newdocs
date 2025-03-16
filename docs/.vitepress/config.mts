import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  locales: {
    root: {
      label: 'Русский',
      lang: 'ru'
    }
  },
  title: "Itida wiki",
  description: "Itida documentation",

  markdown: { 
    toc:{ 
      level:[2,3],
    }
  },

  cleanUrls: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: [1,2],

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    lastUpdatedText: 'Последнее обновление',
    returnToTopLabel: 'Наверх',
    sidebarMenuLabel: 'Меню',
    darkModeSwitchLabel: 'Переключение темы',
    lightModeSwitchTitle: 'Включить светлую тему',
    darkModeSwitchTitle: 'Включить темную тему',
    outlineTitle: 'На этой странице',

    

    docFooter: {
      prev: 'Предыдущая страница',
      next: 'Следующая страница'
    },

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    search: {
      provider: 'local',
      options: {
        locales: {
          root: { // используйте ключ `root`, если хотите перевести локаль по умолчанию
            translations: {
              button: {
                buttonText: 'Поиск',
                buttonAriaLabel: 'Поиск'
              },
              modal: {
                displayDetails: 'Отобразить подробный список',
                resetButtonTitle: 'Сбросить поиск',
                backButtonTitle: 'Закрыть поиск',
                noResultsText: 'Нет результатов по запросу',
                footer: {
                  selectText: 'выбрать',
                  selectKeyAriaLabel: 'выбрать',
                  navigateText: 'перейти',
                  navigateUpKeyAriaLabel: 'стрелка вверх',
                  navigateDownKeyAriaLabel: 'стрелка вниз',
                  closeText: 'закрыть',
                  closeKeyAriaLabel: 'esc'
                }
              }
            }
          }
        }
      }
    }
  }
})
