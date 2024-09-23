// composables/useOpen.ts
export const useAuth = () => useState<boolean>('isAuth', () => false);