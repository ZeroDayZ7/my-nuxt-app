<template>
  <header>
    {{ `Topbar: ${isAuth}` }}
    <div class="app-name ml-2">
      {{ useRuntimeConfig().public.apiName }}
    </div>
    <div class="tbpanel">
      <div class="fr">
        <About />
        <div class="w100">
          <LoginModal v-if="!isAuth" />
          <div class="flex flex-row" v-else>
            <UChip text="3" size="2xl" class="mr-2" inset>
              <MenuModal />


            </UChip>
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
const isAuth = computed(() => isLoggedIn.value); 

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
