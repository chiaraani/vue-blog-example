<script setup>	
  import { RouterLink } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <RouterLink :to='{name: "home"}'>Home</RouterLink>
      <RouterLink :to='{name: "about"}'>About</RouterLink>
    </nav>
  </header>
</template>