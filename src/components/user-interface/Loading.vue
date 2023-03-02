<script setup>
defineProps(["data"]);
</script>

<template>
  <slot v-if="data !== null && data !== undefined" />
  <img v-else alt="Loading..." src="/loading.gif" class="loading card" />
</template>

<style>
.loading {
  max-width: 150px;
}
</style>
