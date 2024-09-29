<template>
  <div>
    <UProgress v-show="isLoading" size="xs" animation="carousel" class="fixed top-0 left-0 w-full z-50" />
    <NuxtPwaManifest />
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
const isLoading = useLoading();
</script>

<style scoped></style>
