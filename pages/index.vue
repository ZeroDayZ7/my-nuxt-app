<template>
    <div><NuxtLink to="/about">ABOUT</NuxtLink></div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Strona głowna'
})

const route = useRoute()
useHead({
    title: `${route.meta.title}`
})

const runtimeConfig = useRuntimeConfig()

// console.log(runtimeConfig.apiSecret)
// console.log(runtimeConfig.JWT_SECRET)
// console.log(runtimeConfig.public.apiBase)
</script>

<style scoped></style>