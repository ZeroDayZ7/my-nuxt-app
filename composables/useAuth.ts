import { ref } from 'vue';

export const useAuth = () => {

  // const isLoggedIn = useState<boolean>('isLoggedIn', () => true);
  const isLoggedIn = useState<boolean>('isLoggedIn', () => false);

  // const isAuth = ref(true);
  const isAuth = ref(false);

  return {
    isAuth, 
    isLoggedIn
  };
};
