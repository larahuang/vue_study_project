// src/router/index.js
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

const webTitle = "關於Lara || ";

const options = {
    // history: createWebHashHistory(),
    history:  createWebHistory(),//井字號會不顯示
    routes:[
        {
            path: '/',
            name:'首頁',
            component: () => import("@/views/Home/index.vue"),
            meta:{title:webTitle+'首頁'}
        },
        {
            path: '/portfolio',
            name:'作品集目錄',
            component: () => import("@/views/Portfolio/index.vue"),
            meta:{title:webTitle+'作品集目錄'} 
        },
        {
            path: '/item/:id',
            name:'作品集內頁',
            component: () => import("@/views/Portfolio/item.vue"),
            meta:{title:webTitle+'作品集內頁'} 
        },
        {
            path: '/about',
            name:'關於我們',
            component: () => import("@/views/AboutMe/index.vue"),
            meta:{title:webTitle+'關於我們'} 
        },
        {
            path: '/:catchAll(.*)',
            name: '404',
            component: () => import('../views/errorPage/404.vue'),
            meta: {
                title:webTitle+'404'
            },
        }
    ],
}

const router = createRouter(options)
// 導航守衛
router.beforeEach( (to, from, next) => {
    // webTitle 
    document.title = to.meta.title || webTitle + '首頁';
    console.log('document.title', document.title)
    next();
})

// 輸出router
export default router