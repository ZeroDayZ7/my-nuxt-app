<template>
  <div class="login-container">
    <div class="login-box">
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" v-model="email" id="email" placeholder="Wprowadź email" required />
        </div>
        <div class="form-group">
          <label for="password">Hasło:</label>
          <input type="password" v-model="password" id="password" placeholder="Wprowadź hasło" required />
        </div>
        <button type="submit">Zaloguj się</button>
        <p class="forgot-password">
          <a href="#">Zapomniałeś hasła?</a>
        </p>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { loginUser } from '~/services/auth';


const email = ref('yovasec567@fincainc.com');
const password = ref('Zaq1@wsx');
const router = useRouter();

const handleLogin = async () => {
  // Zrób zapytanie do API o logowanie
  const response = await loginUser(email.value, password.value);

  console.log(response);

  if (response.status === 200 && response.token) {
    // Ustaw isAuthenticated w Vuex lub w stanie aplikacji
    const isAuthenticated = useState('isAuthenticated');
    isAuthenticated.value = true;

    // Możesz również zapisać token w cookies lub localStorage
    // Cookies.set('authToken', response.token); // lub localStorage.setItem('authToken', response.token);

    // Przekieruj do strony głównej lub innej strony
    router.push('/about');
  } else {
    // Obsługa błędów logowania
    console.log('Nieprawidłowy login lub hasło');
  }
};

</script>


<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-box {
  width: 300px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h2 {
  margin-bottom: 20px;
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
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.forgot-password {
  margin-top: 15px;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
