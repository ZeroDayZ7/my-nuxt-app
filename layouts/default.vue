<template>
  <div>
   
    ========= Layouts/default ============
    <br>    
    {{ `isLoggedIn: ${isLoggedIn}` }}
    <input type="checkbox" v-model="isLoggedIn" @change="handleCheckboxChange" />
    <br>
    ======================================
      <slot />
  </div>
</template>


<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';


const route = useRoute();
const { isLoggedIn } = useAuth();
defineOptions({
  name: "DefaultLayout",
});

const handleCheckboxChange = () => {
  updateIsLoggedIn(isLoggedIn.value); // Wywołanie funkcji, aby zaktualizować stan i zapisać w localStorage
  saveToLocalStorage();
};

const updateIsLoggedIn = (value: boolean) => {
  isLoggedIn.value = value;
  console.log(`updateIsLoggedIn: ${isLoggedIn.value}`);
  saveToLocalStorage(); // Zapisz po aktualizacji
};

const saveToLocalStorage = () => {
  console.log();
  localStorage.setItem("isLoggedIn", isLoggedIn.value.toString());
};

onMounted(() => {

  console.log(`DEFAULT isLoggedIn: ${isLoggedIn.value}`);

  const isLoggedString = localStorage.getItem('isLoggedIn');
  if (isLoggedString !== null) {
    // Zamiana na liczbę
    if (isLoggedString === 'false') {
      isLoggedIn.value = false;
    } else {
      isLoggedIn.value = true;
    }
  }

  console.log(`DEFAULT LOCALSTORAGE BOOLEAN: ${isLoggedString}`);
  // Sprawdzenie, czy konwersja się powiodła


});

</script>