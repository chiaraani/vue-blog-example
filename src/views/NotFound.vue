<script setup>
import Title from "@/components/layout/Title.vue"
import { RouterLink } from "vue-router"
</script>

<template>
  <Title>Page was not found</Title>
  <p class="big-font">
    Go <RouterLink :to="{ name: 'home' }">home</RouterLink>.
  </p>
</template>
