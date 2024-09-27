<template>
  <div class="max-w-3xl mx-auto p-4">
    <h2 class="text-2xl font-semibold mb-4">Profil Obywatela</h2>
    <div class="flex items-center mb-4">
      <img :src="user.photo" alt="Zdjęcie Profilowe" class="w-36 h-48 rounded-lg mr-4" />
      <div>
        <h3 class="text-xl font-bold">{{ user.firstName }} {{ user.lastName }}</h3>
        <p class="text-gray-400">{{ user.country }}</p>
        <p class="text-gray-400">Data urodzenia: {{ user.birthDate }}</p>
      </div>
    </div>
    <div class="space-y-4">
      <div class="flex justify-between items-center">
        <label class="text-gray-400">Numer dowodu osobistego:</label>
        <span class="font-bold">{{ user.idNumber }}</span>
      </div>
      <div class="flex justify-between items-center">
        <label class="text-gray-400">Numer prawa jazdy:</label>
        <span class="font-bold">{{ user.licenseNumber }}</span>
      </div>
      <div class="flex justify-between items-center">
        <label class="text-gray-400">Numer PESEL:</label>
        <div class="flex items-center">
          <span class="font-bold">{{ isPeselPinEntered ? user.pesel.slice(0, 4) + '****' + user.pesel.slice(-4) : '****' }}</span>
          <button @click="showPeselPinModal" class="ml-2 text-blue-500">Pokaż więcej</button>
        </div>
      </div>
      <div class="flex justify-between items-center">
        <label class="text-gray-400">Adres:</label>
        <div class="flex items-center">
          <span class="font-bold">{{ user.address.street }} {{ user.address.city }}</span>
          <button @click="showAddress" class="ml-2 text-blue-500">Pokaż więcej</button>
        </div>
      </div>
    </div>

    <!-- Modal do podawania PINu dla PESEL -->
    <div v-if="isPeselPinModalVisible" class="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">
      <div class="bg-gray-800 p-6 rounded">
        <h3 class="text-lg font-bold mb-2 text-white">Podaj PIN</h3>
        <input type="password" v-model="peselPin" class="border border-gray-300 rounded px-2 py-1 mb-2 w-full" />
        <button @click="verifyPeselPin" class="mt-4 bg-green-500 text-white rounded px-4 py-2 w-full">
          Potwierdź
        </button>
      </div>
    </div>

    <!-- Modal do wyświetlania adresu -->
    <div v-if="isAddressModalVisible" class="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">
      <div class="bg-gray-800 p-6 rounded">
        <h3 class="text-lg font-bold mb-2 text-white">Pełny adres</h3>
        <p class="text-white">{{ user.address.street }} {{ user.address.buildingNumber }} / {{ user.address.flatNumber }}, {{ user.address.zipCode }} {{ user.address.city }}</p>
        <button @click="isAddressModalVisible = false" class="mt-4 bg-red-500 text-white rounded px-4 py-2">
          Zamknij
        </button>
      </div>
    </div>

    <!-- Modal do wyświetlania PESEL -->
    <div v-if="isPeselModalVisible" class="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">
      <div class="bg-gray-800 p-6 rounded flex items-center justify-between">
        <h3 class="text-lg font-bold mb-2 text-white">Numer PESEL</h3>
        <p class="text-white">{{ user.pesel }}</p>
        <button @click="copyPesel" class="ml-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path d="M13 2a1 1 0 00-1 1v2.586l-3-3A1 1 0 008 3V1a1 1 0 00-2 0v2a1 1 0 00.293.707l4 4A1 1 0 0012 6V4a1 1 0 001-1V1a1 1 0 00-1-1zM5 4a1 1 0 00-1 1v12a1 1 0 001 1h10a1 1 0 001-1V8a1 1 0 00-1-1H5zm10 10H5V6h10v8z" />
          </svg>
        </button>
        <button @click="isPeselModalVisible = false" class="mt-2 bg-red-500 text-white rounded px-4 py-2">
          Zamknij
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Typy danych użytkownika
interface User {
  firstName: string;
  lastName: string;
  country: string;
  birthDate: string;
  pesel: string;
  address: {
    street: string;
    buildingNumber: string;
    flatNumber: string;
    zipCode: string;
    city: string;
  };
  idNumber: string;
  licenseNumber: string;
  photo: string;
}

// Stan danych użytkownika
const user = ref<User>({
  firstName: 'Jan',
  lastName: 'Kowalski',
  country: 'Polska',
  birthDate: '1990-01-01',
  pesel: '12345678901',
  address: {
    street: 'ul. Przykładowa',
    buildingNumber: '1',
    flatNumber: '12',
    zipCode: '00-000',
    city: 'Warszawa',
  },
  idNumber: 'ABC123456',
  licenseNumber: 'XYZ654321',
  photo: 'https://avatars.githubusercontent.com/u/739984?v=4', // przykładowe zdjęcie o wymiarach 150x200
});

// Stan modali
const isAddressModalVisible = ref(false);
const isPeselPinModalVisible = ref(false);
const isPeselModalVisible = ref(false);
const peselPin = ref('');
const isPeselPinEntered = ref(false);

// Metody do wyświetlania danych
const showAddress = () => {
  isAddressModalVisible.value = true;
};

const showPeselPinModal = () => {
  isPeselPinModalVisible.value = true;
};

const verifyPeselPin = () => {
  if (peselPin.value === '777') {
    isPeselPinEntered.value = true;
    isPeselPinModalVisible.value = false;
    isPeselModalVisible.value = true; // Otwórz modal z PESEL od razu
  } else {
    alert('Nieprawidłowy kod PIN');
  }
};

const copyPesel = () => {
  navigator.clipboard.writeText(user.value.pesel);
  alert('PESEL skopiowany do schowka!');
};

// Opcjonalne zamykanie modalów
const closeAddressModal = () => {
  isAddressModalVisible.value = false;
};

const closePeselModal = () => {
  isPeselModalVisible.value = false;
};
</script>

<style scoped>
/* Dodatkowe style można dodać tutaj, jeśli to potrzebne */
</style>
