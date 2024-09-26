// composables/useOpen.ts
// export const useAuth = () => useState<boolean>('isAuth', () => false);


// useAuth.js
import { ref, computed } from "vue";

export function useAuth() {
  const isLoggedIn = ref(true); // On
  // const isLoggedIn = ref(false); // Off

  const login = () => {
    isLoggedIn.value = true; // Zmieniamy stan na zalogowany
  };

  const logout = () => {
    isLoggedIn.value = false; // Zmieniamy stan na niezalogowany
  };

  return {
    isLoggedIn, // Obliczana wartość
    login,
    logout,
  };
}
