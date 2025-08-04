<script setup>
    import { useWebStore } from './stores/web';

    const WebStore = useWebStore()

    console.log('webStore.web:', WebStore.web)
    console.log('webStore.users:',WebStore.users)

</script>

<template>
  {{ WebStore.web.url }}

{{ WebStore.users }}

<button @click="WebStore.userAdd">添加用户</button>

</template>

<style scoped>

</style>