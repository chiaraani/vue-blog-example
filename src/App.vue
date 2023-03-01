<script setup>
import { RouterView } from "vue-router";
import TheHeader from "@/components/layout/TheHeader.vue";
</script>

<template>
  <TheHeader />
  <main>
    <RouterView v-slot="{ Component, route }">
      <Transition name="fade-slide-left" mode="out-in">
        <div :key="route.path">
          <component :is="Component" />
        </div>
      </Transition>
    </RouterView>
  </main>
</template>

<style>
.fade-slide-left-enter-active,
.fade-slide-left-leave-active {
  transition: all 0.5s ease;
}
.fade-slide-left-enter-from,
.fade-slide-left-leave-to {
  opacity: 0;
}

.fade-slide-left-enter-from {
  transform: translateX(-100px);
}
.fade-slide-left-leave-to {
  transform: translateX(-100px);
}
</style>
