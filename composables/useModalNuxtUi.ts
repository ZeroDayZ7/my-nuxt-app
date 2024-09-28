// composables/useOpen.ts
// export const useOpen = () => useState<boolean>('isOpen', () => false);

export const useModalNuxtUi = () => {

  // const isLoggedIn = useState<boolean>('isLoggedIn', () => true);
  const isOpen = useState<boolean>('isOpen', () => false);

  return {
    isOpen
  };
};
