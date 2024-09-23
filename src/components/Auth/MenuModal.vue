<script setup lang="ts">
const isOpen = useOpen();
const isAuth = useAuth();

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
    await new Promise(resolve => setTimeout(resolve, 100));
    isOpen.value = true;
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
    <UButton icon="i-heroicons-bars-arrow-down" label="MENU" @click="showMenu" :loading="loadingMenu"/>
    <!-- Główny Modal Menu -->
    <UModal v-model="isOpen" fullscreen prevent-close>
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
            <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
              <UIcon color="green" name="i-heroicons-cpu-chip" class="w-5 h-5" />
              MENU
              <p>{{ loadTime }}</p>
            </h3>
            <UButton color="red" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
              @click="isOpen = false" />
          </div>
        </template>

        <!-- Przycisk wylogowania -->
        <div>
          <div class="flex justify-end">
            <UButton icon="i-heroicons-power" color="orange" @click="isLogout = true">Wyloguj</UButton>
          </div>
          <div class="flex-auto">
            <UButton class="mx-1" icon="i-heroicons-power" color="gray">Admin</UButton>
            <UButton class="mx-1" icon="i-heroicons-power" color="gray">Finanse</UButton>
          </div>
          <div class="flex-auto">
            <UButton class="mx-1" icon="i-heroicons-power" color="gray">Admin</UButton>
            <UButton class="mx-1" icon="i-heroicons-power" color="gray">Finanse</UButton>
          </div>
          <div class="flex-auto">
            <UButton class="mx-1" icon="i-heroicons-power" color="gray">Admin</UButton>
            <UButton class="mx-1" icon="i-heroicons-power" color="gray">Finanse</UButton>
          </div>
          <div class="flex-auto">
            <UButton class="mx-1" icon="i-heroicons-power" color="gray">Admin</UButton>
            <UButton class="mx-1" icon="i-heroicons-power" color="gray">Finanse</UButton>
          </div>
          <div class="flex-auto">
            <UButton class="mx-1" icon="i-heroicons-power" color="gray">Admin</UButton>
            <UButton class="mx-1" icon="i-heroicons-power" color="gray">Finanse</UButton>
          </div>
          <div class="flex-auto">
            <UButton class="mx-1" icon="i-heroicons-power" color="gray">Admin</UButton>
            <UButton class="mx-1" icon="i-heroicons-power" color="gray">Finanse</UButton>
          </div>
          <div class="flex-auto">
            <UButton class="mx-1" icon="i-heroicons-power" color="gray">Admin</UButton>
            <UButton class="mx-1" icon="i-heroicons-power" color="gray">Finanse</UButton>
          </div>
          <div class="flex-auto">
            <UButton class="mx-1" icon="i-heroicons-power" color="gray">Admin</UButton>
            <UButton class="mx-1" icon="i-heroicons-power" color="gray">Finanse</UButton>
          </div>
          <div class="flex-auto">
            <UButton class="mx-1" icon="i-heroicons-power" color="gray">Admin</UButton>
            <UButton class="mx-1" icon="i-heroicons-power" color="gray">Finanse</UButton>
          </div>
          <div class="flex-auto">
            <UButton class="mx-1" icon="i-heroicons-power" color="gray">Admin</UButton>
            <UButton class="mx-1" icon="i-heroicons-power" color="gray">Finanse</UButton>
          </div>
          <div class="flex-auto">
            <UButton class="mx-1" icon="i-heroicons-power" color="gray">Admin</UButton>
            <UButton class="mx-1" icon="i-heroicons-power" color="gray">Finanse</UButton>
          </div>
          <div class="flex-auto">
            <UButton class="mx-1" icon="i-heroicons-power" color="gray">Admin</UButton>
            <UButton class="mx-1" icon="i-heroicons-power" color="gray">Finanse</UButton>
          </div>
          <div class="flex-auto">
            <UButton class="mx-1" icon="i-heroicons-power" color="gray">Admin</UButton>
            <UButton class="mx-1" icon="i-heroicons-power" color="gray">Finanse</UButton>
          </div>
          <div class="flex-auto">
            <UButton class="mx-1" icon="i-heroicons-power" color="gray">Admin</UButton>
            <UButton class="mx-1" icon="i-heroicons-power" color="gray">Finanse</UButton>
          </div>
          <div class="flex-auto">
            <UButton class="mx-1" icon="i-heroicons-power" color="gray">Admin</UButton>
            <UButton class="mx-1" icon="i-heroicons-power" color="gray">Finanse</UButton>
          </div>
          <div class="flex-auto">
            <UButton class="mx-1" icon="i-heroicons-power" color="gray">Admin</UButton>
            <UButton class="mx-1" icon="i-heroicons-power" color="gray">Finanse</UButton>
          </div>
          <div class="flex-auto">
            <UButton class="mx-1" icon="i-heroicons-power" color="gray">Admin</UButton>
            <UButton class="mx-1" icon="i-heroicons-power" color="gray">Finanse</UButton>
          </div>
          <div class="flex-auto">
            <UButton class="mx-1" icon="i-heroicons-power" color="gray">Admin</UButton>
            <UButton class="mx-1" icon="i-heroicons-power" color="gray">Finanse</UButton>
          </div>
          <div class="flex-auto">
            <UButton class="mx-1" icon="i-heroicons-power" color="gray">Admin</UButton>
            <UButton class="mx-1" icon="i-heroicons-power" color="gray">Finanse</UButton>
          </div>
          <div class="flex-auto">
            <UButton class="mx-1" icon="i-heroicons-power" color="gray">Admin</UButton>
            <UButton class="mx-1" icon="i-heroicons-power" color="gray">Finanse</UButton>
          </div>
          <div class="flex-auto">
            <UButton class="mx-1" icon="i-heroicons-power" color="gray">Admin</UButton>
            <UButton class="mx-1" icon="i-heroicons-power" color="gray">Finanse</UButton>
          </div>
          <div class="flex-auto">
            <UButton class="mx-1" icon="i-heroicons-power" color="gray">Admin</UButton>
            <UButton class="mx-1" icon="i-heroicons-power" color="gray">Finanse</UButton>
          </div>
          <div class="flex-auto">
            <UButton class="mx-1" icon="i-heroicons-power" color="gray">Admin</UButton>
            <UButton class="mx-1" icon="i-heroicons-power" color="gray">Finanse</UButton>
          </div>
          <div class="flex-auto">
            <UButton class="mx-1" icon="i-heroicons-power" color="gray">Admin</UButton>
            <UButton class="mx-1" icon="i-heroicons-power" color="gray">Finanse</UButton>
          </div>
          <div class="flex-auto">
            <UButton class="mx-1" icon="i-heroicons-power" color="gray">Admin</UButton>
            <UButton class="mx-1" icon="i-heroicons-power" color="gray">Finanse</UButton>
          </div>
          <div class="flex-auto">
            <UButton class="mx-1" icon="i-heroicons-power" color="gray">Admin</UButton>
            <UButton class="mx-1" icon="i-heroicons-power" color="gray">Finanse</UButton>
          </div>
          <div class="flex-auto">
            <UButton class="mx-1" icon="i-heroicons-power" color="gray">Admin</UButton>
            <UButton class="mx-1" icon="i-heroicons-power" color="gray">Finanse</UButton>
          </div>
          <div class="flex-auto">
            <UButton class="mx-1" icon="i-heroicons-power" color="gray">Admin</UButton>
            <UButton class="mx-1" icon="i-heroicons-power" color="gray">Finanse</UButton>
          </div>
          <div class="flex-auto">
            <UButton class="mx-1" icon="i-heroicons-power" color="gray">Admin</UButton>
            <UButton class="mx-1" icon="i-heroicons-power" color="gray">Finanse</UButton>
          </div>
          <div class="flex-auto">
            <UButton class="mx-1" icon="i-heroicons-power" color="gray">Admin</UButton>
            <UButton class="mx-1" icon="i-heroicons-power" color="gray">Finanse</UButton>
          </div>
        </div>

        <!-- Modal wylogowania -->
        <UModal v-model="isLogout" :ui="{
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



<style scoped></style>