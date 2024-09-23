<script setup lang="ts">
const isOpen = useOpen();
const isAuth = useAuth();

const isLogout = ref(false);

const handleLogoutYes = () => {
  // Tu dodaj logikę wylogowania
  isAuth.value = false;
  isLogout.value = false; // Zamknij modal po wylogowaniu
  isOpen.value = false; // Zamknij główny modal po wylogowaniu
};

const handleLogoutNo = () => {
  isLogout.value = false; // Zamknij modal po wylogowaniu
  console.log(`NO`);
};
</script>

<template>
  <div>
    <UButton icon="i-heroicons-bars-arrow-down" label="MENU" @click="isOpen = true" />

    <UModal v-model="isOpen" fullscreen prevent-close>
      <UCard :ui="{
        base: 'h-full flex flex-col',
        rounded: '',
        divide: 'divide-y divide-gray-100 dark:divide-gray-800',
        body: {
          base: 'grow'
        }
      }">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
              MENU
            </h3>
            <UButton color="red" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
              @click="isOpen = false" />
          </div>
        </template>

        <UButton icon="i-heroicons-power" color="orange" @click="isLogout = true">Wyloguj</UButton>

        <!-- Modal wylogowania -->
        <UModal v-model="isLogout" class="abc" :ui="{
          container: 'min-h-0 lg:min-h-full'
        }">
          <UCard>
            <template #header>
              <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                Czy na pewno chcesz się wylogować?
              </h3>
            </template>

            <div class="flex justify-end space-x-2 mt-4">
              <UButton color="red" @click="handleLogoutYes" autofocus>TAK</UButton>
              <UButton color="gray" @click="handleLogoutNo">NIE</UButton>
            </div>
          </UCard>
        </UModal>
        <!-- Koniec Modal wylogowania -->
      </UCard>
    </UModal>



  </div>
</template>



<style scoped>
.abc * {
  z-index: 9999;
}
</style>