<script setup lang="ts">
const isOpen = ref(false)
</script>

<template>
  <div>
    <UButton label="Zaloguj" @click="isOpen = true" />

    <UModal v-model="isOpen">
      <div class="p-4">
        <AuthLoginForm />
      </div>
    </UModal>
  </div>
</template>

