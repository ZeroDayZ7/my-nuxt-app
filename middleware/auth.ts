// middleware/auth.ts

export default defineNuxtRouteMiddleware((to, from) => {
  const { isLoggedIn } = useAuth();

    // Sprawdzenie, czy użytkownik nie jest zalogowany
    if (!isLoggedIn.value) {
      // Jeśli użytkownik nie jest zalogowany i jest na stronie głównej, nie przekierowuj ponownie na tę stronę
      if (to.path !== '/') {
        return navigateTo('/'); // Przekieruj na stronę główną
      }
    }

    console.log(`Sprawdzam Auth`);
});
