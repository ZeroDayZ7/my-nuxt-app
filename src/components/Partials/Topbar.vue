<template>
  <header>
    <div class="topbar">
      <h1>CPNP</h1>
    </div>
    <div class="tbpanel">
      <div class="fr">
        <About />
        <div class="mrg15"></div>
        <LoginModal />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import About from '~/pages/about.vue';
import LoginModal from '../Auth/LoginModal.vue';


</script>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;  
}

header div,
.mrg15 {
  margin-left: 2px;
  margin-right: 2px;
}
</style>
