<template>
    <div class="modal">
      <div class="modal-content">
        <span class="close" @click="$emit('close')">&times;</span>
        <h2>Details for {{ day.number }}</h2>
        <!-- Więcej szczegółów o dniu -->
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  
  const props = defineProps(['day']);
  </script>
  
  <style scoped>
  /* Style dla Modal.vue */
  </style>
  