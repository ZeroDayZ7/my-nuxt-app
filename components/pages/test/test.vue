<template>
  <div class="flex justify-center items-center">
    <div>
    <UButton 
      to="/"
      class="mr-2"
      icon="i-heroicons-power"
      color="blue"
      variant="ghost"  
      >
      Test
    </UButton>
  </div>
  <!-- ====================================== -->
   <div>
    <img 
      src="/users/avatar/12.jpg"
      alt="Avatar" 
      class="w-20 h-20 rounded-full shadow-lg"
    />
    


  </div>
  </div>
</template>

<script setup lang="ts">

const avatarSrc = '/12.jpg';

</script>

<style scoped>
/* Stylizacja (opcjonalnie) */
</style>
