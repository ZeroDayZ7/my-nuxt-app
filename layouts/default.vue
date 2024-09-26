<template>
  <div>
    =========   Layouts/default    ============
    <br>
    {{ `isAuth: ${isAuth}`}}
    <br>
    {{ `isLoggedIn: ${isLoggedIn}`}}
    <br>

    <label>
      <input type="checkbox" v-model="isAuth" />
      Is Auth
    </label>
    <label>
      <input type="checkbox" v-model="isLoggedIn" />
      Is isLoggedIn
    </label>
    <slot />
  </div>
</template>


<script setup lang="ts">
defineOptions({
  name: "DefaultLayout",
});

const { isAuth, isLoggedIn } = useAuth();


</script>