<template>
  <div class="latest-news">
    <h2>Najnowsze Wiadomości</h2>
    <div v-for="news in newsList" :key="news.id" class="news-item">
      <h3>{{ news.title }}</h3>
      <p>{{ news.description }}</p>
      <button @click="showMore(news.id)">Pokaż więcej</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const newsList = ref([
  { id: 1, title: 'Wydarzenie 1', description: 'Opis wydarzenia 1...' },
  { id: 2, title: 'Wydarzenie 2', description: 'Opis wydarzenia 2...' },
  { id: 3, title: 'Wydarzenie 3', description: 'Opis wydarzenia 3...' },
]);

const showMore = (id) => {
  // Logika wyświetlania pełnej wiadomości
  alert(`Wyświetl pełną wiadomość o id: ${id}`);
};
</script>

<style scoped>
.latest-news {
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
}

.news-item {
  margin-bottom: 16px;
}

.news-item h3 {
  margin: 0;
}

.news-item p {
  margin: 8px 0;
}
</style>
