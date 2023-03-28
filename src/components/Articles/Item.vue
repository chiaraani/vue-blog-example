<script setup>
import { computed } from "vue"
import { RouterLink } from "vue-router"
import { marked } from "marked"

import summarize from "@/helpers/summarize"

const props = defineProps(["article", "id"])

const summary = computed(() => {
  return marked(summarize({ text: props.article.body, maxLength: 50 }))
})
</script>

<template>
  <article class="card">
    <h2>
      <RouterLink :to="{ name: 'article', params: { id } }">{{
        article.title
      }}</RouterLink>
    </h2>
    <div v-html="summary"></div>
  </article>
</template>
