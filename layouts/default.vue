<template>
  <div>
    {{ `Layouts: ${isAuth}`}}
    <slot />
  </div>
</template>


<script setup>
defineOptions({
  name: "DefaultLayout",
});
import { computed } from 'vue';

import { useAuth } from '../composables/useAuth';
// Uzyskanie dostępu do stanu logowania
const { isLoggedIn } = useAuth();
const isAuth = computed(() => isLoggedIn.value); 
</script>