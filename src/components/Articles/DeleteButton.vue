<template>
	<Teleport to="#floating">
    <button class="red button" @click="modal.open()">✖ Delete</button>
  </Teleport>

  <Modal ref="modal">
    <p class="big-font"><em>Do you really want to delete this article?</em></p>
    <button @click="deleteArticle" class="red button">✖ Delete</button>
  </Modal>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import db from '@/db'
import Modal from '@/components/user-interface/Modal.vue'

const props = defineProps(['id'])
const router = useRouter()
const modal = ref()

const deleteArticle = () => {
  db.articles.splice(props.id, 1)
  router.push({ name: 'home' })
}
</script>