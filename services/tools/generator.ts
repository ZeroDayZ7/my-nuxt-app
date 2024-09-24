  // services/auth.ts

  export const loginUser = async (email: string, password: string) => {
    try {
      const response = await $fetch(`${useRuntimeConfig().public.apiUrl}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          email,
          password,
        },
      });
  
      // Zwraca odpowiedź z serwera, np. token JWT
      return response;
    } catch (error) {
      console.error('Error logging in:', error);
      return { success: false, message: 'Błąd logowania' };
    }
  };