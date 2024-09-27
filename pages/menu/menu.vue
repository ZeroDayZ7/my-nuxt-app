<template>
  <div>
    <nav class="navbar">
      <div class="container">
        <div class="logo">
          <NuxtLink to="/" class="logo-text">MyWebsite</NuxtLink>
        </div>
        <ul class="nav-links">
          <li><NuxtLink to="/" exact-active-class="active">Home</NuxtLink></li>
          <li><NuxtLink to="/about" exact-active-class="active">About</NuxtLink></li>
          <li><NuxtLink to="/services" exact-active-class="active">Services</NuxtLink></li>
          <li><NuxtLink to="/contact" exact-active-class="active">Contact</NuxtLink></li>
        </ul>
        <div class="menu-toggle" @click="toggleMenu">
          <span class="bar" v-for="n in 3" :key="n"></span>
        </div>
      </div>
    </nav>
    <NuxtPage />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped>
.navbar {
  background-color: #333;
  color: white;
  padding: 1rem 0;
  position: relative;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: auto;
  padding: 0 20px;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
  transition: all 0.3s ease;
}

.nav-links li {
  display: inline;
}

.nav-links a {
  text-decoration: none;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.nav-links a.active,
.nav-links a:hover {
  background-color: #555;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.bar {
  height: 3px;
  width: 25px;
  background-color: white;
  margin: 3px 0;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .nav-links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    background-color: #333;
    width: 100%;
    z-index: 10;
  }

  .nav-links.active {
    display: flex;
  }

  .menu-toggle {
    display: flex;
  }
}
</style>
