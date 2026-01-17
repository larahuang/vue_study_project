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
