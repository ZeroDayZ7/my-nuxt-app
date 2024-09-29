<template>
  <div>
    <UProgress v-show="isLoading" size="xs" animation="carousel" class="fixed top-0 left-0 w-full z-50" />
    <NuxtPwaManifest />
    <UContainer class="p-0 mx-0 max-w-full sm:px-0 lg:px-0">
      <NuxtLayout :name="layout">
        <div v-if="block">
          <NuxtPage />
        </div>
        <div v-else>
          <Error403 />
        </div>
      </NuxtLayout>
    </UContainer>

    <!-- <UModals /> -->
    <!-- <UNotifications /> -->
    <!-- <UButton /> -->
  </div>
</template>

<script setup>
import Error403 from '~/components/Errors/403.vue';
const layout = "default";
const block = true;
const isLoading = useLoading();

const runtimeConfig = useRuntimeConfig();
console.log(runtimeConfig.public.apiUrl);
console.log(`app.vue`);
</script>

<style scoped>
/* Możesz dodać style tutaj */
</style>
