<script setup>
import Summarize from "@/components/user-interface/Summarize.vue";

defineProps(["article"]);
</script>

<template>
  <article class="card">
    <h2>{{ article.title }}</h2>
    <p><Summarize :text="article.body" :max-length="50" /></p>
  </article>
</template>
