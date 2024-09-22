<template>
    <div class="day" @click="handleClick">
      <div class="day-number">{{ day.number }}</div>
      <button class="expand-btn">Expand</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps, defineEmits } from 'vue';
  
  const props = defineProps(['day']);
  const emit = defineEmits(['click']);
  
  function handleClick() {
    emit('click', props.day);
  }
  </script>
  
  <style scoped>
  /* Style dla Day.vue */
  </style>
  