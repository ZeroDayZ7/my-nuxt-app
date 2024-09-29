export const useAuth = () => {
  const isLoggedIn = useState<boolean>('isLoggedIn', () => {
    console.log('Inicjalizacja isLoggedIn');
    return false;
  });
  
  // Lokalny stan do obserwacji
  const loggedInStatus = ref(isLoggedIn.value);

  // Obserwacja zmian w isLoggedIn
  watch(isLoggedIn, (newValue, oldValue) => {
    console.log('isLoggedIn zmienił się z:', oldValue, 'na:', newValue);
    loggedInStatus.value = newValue; // Aktualizuj lokalny stan
  });

  return {
    isLoggedIn,
    loggedInStatus,
  };
};
