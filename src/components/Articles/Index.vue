<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

import db from "@/db";
import ArticlesCollection from "./Collection.vue";

const articles = ref(db.articles);
</script>

<template>
  <ArticlesCollection :articles="articles" />
  <Teleport to="#floating">
    <RouterLink :to="{ name: 'new article' }" class="button">
      ✚ New article
    </RouterLink>
  </Teleport>
</template>
