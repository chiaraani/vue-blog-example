<script setup>
import { onMounted, ref } from "vue";
import { RouterLink } from 'vue-router'

import { findAll } from "@/data";
import Loading from "@/components/user-interface/Loading.vue";
import ArticlesCollection from "./Collection.vue";

const articles = ref(null);
onMounted(() => findAll("articles").then((data) => (articles.value = data)));
</script>

<template>
  <Loading :data="articles">
    <ArticlesCollection :articles="articles" />
  </Loading>
  <Teleport to="#floating">
    <RouterLink :to="{ name: 'new article' }" class="button">✚ New article</RouterLink>
  </Teleport>
</template>