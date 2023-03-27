<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted, computed } from "vue";
import { marked } from "marked";

import Title from "@/components/layout/Title.vue";
import db from "@/db";
import Modal from '@/components/user-interface/Modal.vue'

const route = useRoute();
const article = ref(db.articles[route.params.id]);

const bodyHTML = computed(() => marked(article.value.body));
// const modalDestroy = ref()
</script>

<template>
  <article class="card article">
    <Title>{{ article.title }}</Title>
    <div v-html="bodyHTML"></div>
  </article>

<!--     <Teleport to="#floating">
      <button class="red button" @click="modalDestroy.open()">✖ Delete</button>
    </Teleport>

    <Modal ref="modalDestroy">
      <p class="big-font"><em>Do you really want to delete this article?</em></p>
      <button class="red button">✖ Delete</button>
    </Modal> -->
</template>

<style>
.article {
  text-align: left;
}
</style>
