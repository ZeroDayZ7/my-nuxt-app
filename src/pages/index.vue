<template>
  <div>
    <!-- <UProgress animation="carousel" /> -->
    <PartialsTopbar />
    <!-- <Info24 />   -->
  </div>
</template>

<script setup lang="ts">
import Modal from '~/components/Modal.vue';

definePageMeta({
  title: 'Strona głowna'
})

const route = useRoute()
useHead({
  title: `${route.meta.title}`
})

const runtimeConfig = useRuntimeConfig();

// console.log(runtimeConfig.apiSecret)
// console.log(runtimeConfig.JWT_SECRET)
// console.log(runtimeConfig.public.apiBase)

const toast = useToast();



</script>

<style scoped></style>