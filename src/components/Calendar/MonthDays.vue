<template>
    <div class="days">
      <Day v-for="day in monthDays" :key="day.date" :day="day" @click="emitDayClick(day)" />
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue';
  import Day from './Day.vue';
  
  const props = defineProps(['year']);
  const emit = defineEmits(['dayClicked']);
  
  const monthDays = computed(() => {
    const daysInMonth = new Date(props.year, 1, 0).getDate();
    return Array.from({ length: daysInMonth }, (_, i) => ({
      number: i + 1,
      date: new Date(props.year, 0, i + 1)
    }));
  });
  
  function emitDayClick(day) {
    emit('dayClicked', day);
  }
  </script>
  
  <style scoped>
  /* Style dla MonthDays.vue */
  </style>
  