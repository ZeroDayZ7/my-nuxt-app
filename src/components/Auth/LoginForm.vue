<template>
  <div class="login-container">
    <div class="login-box">
      <form @submit.prevent="handleLogin">
        <UFormGroup label="Email">
          <UInput 
            placeholder="E-mail"
            icon="i-heroicons-envelope"
            autocomplete="on"
            :autofocus=true

            />
        </UFormGroup>
        <p v-if="emailError" class="error">{{ emailError }}</p>
    <div class="form-group">
      <UFormGroup label="Password">
          <UInput 
            placeholder="Hasło"
            icon="i-heroicons-lock-closed"
            autocomplete="on"
            autcomplete="current-password"
            type="password"

            />
        </UFormGroup>
      <p v-if="passwordError" class="error">{{ passwordError }}</p>
    </div>
    <button type="submit">Zaloguj się</button>
    <p v-if="loginError" class="error">{{ loginError }}</p>
    </form>
  </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { loginUser } from '~/services/auth/login';

const email = ref('');
const password = ref('');
const router = useRouter();

const emailError = ref('');
const passwordError = ref('');
const loginError = ref('');

const validateEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

const validatePassword = (password: string) => {
  return password.length >= 6;
};

const handleLogin = async () => {
  emailError.value = '';
  passwordError.value = '';
  loginError.value = '';

  if (!validateEmail(email.value)) {
    emailError.value = 'Wprowadź prawidłowy adres email.';
    return;
  }

  if (!validatePassword(password.value)) {
    passwordError.value = 'Hasło musi mieć co najmniej 6 znaków.';
    return;
  }

  // Zrób zapytanie do API o logowanie
  const response = await loginUser(email.value, password.value);

  if (response.status === 200 && response.token) {
    // Ustaw isAuthenticated w Vuex lub w stanie aplikacji
    const isAuthenticated = useState('isAuthenticated');
    isAuthenticated.value = true;
    router.push('/'); // Przekierowanie po udanym logowaniu
  } else {
    // Obsługa błędów logowania
    loginError.value = 'Nieprawidłowy login lub hasło.';
  }
};
</script>


<style scoped>
.error {
  color: red;
  font-size: 0.9em;
}

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
