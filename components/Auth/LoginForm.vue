<template>
  <div class="login-container">
    <div class="login-box">
      <p v-if="messageError" class="error">{{ messageError }}</p>
      <form @submit.prevent="handleLogin">
        <UFormGroup label="Email">
          <UInput placeholder="E-mail" icon="i-heroicons-envelope" autocomplete="email" v-model="email" :autofocus=true
            required />
        </UFormGroup>
        <div class="form-group">
          <UFormGroup label="Password">
            <UInput placeholder="Hasło" icon="i-heroicons-lock-closed" autcomplete="current-password" type="password"
              v-model="password" required />
          </UFormGroup>
        </div>
        <UButton class="flex items-center justify-center" :loading="isSubmitting" type="submit">{{!isSubmitting ? 'Zaloguj' : ''}}</UButton>
        <p v-if="loginError" class="error">{{ loginError }}</p>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { loginUser } from '~/services/auth';

// Definicja interfejsu
interface AuthResponse {
  token?: string;
  status?: number;
  message: string;
}



const email = ref('yovasec567@fincainc.com');
const password = ref('Zaq1@wsx');

const messageError = ref('');
const loginError = ref('');

const isSubmitting = ref(false);

const isOpen = useOpen();
const isAuth = useAuth();

const validateEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

const validatePassword = (password: string) => {
  return password.length >= 6;
};

const handleLogin = async () => {
  if (isSubmitting.value) return;  // Zapobiegaj wielokrotnemu wysyłaniu

  isSubmitting.value = true;

  if (!validateEmail(email.value) || !validatePassword(password.value)) {
    messageError.value = 'Podaj poprawne dane.';
    isSubmitting.value = false;
    return;
  }

  // Zrób zapytanie do API o logowanie
  try {
    const response: AuthResponse = await loginUser(email.value, password.value);

    if ('token' in response) { // Sprawdzamy, czy odpowiedź zawiera token
      isAuth.value = true;
      isOpen.value = false;
    } else {
      messageError.value = response.message; // Używamy wiadomości z błędu
    }
  } catch (error) {
    messageError.value = 'Wystąpił błąd podczas logowania.';
    console.error('Błąd logowania:', error);
  } finally {
    isSubmitting.value = false;
  }
};

</script>


<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 100vh; */
}

.login-box {
  width: 300px;
  /* padding: 40px 0px 40px 0px; */
  border-radius: 8px;
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
  text-align: left;
}

input {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: 200ms
}
</style>
