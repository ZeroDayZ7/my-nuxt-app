<template>
  <div>
    <!-- =========   Layouts/default    ============
    <br>
    {{ `isLoggedIn: ${isLoggedIn}`}}
    <br>
    <label>
      <input type="checkbox" v-model="isLoggedIn" @change="handleCheckboxChange" />
      Is isLoggedIn
    </label> -->

    <slot />
  </div>
</template>


<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

defineOptions({
  name: "DefaultLayout",
});
const { isLoggedIn } = useAuth();

const handleCheckboxChange = () => {
  updateIsLoggedIn(isLoggedIn.value); // Wywołanie funkcji, aby zaktualizować stan i zapisać w localStorage
  saveToLocalStorage();
};

const updateIsLoggedIn = (value: boolean) => {
    isLoggedIn.value = value;
    saveToLocalStorage(); // Zapisz po aktualizacji
  };

  const saveToLocalStorage = () => {
    localStorage.setItem("isLoggedIn", isLoggedIn.value.toString());
  };

</script>