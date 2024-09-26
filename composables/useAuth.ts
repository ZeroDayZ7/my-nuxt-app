import { ref, watch } from 'vue';
import { useRouter } from 'vue-router'; // Dla przekierowań po wylogowaniu

export const useAuth = () => {
  const router = useRouter(); // Inicjalizacja routera

  // Przechowujemy stan użytkownika
  const currentUser = useState<object | null>('currentUser', () => null);
  const token = useState<string | null>('token', () => null);

  // const isLoggedIn = computed(() => !!token.value && !!currentUser.value);

  
  // const isLoggedIn = useState<boolean>('isLoggedIn', () => true);
  const isLoggedIn = useState<boolean>('isLoggedIn', () => false);

  const isAuth = ref(true);
  // const isAuth = ref(false);

  // Funkcja logowania
  const login = (userData: object, authToken: string) => {
    currentUser.value = userData;
    token.value = authToken;
    saveToLocalStorage();
  };

  // Funkcja wylogowania
  const logout = () => {
    currentUser.value = null;
    token.value = null;
    clearLocalStorage();
    router.push('/login'); // Przekierowanie użytkownika po wylogowaniu
  };

  // Funkcja sprawdzająca autoryzację - przywraca stan po odświeżeniu
  const checkAuth = () => {
    const storedUser = localStorage.getItem("currentUser");
    const storedToken = localStorage.getItem("token");
    if (storedUser && storedToken) {
      currentUser.value = JSON.parse(storedUser);
      token.value = storedToken;
    }
  };

  // Zapis danych do localStorage
  const saveToLocalStorage = () => {
    if (currentUser.value && token.value) {
      localStorage.setItem("currentUser", JSON.stringify(currentUser.value));
      localStorage.setItem("token", token.value);
    }
  };

  // Czyszczenie localStorage
  const clearLocalStorage = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("token");
  };

  // Watcher reagujący na zmiany w stanie `isLoggedIn`
  // watch(isLoggedIn, (newValue) => {
  //   if (!newValue) {
  //     logout(); // Wywołanie wylogowania automatycznie, gdy isLoggedIn zmienia się na false
  //   }
  // });

  return {
    isAuth, 
    isLoggedIn,                         // Computed stan zalogowania
    currentUser,                        // Dane aktualnego użytkownika
    token,                              // Token autoryzacyjny
    login,                              // Funkcja logowania
    logout,                             // Funkcja wylogowania
    checkAuth,                          // Sprawdzanie autoryzacji
  };
};
