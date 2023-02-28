<script setup>
import Title from "@/components/layout/Title.vue";
import ArticlesCollection from "@/components/Articles/Collection.vue";
import { articles } from "@/tests/fixtures/articles";
</script>

<template>
  <Title>Home</Title>
  <ArticlesCollection :articles="articles" />
</template>
