<script setup>
import { RouterLink } from "vue-router"
</script>

<template>
  <header>
    <RouterLink :to="{ name: 'home' }" class="site-name">
      <em><strong>Vue Blog Example</strong></em>
    </RouterLink>
    <nav>
      <RouterLink :to="{ name: 'home' }">Home</RouterLink>
      <RouterLink :to="{ name: 'about' }">About</RouterLink>
    </nav>
  </header>
</template>

<style>
.site-name {
  font-size: 20px;
  margin: 10px;
  text-decoration: none;
  line-height: 200%;
}

nav {
  background-color: #36009d;
  border-radius: 10px;
  display: inline-flex;
}

nav a {
  text-decoration: none;
  color: white;
  padding: 10px;
  border-radius: 10px;
  transition: background-color 0.5s ease;
}
nav a:hover {
  color: white;
}

nav a:hover:not(.router-link-active) {
  background-color: #fff2;
}

nav a.router-link-active {
  box-shadow: 0 0 20px #0009 inset;
}
</style>
