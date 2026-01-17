# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).



# Router
<a href="https://router.vuejs.org/" target="_blank">Vue Router</a>

### 安裝 Vue Router
<a href="https://router.vuejs.org/installation.html" target="_blank">Vue Router installation</a>
安裝指令
```
npm create vue@latest
```

### 路由
Step 1 建立路由與頁面
Step 2 引入 main.js
Step 3 src別名 

### Step 1 建立路由與頁面
<ul>
    <li>前置作業src建立router/index.js</li>
    <li>src建立
        <div>views/Home/index.vue</div>
        <div>views/AboutMe/index.vue</div>
        <div>views/errorPage/404.vue</div>
    </li>
</ul>

#### src/router/index.js
```
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
    next();
})

// 輸出router
export default router
```
<div>
<ul>
    <li><b>每個頁面設定meta:{title:webTitle+'首頁'}</b></li>
    <li>
     <b>webTitle </b>
        <div>router.beforeEach => document.title;即是 webTitle;</div>
        <div>從導航守衛 改變webTitle: to.meta.title</div>
    </li>
</ul>

</div>
#### views/Home/index.vue
```
<template>
    <div>
        <div>{{ title }}</div>
    </div>
</template>

<script setup>
import { ref } from "vue";
    const title =ref('Home')
</script>

<style lang="scss" scoped>

</style>
```

#### views/AboutMe/index.vue
```
<template>
    <div>
        <div>{{ title }}</div>
    </div>
</template>

<script setup>
import {ref} from "vue";
    const title =ref('About Me')
</script>

<style lang="scss" scoped>

</style>
```

#### views/errorPage/404.vue
```
<template>
    <div>
        <h1>{{ title }}</h1>
        <button @click="$router.push('/')">回首頁</button>
    </div>
</template>   


<script setup>
import { ref } from 'vue';
const title = ref('404');
</script>

```

### Step 2 引入 main.js
```
import { createApp } from 'vue'
import './style.css'
+ import router from "./router/index";
import App from './App.vue'

const app = createApp(App)
+ app.use(router)
app.mount('#app')

```

### Step 3 src別名 

```
// vite.config.js
+ import { fileURLToPath, URL } from "node:url";
import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'


export default defineConfig(({ mode, command }) =>
{
  console.log('目前模式', mode),
  console.log('目前command',command)
  return {
    plugins: [
      vue(),
    ],
    // src別名
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },

  }
});

```




