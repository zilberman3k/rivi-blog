import { defineConfig } from 'vitepress';
import rtlcss from 'rtlcss';

import jsonArticles from '../../data.json';

const redirectItems = jsonArticles
    .sort((a, b) => (a.Updated > b.Updated ? -1 : 1))
    .map((t,idx)=>({text:t.title,link:'/'+t.path}));

export default defineConfig({
    lang: 'he',
    title: 'Running With Scissors',
    head: [
        ['link', { rel: 'shortcut icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
        logo: '/favicon.ico',
        nav: [{ text: 'Home', link: '/index' }],
        sidebar: [
            {
                items:redirectItems
            },
        ],
    },

    vite: {
        postcss: {
            plugins: [rtlcss()],
        }
    },

});
