<template>
  <div class="error-page">
    <div class="error-content">
      <h1 class="error-title">404 - Page Not Found</h1>
      <p class="error-message">
        Przepraszamy, ale nie możemy znaleźć strony, której szukasz.
      </p>
      <p class="error-instruction">
        Sprawdź, czy adres URL jest poprawny, lub wróć na stronę główną.
      </p>
      <router-link to="/" class="back-button">Wróć na stronę główną</router-link>
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
  background-color: #f8d7da; /* Kolor tła dla błędu */
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
