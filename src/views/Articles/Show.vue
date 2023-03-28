<script setup>
import { useRoute } from "vue-router";
import { ref, computed } from "vue";
import { marked } from "marked";

import Title from "@/components/layout/Title.vue";
import db from "@/db";
import DeleteButton from "@/components/Articles/DeleteButton.vue";

const route = useRoute();
const id = route.params.id;
const article = ref(db.articles[id]);

const bodyHTML = computed(() => marked(article.value.body));
</script>

<template>
  <article class="card article">
    <Title>{{ article.title }}</Title>
    <div v-html="bodyHTML"></div>
  </article>
  <DeleteButton :id="id" />
</template>

<style>
.article {
  text-align: left;
}
</style>
