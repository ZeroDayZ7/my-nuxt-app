<template>
    <div class="accordion">
      <div v-for="(tab, index) in tabs" :key="index" class="accordion-item">
        <button
          @click="toggleTab(index)"
          class="accordion-header"
          :class="{ 'active': tab.isOpen, 'disabled': tab.isDisabled }"
          :disabled="tab.isDisabled"
        >
          {{ tab.title }}
        </button>
        <div v-if="tab.isOpen" class="accordion-content">
          <slot :name="tab.name">
            {{ tab.content }}
          </slot>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue'
  
  const props = defineProps({
    initialTabs: {
      type: Array,
      required: true
    },
    allowMultiple: {
      type: Boolean,
      default: false
    }
  })
  
  const tabs = ref(props.initialTabs)
  
  const toggleTab = (index) => {
    if (tabs.value[index].isDisabled) return
  
    if (!props.allowMultiple) {
      tabs.value.forEach((tab, i) => {
        if (i !== index) {
          tab.isOpen = false
        }
      })
    }
  
    tabs.value[index].isOpen = !tabs.value[index].isOpen
  }
  
  // Expose toggleTab method to parent component
  defineExpose({ toggleTab })
  
  // Watch for changes in initialTabs prop
  watch(() => props.initialTabs, (newTabs) => {
    tabs.value = newTabs
  }, { deep: true })
  </script>
  
  <style scoped>
  .accordion {
    width: 100%;
  }
  
  .accordion-item {
    margin-bottom: 5px;
  }
  
  .accordion-header {
    width: 100%;
    padding: 10px;
    color: #00d0d0;
    font-size: 18px;
    border: none;
    text-align: left;
    outline: none;
    cursor: pointer;
    transition: 0.4s;
    background-color: #003152;
  }
  /* .accordion-header:hover{
    background-color: #4d4d4d;
  } */
  
  .accordion-header.active {
    background-color: #006680;
  }
  
  .accordion-header.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  .accordion-content {
    padding: 10px;
    /* background-color: #393939; */
    border-top: none;
  }
  </style>