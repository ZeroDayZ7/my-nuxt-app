<template>
    <div class="weekdays">
      <div class="day" v-for="day in weekdays" :key="day">{{ day }}</div>
    </div>
  </template>
  
  <script setup lang="ts">
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  </script>
  
  <style scoped>
  /* Style dla Weekdays.vue */
  </style>
  