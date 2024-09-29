<script setup lang="ts">
import LogoutModal from '~/components/Auth/LogoutModal.vue';
const isLogout = ref(false);

</script>

<template>
  <div>
    <!-- Główny Modal Menu -->
    <UCard :ui="{
      base: 'flex flex-col overflow-y-auto',
      rounded: '',
      divide: 'divide-y divide-gray-100 dark:divide-gray-800',
      body: {
        base: 'grow'
      }
    }">
      <template #header>
        <div class="flex items-center justify-between">
          <div class="flex">
            <!-- Test -->
            <div class="mx-2">
              <!-- <UButton to="/users/profile" icon="i-heroicons-user" color="blue" /> -->
            </div>
            <!-- Messages -->
            <div class="mx-2">
              <UChip text="3" size="2xl">
                <UButton to="/messages/messages" variant="solid" icon="i-heroicons-chat-bubble-left-ellipsis"
                  color="green" @click="isLogout = true" />
              </UChip>
            </div>
            <!-- Logout -->
          </div>

          <LogoutModal />
        </div>
      </template>

      <!-- Przyciski -->
      <div>

        <div class="flex-auto mt-2">
          <ULink to="/" active-class="text-primary"
            inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
            Profile
          </ULink>
        </div>
      </div>
      <!-- Koniec Modal wylogowania -->
    </UCard>
  </div>
</template>



<style scoped></style>
