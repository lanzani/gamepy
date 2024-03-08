import {defineConfig} from 'vitepress'

const lezioniSidebar = [
    {
        text: "Lezione 1", collapsed: false, items: [
            {text: "Introduzione", link: "/lezioni/lezione1/introduzione"},
            {text: "Input e Output", link: "/lezioni/lezione1/input-output"},
            {text: "Variabili", link: "/lezioni/lezione1/variabili"},
            {text: "Tipi di Dato", link: "/lezioni/lezione1/tipi-di-dato"},
            {
                text: "L4T 32.7.1", collapsed: true, items: [
                    {text: "Python 2.7", link: "/libraries/python/l4t32.7.1/py2.7"},
                    {text: "Python 3.6.9", link: "/libraries/python/l4t32.7.1/py3.6.9"},
                    {text: "Python 3.8.0", link: "/libraries/python/l4t32.7.1/py3.8.0"},
                    {text: "Python 3.10.11", link: "/libraries/python/l4t32.7.1/py3.10.11"},
                    {text: "Python 3.11.3", link: "/libraries/python/l4t32.7.1/py3.11.3"}
                ]
            }

        ]
    }
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "GamePy",
    description: "Impara a programmare giocando con python",
    lang: 'it',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Lezioni', link: '/lezioni/'},
            {text: 'Examples', link: '/markdown-examples'}
        ],

        sidebar: {
            "/lezioni/": lezioniSidebar
        },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ]
    }
})
