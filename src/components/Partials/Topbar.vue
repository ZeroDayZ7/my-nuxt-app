<template>
  <header>
    <div class="topbar">
      <h1>CPNP</h1>
    </div>
    <div class="tbpanel">
      <div class="fr">
        <NuxtLink to="/about">o Nas</NuxtLink>
        <div class="mrg15"></div>
        <LoginModal />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import LoginModal from '../Auth/LoginModal.vue';


</script>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid white;
}

header div,
.mrg15 {
  margin-left: 10px;
  margin-right: 10px;
}
</style>
