<template>
  <div>
    <h1>Strona About</h1>
    <div v-if="role === 'HA'">Treść dla administratora tutaj</div>
    <div v-else>Treść dla użytkownika tutaj</div>
  </div>
</template>

<script setup lang="ts">
import { useAsyncData } from '#app';

const { data } = await useAsyncData('userRole', async () => {
  // Fetch the user role from the server API route with credentials
  const response = await $fetch(`${useRuntimeConfig().public.apiUrl}/api/userRole`, {
    method: 'POST',
    credentials: 'include', // Ustawia, że ciasteczka mają być przesyłane
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response;
});

const role = data.value.role;
</script>

