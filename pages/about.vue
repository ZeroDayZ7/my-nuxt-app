<template>
  <div>
    <h1>Strona About</h1>
</div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Coś o mnie'
})

const route = useRoute()

useHead({
    title: `${route.meta.title}`
})
</script>
