<script setup>
import { ref } from 'vue'

const show = ref(false)
const open = () => (show.value = true)
const close = () => (show.value = false)
defineExpose({ open })
</script>

<template>
  <Teleport v-if="show" to="#modals">
    <div class="modal-shadow" @click.self="close">
      <div class="card">
        <slot />
        <button class="red button" @click="close">Cancel</button>
      </div>
    </div>
  </Teleport>
</template>

<style>
.modal-shadow {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #0005;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
