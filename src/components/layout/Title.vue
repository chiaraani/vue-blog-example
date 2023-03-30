<script>
const siteName = document.title
</script>

<template>
  <h1 ref="title"><slot /></h1>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const title = ref()

onMounted(() => {
  document.title = `${title.value.textContent} - ${siteName}`
})
</script>
