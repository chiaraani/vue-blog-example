<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";
import { marked } from "marked";

import summarize from "@/components/user-interface/summarize";

const props = defineProps(["article"]);

const summary = computed(() => {
  return marked(summarize({ text: props.article.body, maxLength: 50 }));
});
</script>

<template>
  <article class="card">
    <h2>
      <RouterLink :to="{ name: 'article', params: { slug: article.slug } }">{{
        article.title
      }}</RouterLink>
    </h2>
    <div v-html="summary"></div>
  </article>
</template>
