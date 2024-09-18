// middleware/auth.ts

export default defineNuxtRouteMiddleware((to, from) => {
    // Zakładając, że trzymasz informacje o zalogowaniu w localStorage lub w Vuex
    const isAuthenticated = useState('isAuthenticated', () => false); // Przykład - zmień na swoją logikę

    if (!isAuthenticated.value && to.path !== '/login') {
      return navigateTo('/login');
    }
  });

// import { defineNuxtRouteMiddleware, useNuxtApp } from "#app";

// export default defineNuxtRouteMiddleware(() => {
//   const { $auth } = useNuxtApp();
//   const isAuthenticated = $auth.isAuthenticated(); // Sprawdź, czy użytkownik jest zalogowany

//   if (!isAuthenticated) {
//     return navigateTo("/login"); // Przekierowanie do strony logowania, jeśli użytkownik nie jest zalogowany
//   }
// });
