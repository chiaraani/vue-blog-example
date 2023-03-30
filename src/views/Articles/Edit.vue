<script setup>
import { useRouter, useRoute } from 'vue-router'

import Title from '@/components/layout/Title.vue'
import db from '@/db'
import ArticleForm from '@/components/Articles/Form.vue'

const router = useRouter()
const route = useRoute()
const id = route.params.id
const article = db.articles[id]

const saveHandler = (data) => {
  db.articles[id] = data
  router.push({ name: 'article', params: { id } })
}
</script>

<template>
  <Title>Edit article - {{ article.title }}</Title>
  <ArticleForm :article="article" @save="(data) => saveHandler(data)" />
</template>
