<template>
  <!-- SIEMA -->
  <LoginForm />
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Logowanie'
})

const route = useRoute()
useHead({
  title: `${route.meta.title}`
})

import LoginForm from '~/components/Auth/LoginForm.vue';
// console.log('NODE_ENV:', process.env.NODE_ENV);

</script>