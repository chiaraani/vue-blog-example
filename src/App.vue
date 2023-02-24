<script setup>
  import { RouterView } from "vue-router";
  import TheHeader from '@/components/layout/TheHeader.vue'
</script>

<template>
  <TheHeader />
  <main>
    <RouterView v-slot="{ Component, route }">
      <Transition name="fade-slide" mode="out-in">
        <div :key="route.name">  
          <component :is="Component" />
        </div>
      </Transition>
    </RouterView>
  </main>
</template>

<style>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.5s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
}

.fade-slide-enter-from { transform:  translateY(-20%); }
.fade-slide-leave-to { transform:  translateY(20%); }


</style>