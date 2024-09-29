<template>
  <header>
    <div class="app-name ml-2">
      {{ useRuntimeConfig().public.apiName }}
    </div>
    <div class="tbpanel">
      <div class="fr">
        <UButton to="/menu" variant="ghost" icon="i-heroicons-bars-4" label="Menu"/>
        <About />
        <div class="w100">
          <LoginModal v-if="!isLoggedIn" />
          <div class="flex flex-row" v-else>
              <!-- <MenuModal /> -->
          <UButton to="/menu" variant="ghost" icon="i-heroicons-bars-4" label="Menu"/>

          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import About from '~/pages/about.vue';
import LoginModal from '../Auth/LoginModal.vue';
import MenuModal from '../Auth/MenuModal.vue';

const { isLoggedIn } = useAuth();

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
</style>
