<script setup lang="ts">
const isOpen = useOpen();
</script>

<template>
  <div>
    <UButton variant="ghost" icon="i-heroicons-key" label="Zaloguj" @click="isOpen = true" />

    <UModal v-model="isOpen" 
      :ui="{
      container: 'min-h-0 lg:min-h-full'
    }">
      <div class="p-4">
        <div class="flex items-center justify-between">
          <UButton 
            color="red"
            variant="ghost" 
            icon="i-heroicons-x-mark-20-solid" 
            class="-my-1 absolute right-3 top-3 p-1"
            @click="isOpen = false"
            />

        </div>
        <AuthLoginForm />
      </div>
    </UModal>
  </div>
</template>