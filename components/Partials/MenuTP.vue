<script setup lang="ts">
import LogoutModal from '~/components/Auth/LogoutModal.vue';
import AccordionMenu from '../Menu/AccordionMenu.vue';
const isLogout = ref(false);
const toast = useToast();

</script>

<template>
  <div>
    <!-- Główny Modal Menu -->
    <UCard :ui="{
      base: 'flex flex-col',
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
            <!-- <div class="mx-2">
              <UButton to="/users/Profile" icon="i-heroicons-user" color="orange">TEST</UButton>
            </div>
            <div class="mx-2">
              <UButton to="/test/test" icon="i-heroicons-fire" color="blue">TEST</UButton>
            </div> -->
            <!-- Messages -->
            <div class="mx-2">
              <UChip text="3" size="2xl">
                <UButton to="/messages/messages" variant="solid" icon="i-heroicons-chat-bubble-left-ellipsis"
                  color="green" @click="isLogout = true" />
              </UChip>
              <!-- <UButton label="Show toast" @click="toast.add({ title: 'Hello world!' })" /> -->
            </div>
            <!-- Logout -->
          </div>

          <LogoutModal />
        </div>
      </template>

      <!-- Przyciski -->
      <div>

        <div class="flex-auto mt-2">
         <AccordionMenu />

        </div>
      </div>
      <!-- Koniec Modal wylogowania -->
    </UCard>
  </div>
</template>



<style scoped></style>
