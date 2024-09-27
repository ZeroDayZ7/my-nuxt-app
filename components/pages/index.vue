<template>
  <div>
    <!-- <p>Status isOpen: {{ isOpen }}</p> -->
    <UProgress 
      v-show="isLoading"
      size="xs" 
      animation="carousel"
      class="fixed top-0 left-0 w-full z-50"
      />
    <div class="content">
      <PartialsTopbar />
      <!-- <Info24 />   -->
    </div>
 
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Strona głowna'
})

const route = useRoute()
useHead({
  title: `${route.meta.title}`
})
const isLoading = useLoading();
// const { isOpen } = useModal();

// const toast = useToast();



</script>

<style scoped>
.content{
  padding: 4px 0px 4px 0px;
  border-bottom: 1px solid white;
}</style>