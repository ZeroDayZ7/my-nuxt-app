// composables/useLoading.ts
export const useLoading = () => useState<boolean>('isLoading', () => false);