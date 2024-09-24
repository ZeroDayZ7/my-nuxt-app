<template>
  <div class="flex justify-center items-center">
    <img 
      :src="avatarSrc" 
      alt="Avatar" 
      class="w-40 h-40 rounded-full shadow-lg"
      @error="onError"
    />
  </div>
</template>

<script setup>
const avatarSrc = '/users/avatar/77.jpg';

const onError = (event) => {
  // Ustaw domyślny avatar w przypadku błędu
  event.target.src = 'https://via.placeholder.com/150'; // URL domyślnego avatara
};
</script>

<style scoped>
/* Stylizacja (opcjonalnie) */
</style>
