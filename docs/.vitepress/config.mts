import { defineConfig } from 'vitepress'
import { sidebar } from './sidebar.ts';
import { navbar } from './navbar.ts';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/itida_newdocs/',
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
  ignoreDeadLinks:true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: [1,2],

    nav: navbar,

    lastUpdatedText: 'Последнее обновление',
    returnToTopLabel: 'Наверх',
    sidebarMenuLabel: 'Меню',
    darkModeSwitchLabel: 'Переключение темы',
    lightModeSwitchTitle: 'Включить светлую тему',
    darkModeSwitchTitle: 'Включить темную тему',
    outlineTitle: 'На этой странице',

    lastUpdated: {
      text: 'Обновлено',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

    docFooter: {
      prev: 'Предыдущий раздел',
      next: 'Следующий раздел'
    },

    sidebar: sidebar,

    socialLinks: [
      { icon: { 
        svg: `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24ZM24 37.6C31.9529 37.6 38.4 31.1529 38.4 23.2C38.4 15.2471 31.9529 8.8 24 8.8C16.0471 8.8 9.6 15.2471 9.6 23.2C9.6 31.1529 16.0471 37.6 24 37.6Z" fill="black"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M21.0564 38.1687C19.208 37.0554 18.0282 34.608 17.5139 32.6054C17.0299 30.7267 16.806 28.3277 16.8726 25.1059C14.3375 22.8218 12.1109 20.565 11.158 18.4322C10.2443 16.3842 10.6921 13.5889 12.5405 12.1761C13.2333 11.6467 14.1801 11.2958 15.478 11.2927C15.3267 14.2242 17.4595 16.1361 20.288 18.5048C22.1425 16.5112 24.481 14.5448 26.8316 13.1835C28.6649 12.1217 30.4679 11.4319 32.0017 11.2685C33.605 11.0961 35.2417 11.6104 36.2944 12.881C36.9781 13.7069 37.3502 14.8867 36.8117 16.5203C35.4867 16.7079 34.3432 17.0013 33.3418 17.3734C31.7959 17.9512 30.7341 18.8709 29.6238 19.7603C27.5909 21.3909 25.8756 23.0427 24.4447 24.7338C24.3902 27.4564 24.4054 31.2198 25.1556 33.8669C25.567 35.319 26.3294 36.4958 27.7694 37.1492C25.5065 39.4665 22.8413 39.2427 21.0564 38.1687Z" fill="black"/>
          </svg>`
        }, 
        link: 'https://itida.ru'
      }
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
