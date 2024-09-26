<template>
  <div>
    =========   Layouts/default    ============
    <br>
    {{ `isAuth: ${isAuth}`}}
    <br>
    {{ `isLoggedIn: ${isLoggedIn}`}}
    <slot />
  </div>
</template>


<script setup lang="ts">
defineOptions({
  name: "DefaultLayout",
});

const { isAuth, isLoggedIn } = useAuth();
//

</script>