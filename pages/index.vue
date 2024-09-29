<template>
  <div>
    <div class="content">
      <PartialsTopbar />
      <!-- <Info24 />   -->
    </div>
    <div>
      
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
// const { isOpen } = useModalNuxtUi();

// const toast = useToast();



</script>

<style scoped>
.content{
  padding: 4px 0px 4px 0px;
  border-bottom: 1px solid white;
}</style>