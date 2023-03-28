<script setup>
import ArticleItem from "./Item.vue";

defineProps(["articles"]);
</script>

<template>
  <section v-if="articles.length" class="responsive">
    <ArticleItem
      v-for="(article, index) in articles"
      :key="index"
      :article="article"
      :id="index"
    />
  </section>
  <template v-else>
    <p>There are no articles.</p>
    <p><i>Click on "New article" button at the right bottom corner to create one.</i></p>
  </template>
</template>
