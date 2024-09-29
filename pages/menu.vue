<template>
  <MenuTP v-if="isLoggedIn"/>

  <div v-else>
    <Error403 />
  </div>


</template>

<script setup lang="ts">

import MenuTP from '~/components/Partials/MenuTP.vue';
import Error403 from '~/components/Errors/403.vue';
const { isLoggedIn } = useAuth();


watch(isLoggedIn, (newValue, oldValue) => {
  console.log('isLoggedIn zmienił się z:', oldValue, 'na:', newValue);
});

</script>


<style scoped></style>