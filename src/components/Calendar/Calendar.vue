<template>
    <div class="calendar-container">
      <YearPicker @yearChanged="setYear" />
      <Weekdays />
      <MonthDays :year="currentYear" @dayClicked="openModal" />
      <Modal v-if="modalVisible" :day="selectedDay" @close="modalVisible = false" />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import YearPicker from './YearPicker.vue';
  import MonthDays from './MonthDays.vue';
  import Modal from './Modal.vue';
  import Weekdays from './Weekdays.vue';
  
  const currentYear = ref(new Date().getFullYear());
  const modalVisible = ref(false);
  const selectedDay = ref(null);
  
  function setYear(year) {
    currentYear.value = year;
  }
  
  function openModal(day) {
    selectedDay.value = day;
    modalVisible.value = true;
  }
  </script>
  
  <style scoped>
  /* Style dla Calendar.vue */
  </style>
  