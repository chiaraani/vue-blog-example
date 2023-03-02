<script setup>
import { computed } from 'vue'
import { marked } from 'marked'
import summarize from "@/components/user-interface/summarize";

const props = defineProps(["article"]);

const summary = computed(() => {
  return marked(summarize({ text: props.article.body, maxLength: 50 })) 
})
</script>

<template>
  <article class="card">
    <h2>{{ article.title }}</h2>
    <div v-html="summary"></div>
  </article>
</template>
