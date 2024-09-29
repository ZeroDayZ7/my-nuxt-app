<script setup lang="ts">
import LogoutModal from '~/components/Auth/LogoutModal.vue';
const isLogout = ref(false);

const loadTime = ref(0);
const loadingMenu = ref(false);

const renderStartTime = ref(0);
const renderEndTime = ref(0);

const showMenu = async () => {
  // Rozpoczynamy mierzenie czasu
  const startTime = performance.now();
  loadingMenu.value = true;
  renderStartTime.value = startTime;

  try {
    // Poczekaj na zakończenie cyklu renderowania, aby upewnić się, że modal w pełni się załadował
    await nextTick();
    // Dodaj niewielkie opóźnienie, aby symulować opóźnienia w środowisku produkcyjnym
    // await new Promise(resolve => setTimeout(resolve, 100));
    await nextTick(); // czeka na otwarcie modalnego
    renderEndTime.value = performance.now();
    console.log(`Rzeczywisty czas renderowania modalnego: ${(renderEndTime.value - renderStartTime.value) / 1000} sekund`);
  } finally {
    // Koniec mierzenia czasu

    const endTime = performance.now();
    loadTime.value = (endTime - startTime) / 1000; // Czas w sekundach
    loadingMenu.value = false;
    console.log(`Czas ładowania menu: ${loadTime.value} sekund`);
  }
};



const route = useRoute()

</script>

<template>
  <div class="mr-2">
    <!-- Główny Modal Menu -->
    <UCard :ui="{
      base: 'h-full flex flex-col overflow-y-auto',
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
              <UButton to="/users/profile" icon="i-heroicons-user" color="blue" />
            </div>
            <!-- Messages -->
            <div class="mx-2">
              <UChip text="3" size="2xl">
                <UButton to="/messages/messages" variant="solid" icon="i-heroicons-chat-bubble-left-ellipsis"
                  color="green" @click="isLogout = true" />
              </UChip>
            </div>
            <!-- Logout -->
            <div class="ml-12">
              <slot name="actions"></slot> <!-- Miejsce na dodatkowe elementy -->
              <LogoutModal />
            </div>
          </div>
          <p>{{ loadTime }}</p>
          <UButton to="/" color="red" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" />
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
