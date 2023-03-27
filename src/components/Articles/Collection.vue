<script setup>
import ArticleItem from "./Item.vue";

defineProps(["articles"]);
</script>

<template>
  <section class="responsive">
    <ArticleItem
      v-for="(article, index) in articles"
      :key="index"
      :article="article"
      :id="index"
    />
  </section>
</template>
