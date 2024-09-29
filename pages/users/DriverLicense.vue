<template>
  <div class="max-w-3xl mx-auto p-4">
    <h2 class="text-2xl font-semibold mb-4">Prawo Jazdy</h2>
    <div class="flex items-center mb-4">
      <img :src="license.photo" alt="Zdjęcie Posiadacza" class="w-36 h-48 rounded-lg mr-4" />
      <div>
        <h3 class="text-xl font-bold">{{ license.fullName }}</h3>
        <p class="text-gray-400">Data urodzenia: {{ license.dateOfBirth }}</p>
        <p class="text-gray-400">Kraj: {{ license.country }}</p>
      </div>
    </div>
    <div class="space-y-4">
      <div class="flex justify-between items-center">
        <label class="text-gray-400">Numer prawa jazdy:</label>
        <span class="font-bold">{{ license.licenseNumber }}</span>
      </div>
      <div class="flex justify-between items-center">
        <label class="text-gray-400">Data wydania:</label>
        <span class="font-bold">{{ license.issueDate }}</span>
      </div>
      <div class="flex justify-between items-center">
        <label class="text-gray-400">Data ważności:</label>
        <span class="font-bold">{{ license.expiryDate }}</span>
      </div>
      <div class="flex justify-between items-center">
        <label class="text-gray-400">Adres:</label>
        <span class="font-bold">{{ license.address.street }} {{ license.address.city }}</span>
        <button @click="showAddress" class="ml-2 text-blue-500">Pokaż więcej</button>
      </div>
    </div>

    <!-- Modal do wyświetlania adresu -->
    <div v-if="isAddressModalVisible" class="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">
      <div class="bg-gray-800 p-6 rounded">
        <h3 class="text-lg font-bold mb-2 text-white">Pełny adres</h3>
        <p class="text-white">{{ license.address.street }} {{ license.address.buildingNumber }} / {{ license.address.flatNumber }}, {{ license.address.zipCode }} {{ license.address.city }}</p>
        <button @click="closeAddressModal" class="mt-4 bg-red-500 text-white rounded px-4 py-2">Zamknij</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Typy danych prawa jazdy
interface Address {
  street: string;
  buildingNumber: string;
  flatNumber: string;
  zipCode: string;
  city: string;
}

interface License {
  fullName: string;
  dateOfBirth: string;
  country: string;
  licenseNumber: string;
  issueDate: string;
  expiryDate: string;
  address: Address;
  photo: string;
}

// Stan danych prawa jazdy
const license = ref<License>({
  fullName: 'Jan Kowalski',
  dateOfBirth: '1990-01-01',
  country: 'Polska',
  licenseNumber: 'XYZ654321',
  issueDate: '2020-01-01',
  expiryDate: '2030-01-01',
  address: {
    street: 'ul. Przykładowa',
    buildingNumber: '1',
    flatNumber: '12',
    zipCode: '00-000',
    city: 'Warszawa',
  },
  photo: 'https://avatars.githubusercontent.com/u/739984?v=4', // przykładowe zdjęcie
});

// Stan modali
const isAddressModalVisible = ref(false);

// Metody do wyświetlania danych
const showAddress = () => {
  isAddressModalVisible.value = true;
};

// Opcjonalne zamykanie modalów
const closeAddressModal = () => {
  isAddressModalVisible.value = false;
};
</script>

<style scoped>
/* Dodatkowe style można dodać tutaj, jeśli to potrzebne */
</style>
