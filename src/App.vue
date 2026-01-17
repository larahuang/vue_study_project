<template>
  <div>
    <div>
      <ul>
        <li 
          v-for="(item,id) in menuLists" 
          :key="id">
         <RouterLink :to="{ path: item.path }">
          {{item.name}}
         </RouterLink>
        </li>
      </ul>
    </div>

    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <router-view v-slot="{ Component }">
      <transition>
        <keep-alive>
            <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios'
const route = useRoute();
const router = useRouter()

const menuLists =ref([])
const menuFun =()=>{
  const selectName =["作品集內頁","404"]
  Object.entries(router.options.routes).forEach(([item,index])=>{  
    menuLists.value.push(router.options.routes[item])
    //排除 404與作品集內頁
    menuLists.value= menuLists.value.filter(item =>!selectName.includes(item.name))
  })
  console.log('menuLists', menuLists.value)
}
const getData = async () => {
  try {
    const api = `https://api-quiz-project.vercel.app/api/questions`;
    await axios.get(api)
    const res = await axios.get(api);
    console.log(res, 'res');
    if (res.status === 200) {
      lists.value = res.data;
    }
  } catch (error) {
    console.log(error)
  }
}
onMounted(()=>{
 menuFun();
 getData()

})
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
