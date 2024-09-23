<template>
  <header>
    <div class="topbar">
      <h1>CPNP</h1>
    </div>
    <div class="tbpanel">
      <div class="fr">
        <About />
        <div class="mrg15"></div>
        <div class="w100">
          <LoginModal v-if="!isAuth" />
          <div v-else><MenuModal /></div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import About from '~/pages/about.vue';
import LoginModal from '../Auth/LoginModal.vue';
import MenuModal from '../Auth/MenuModal.vue';
const isAuth = useAuth();

</script>

<style scoped>
.w100 {
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

header div,
.mrg15 {
  margin-left: 10px;
  margin-right: 10px;
}
</style>
