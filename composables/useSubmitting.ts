// composables/useOpen.ts
export const useSubmitting = () => useState<boolean>('isSubmitting', () => false);