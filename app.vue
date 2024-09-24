<template>
  <div>
    <NuxtPwaManifest/>
    <UContainer class="p-0 mx-0 max-w-full sm:px-0 lg:px-0">
      <NuxtLayout :name="layout">
        <NuxtPage />
      </NuxtLayout>
    </UContainer>

    <!-- <UModals /> -->
    <!-- <UNotifications /> -->
    <!-- <UButton /> -->
  </div>
</template>

<script setup>

const layout = "default";
// Możesz dodać logikę skryptu tutaj, jeśli jest potrzebna
</script>

<style scoped>
/* Możesz dodać style tutaj */
</style>
