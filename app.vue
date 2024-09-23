<template>
  <div>
    <UContainer>
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
