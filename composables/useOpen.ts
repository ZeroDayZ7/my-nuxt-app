// composables/useOpen.ts
export const useOpen = () => useState<boolean>('isOpen', () => false);