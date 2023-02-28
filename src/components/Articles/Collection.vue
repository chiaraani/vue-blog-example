<script setup>
import ArticleItem from "./Item.vue";

defineProps(["articles"]);
</script>

<template>
  <section class="responsive">
    <ArticleItem
      v-for="article in articles"
      :key="article.id"
      :article="article"
    />
  </section>
</template>
