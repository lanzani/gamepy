import {defineConfig} from 'vitepress'

const lezioniSidebar = [
    {text: "Lezioni", link: "/lezioni/"},

    {
        text: "Lezione 1", collapsed: true, items: [
            {text: "📗 Introduzione", link: "/lezioni/lezione1/introduzione"},
            {text: "📘 Input e Output", link: "/lezioni/lezione1/input-output"},
            {text: "📘 Variabili", link: "/lezioni/lezione1/variabili"},
            {text: "📐 Tipi di Dato: Stringhe", link: "/lezioni/lezione1/tipi-di-dato-str"},
            {text: "📘 Input", link: "/lezioni/lezione1/input"}
        ]
    },
    {
        text: "Lezione 2", collapsed: false, items: [
            {text: "📘 Condizioni", link: "/lezioni/lezione1/condizioni"},
            {text: "🎮 Quiz - 1", link: "/lezioni/lezione1/progetto1-1"},
            {text: "📐 Tipi di Dato: Numeri", link: "/lezioni/lezione1/tipi-di-dato-num"},
            {text: "🎮 Quiz - 2", link: "/lezioni/lezione1/progetto1-2"},
            {text: "🎮 Carta, forbice, sasso - 1", link: "/lezioni/lezione2/progetto2-1"},
            {text: "📘 Condizioni 2", link: "/lezioni/lezione2/condizioni2"},
            {text: "🎮 Carta, forbice, sasso - 2", link: "/lezioni/lezione2/progetto2-2"},


        ]
    }
    // {
    //     text: "Lezione 2", collapsed: true, items: []
    // },
    // {
    //     text: "Lezione 3", collapsed: true, items: []
    // },
    // {
    //     text: "Lezione 4", collapsed: true, items: []
    // },
    // {
    //     text: "Lezione 5", collapsed: true, items: []
    // },
    // {
    //     text: "Lezione 6", collapsed: true, items: []
    // },
    // {
    //     text: "Lezione 7", collapsed: true, items: []
    // }
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "GamePy",
    description: "Impara a programmare giochi con python",
    lang: 'it',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Lezioni', link: '/lezioni/'},
            {text: "Online Python", link: "https://www.online-python.com/"},
        ],

        sidebar: {
            "/lezioni/": lezioniSidebar
        },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ]
    }
})
