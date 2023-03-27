<script setup>
import { useRouter } from "vue-router";

import Title from "@/components/layout/Title.vue";
import ArticleForm from "@/components/Articles/Form.vue";
import db from "@/db";

const router = useRouter();

const saveHandler = (data) => {
  db.articles.push(data)
  router.push({ name: "article", params: { id: db.articles.length - 1 } });
};
</script>

<template>
  <Title>New article</Title>
  <ArticleForm @save="(data) => saveHandler(data)" />
</template>
