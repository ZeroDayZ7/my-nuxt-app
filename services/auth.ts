import { apiClient } from './apiClient'; // Importuj apiClient

// Funkcja logowania użytkownika
export const loginUser = async (email: string, password: string) => {
  try {
    const response = await apiClient.request('/api/login', {
      method: 'POST',
      body: { email, password },
    });

    // Zwraca odpowiedź z serwera, np. token JWT
    return response;
  } catch (error) {
    console.error('Error logging in:', error);
    return { success: false, message: 'Błąd logowania' };
  }
};

// Funkcja wylogowywania użytkownika
export const logoutUser = async () => {
  try {
    const response = await apiClient.request('/api/logout', {
      method: 'POST',
      credentials: 'include',
    });

    // Zwraca odpowiedź z serwera, np. informacja o wylogowaniu
    return response;
  } catch (error) {
    console.error('Error logging out:', error);
    return { success: false, message: 'Błąd wylogowania' };
  }
};
