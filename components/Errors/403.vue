<!-- <template>
  <div class="error-page">
    <div class="error-content">
      <h1 class="error-title">403 - Forbidden</h1>
      <p class="error-message">
        Przepraszamy, ale nie masz uprawnień do przeglądania tej strony.
      </p>
      <p class="error-instruction">
        Upewnij się, że jesteś zalogowany i masz odpowiednie uprawnienia.
      </p>
      <router-link to="/" class="back-button">Wróć do strony głównej</router-link>
    </div>
  </div>
</template> -->

<template>
  <div class="error-page">
    <div class="error-content">
      <h1 class="error-title">403 - Forbidden</h1>
      <p class="error-message">
        Sorry, but you do not have permission to view this page.
      </p>
      <p class="error-instruction">
        Please ensure that you are logged in and have the appropriate permissions.
      </p>
      <router-link to="/" class="back-button">Return to the homepage</router-link>
    </div>
  </div>
</template>


<style scoped>
.error-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8d7da; /* Kolor tła */
  color: #721c24; /* Kolor tekstu */
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
}

.error-content {
  max-width: 600px;
}

.error-title {
  font-size: 48px;
  margin-bottom: 20px;
}

.error-message {
  font-size: 24px;
  margin-bottom: 10px;
}

.error-instruction {
  font-size: 18px;
  margin-bottom: 30px;
}

.back-button {
  background-color: #721c24;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.back-button:hover {
  background-color: #f5c6cb; /* Jaśniejszy kolor po najechaniu */
}
</style>
