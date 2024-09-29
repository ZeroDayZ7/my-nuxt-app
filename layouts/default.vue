<template>
  <div> 
    <!-- {{ `isLoggedIn: ${isLoggedIn}` }}
    <input type="checkbox" v-model="isLoggedIn" @change="handleCheckboxChange" /> -->
      <slot />
  </div>
</template>


<script setup lang="ts">
defineOptions({
  name: "DefaultLayout",
});

const { isLoggedIn } = useAuth();
import { updateIsLoggedIn } from '~/utils/localStorageUtils';

const handleCheckboxChange = () => {
  updateIsLoggedIn(isLoggedIn, isLoggedIn.value);
};

// onMounted(() => {

  // console.log(`DEFAULT isLoggedIn: ${isLoggedIn.value}`);

  // const isLoggedString = localStorage.getItem('isLoggedIn');
  // if (isLoggedString !== null) {
  //   // Zamiana na liczbę
  //   if (isLoggedString === 'false') {
  //     isLoggedIn.value = false;
  //   } else {
  //     isLoggedIn.value = true;
  //   }
  // }

  // console.log(`DEFAULT LOCALSTORAGE BOOLEAN: ${isLoggedString}`);
  // // Sprawdzenie, czy konwersja się powiodła


// });

</script>