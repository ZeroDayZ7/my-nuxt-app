<template>
  <div>
    <UProgress 
      v-show="isLoading"
      size="xs" 
      animation="carousel"
      class="fixed top-0 left-0 w-full z-50"
      />
    <div class="content">
      <PartialsTopbar />
      <!-- <Info24 />   -->
    </div>
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

// const toast = useToast();
const isLoading = ref(false);

// Funkcja symulująca rozpoczęcie i zakończenie ładowania
// const startLoading = () => {
//   isLoading.value = true;
//   setTimeout(() => {
//     isLoading.value = false;
//   }, 3000); // symulacja 3-sekundowego ładowania
// };

// Uruchom ładowanie przy montowaniu komponentu (przykładowo)
// startLoading();


</script>

<style scoped>
.content{
  padding: 4px 0px 4px 0px;
  border-bottom: 1px solid white;
}</style>