<template>
  <div>
    <div>
      <router-link :to="'/'">Home</router-link>
      <router-link :to="'/about'">About Me</router-link>
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
import { ref } from 'vue';

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
