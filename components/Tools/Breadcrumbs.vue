<template>
      <nav aria-label="Breadcrumb">
      <ol class="breadcrumb">
        <li v-for="(item, index) in breadcrumbs" :key="index">
          <NuxtLink v-if="item.link" :to="item.link">{{ item.label }}</NuxtLink>
          <span v-else>{{ item.label }}</span>
          <span v-if="index < breadcrumbs.length - 1"> &gt; </span>
        </li>
      </ol>
    </nav>
  </template>
  
  
  <script setup lang="ts">
 
  const breadcrumbs = computed(() => {
    const pathArray = route.path.split('/').filter((p) => p); // Podziel ścieżkę na segmenty i usuń puste elementy
    const breadcrumbItems = pathArray.map((segment, index) => {
      const link = '/' + pathArray.slice(0, index + 1).join('/'); // Stwórz link do bieżącego segmentu
      return {
        label: segment.charAt(0).toUpperCase() + segment.slice(1), // Użyj pierwszej litery wielkiej i reszty małymi
        link: index === pathArray.length - 1 ? null : link, // Nie dodawaj linku do ostatniego elementu
      };
    });
    return breadcrumbItems;
  });
  
  
  </script>