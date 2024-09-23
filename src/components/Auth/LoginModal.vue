<script setup lang="ts">
const isOpen = ref(false)
</script>

<template>
  <div>
    <UButton label="Zaloguj" @click="isOpen = true" />

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


<!-- <script setup lang="ts">
const isOpen = ref(false)
</script> -->



<!-- <script setup lang="ts">
const isOpen = ref(false)
</script> -->

<!-- <template>
  <div>
    <UButton label="Open" @click="isOpen = true" />

    <UModal v-model="isOpen" fullscreen>
      <UCard
        :ui="{
          base: 'h-full flex flex-col',
          rounded: '',
          divide: 'divide-y divide-gray-100 dark:divide-gray-800',
          body: {
            base: 'grow'
          }
        }"
      >
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
              Modal
            </h3>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
          </div>
        </template>

        <AuthLoginForm class="h-full"/>
      </UCard>
    </UModal>
  </div>
</template>

 -->
