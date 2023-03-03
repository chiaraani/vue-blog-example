<script setup>
import { computed } from 'vue'

import NotFound from '@/views/NotFound.vue'

const props = defineProps(["data"]);

const isNotFound = computed(() => {
  return props.data.constructor === Error && props.data.message === '404'
})
</script>

<template>
  <img v-if="data === null || data === undefined" alt="Loading..." src="/loading.gif" class="loading card" />
  <NotFound v-else-if="isNotFound" />
  <slot v-else />
</template>

<style>
.loading {
  max-width: 150px;
}
</style>
