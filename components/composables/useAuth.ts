export const useAuth = () => {

  // const isLoggedIn = useState<boolean>('isLoggedIn', () => true);
  const isLoggedIn = useState<boolean>('isLoggedIn', () => false);

  return {
    isLoggedIn
  };
};
