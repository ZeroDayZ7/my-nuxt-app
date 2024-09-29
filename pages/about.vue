<script setup lang="ts">
const items = [{
  label: 'Wprowadzenie',
  icon: 'i-heroicons-information-circle',
  defaultOpen: true,
  content: 'Aplikacja mObywatel umożliwia łatwy dostęp do najważniejszych dokumentów i usług publicznych z poziomu smartfona. Dzięki niej możesz zarządzać swoimi danymi osobowymi, przeglądać dokumenty i korzystać z różnych usług administracyjnych.'
}, {
  label: 'Instalacja',
  icon: 'i-heroicons-arrow-down-tray',
  disabled: true,
  content: 'Aby zainstalować aplikację mObywatel, odwiedź sklep Google Play lub App Store i pobierz aplikację na swoje urządzenie mobilne. Upewnij się, że masz stabilne połączenie internetowe.'
}, {
  label: 'Motywy',
  icon: 'i-heroicons-eye-dropper',
  content: 'Aplikacja mObywatel oferuje możliwość personalizacji motywów, co pozwala na dostosowanie wyglądu interfejsu do swoich preferencji. Możesz wybrać jasny lub ciemny motyw, aby zwiększyć komfort korzystania.'
}, {
  label: 'Układy',
  icon: 'i-heroicons-rectangle-group',
  content: 'Interfejs aplikacji jest intuicyjny i przemyślany, umożliwiając łatwe poruszanie się po różnych sekcjach. Możesz szybko znaleźć potrzebne informacje dzięki dobrze zorganizowanym kategoriom.'
}, {
  label: 'Komponenty',
  icon: 'i-heroicons-square-3-stack-3d',
  content: 'mObywatel zawiera różnorodne komponenty, które pozwalają na dostęp do takich funkcji jak przeglądanie dokumentów, zarządzanie profilami oraz korzystanie z e-usług. Każdy komponent został zaprojektowany z myślą o użytkownikach.'
}, {
  label: 'Narzędzia',
  icon: 'i-heroicons-wrench-screwdriver',
  content: 'Aplikacja mObywatel oferuje wiele narzędzi, które ułatwiają zarządzanie dokumentami i dostęp do informacji. Dzięki tym narzędziom możesz szybko załatwić sprawy urzędowe bez konieczności wychodzenia z domu.'
}]

const isLoading = useLoading();
const isOpen = ref(false)

const handleAboutClick = () => {
  isLoading.value = true;

  // Symulacja dłuższego ładowania
  setTimeout(() => {
    isLoading.value = false;
    isOpen.value = true;
  }, 500);
};
</script>

<template>
  <div>
    <UButton variant="ghost" icon="i-heroicons-information-circle" label="O aplikacji" @click="handleAboutClick"/>

    <UModal v-model="isOpen" :ui="{
      container: 'min-h-0 lg:min-h-full'
    }">
      <div class="p-4">
        <div class="flex items-center justify-between">
          <h2 class="text-2xl font-semibold">Informacje o mObywatel</h2>
        </div>
        <UAccordion 
          size="lg"
          :items="items"
        />
      </div>
    </UModal>
  </div>
</template>
