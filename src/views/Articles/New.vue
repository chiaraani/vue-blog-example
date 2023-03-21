<script setup>
import { useRouter } from "vue-router";

import Title from "@/components/layout/Title.vue";
import ArticleForm from "@/components/Articles/Form.vue";
import { createRecord } from "@/data";

const router = useRouter();

const saveHandler = async (data) => {
  const article = await createRecord("articles", data);
  router.push({ name: "article", params: { slug: article.slug } });
};
</script>

<template>
  <Title>New article</Title>
  <ArticleForm @save="(data) => saveHandler(data)" />
</template>
