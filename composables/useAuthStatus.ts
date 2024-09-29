import { ref, watch } from 'vue';
import { useAuth } from 'path-to-your-auth-composition'; // Upewnij się, że importujesz useAuth

export const useAuthStatus = () => {
  const { isLoggedIn } = useAuth();
  const loggedInStatus = ref(isLoggedIn.value);

  watch(isLoggedIn, (newValue, oldValue) => {
    console.log('isLoggedIn zmienił się z:', oldValue, 'na:', newValue);
    loggedInStatus.value = newValue; // Aktualizuj lokalny stan
  });

  return {
    loggedInStatus,
  };
};
