<template>
    <div>
      <button @click="prevYear">Previous</button>
      <span>{{ year }}</span>
      <button @click="nextYear">Next</button>
      <!-- Opcjonalnie: rozwijany wybór roku -->
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps, defineEmits } from 'vue';
  
  const props = defineProps(['year']);
  const emit = defineEmits(['yearChanged']);
  
  function prevYear() {
    emit('yearChanged', props.year - 1);
  }
  
  function nextYear() {
    emit('yearChanged', props.year + 1);
  }
  </script>
  
  <style scoped>
  /* Style dla YearPicker.vue */
  </style>
  