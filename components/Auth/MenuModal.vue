<script setup lang="ts">
import LogoutModal from './LogoutModal.vue';

const { isOpen } = useModalNuxtUi();
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
    // await new Promise(resolve => setTimeout(resolve, 100));
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



const route = useRoute()

const links = [
  [{
    label: 'Profile',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/739984?v=4'
    },
    badge: 100
  }, {
    label: 'Installation',
    icon: 'i-heroicons-home',
    to: '/getting-started/installation'
  }, {
    label: 'Vertical Navigation',
    icon: 'i-heroicons-chart-bar',
    to: `${route.path.startsWith('/dev') ? '/dev' : ''}/components/vertical-navigation`
  }, {
    label: 'Command Palette',
    icon: 'i-heroicons-command-line',
    to: '/components/command-palette'
  }], [{
    label: 'Examples',
    icon: 'i-heroicons-light-bulb'
  }, {
    label: 'Help',
    icon: 'i-heroicons-question-mark-circle'
  }]
]

</script>

<template>
  <div class="mr-2">
    <UButton variant="ghost" icon="i-heroicons-bars-4" label="Menu" @click="showMenu" :loading="loadingMenu" />
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
            <div class="flex">
              <!-- Test -->
               <div class="mx-2">
              <UButton to="/test/test" icon="i-heroicons-user" color="blue" />
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
              <LogoutModal />
              </div>
            </div>
            <p>{{ loadTime }}</p>
            <UButton color="red" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
              @click="isOpen = false" />
          </div>
        </template>

        <!-- Przyciski -->
        <div>

          <div class="flex-auto mt-2">
            <UVerticalNavigation :links="links" />
          </div>
        </div>
        <!-- Koniec Modal wylogowania -->
      </UCard>
    </UModal>



  </div>
</template>



<style scoped></style>