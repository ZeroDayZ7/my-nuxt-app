// middleware/auth.ts

export default defineNuxtRouteMiddleware((to, from) => {
  const { isLoggedIn } = useAuth();

  if (to.path !== '/') {
    // Sprawdzenie, czy użytkownik nie jest zalogowany
    if (!isLoggedIn.value) {
        return navigateTo('/');
      }
    }

    console.log(`Sprawdzam Auth`);
});
