// middleware/auth.ts

export default defineNuxtRouteMiddleware((to, from) => {
  const { isLoggedIn } = useAuth();
  const { isOpen } = useModalNuxtUi();

  console.log(`isLoggedIn: ${isLoggedIn.value}`);

  // Sprawdzenie, czy użytkownik nie jest zalogowany
  if (!isLoggedIn.value) {
    // Przekieruj na stronę główną, jeśli próbujesz wejść na inną ścieżkę
    if (to.path !== "/") {
      isOpen.value = true; // Pokazuje modal logowania
      return navigateTo("/"); // Przekieruj na stronę główną
    }
  }

  console.log(`Sprawdzam Auth2`);
});
