<template>
  <textarea v-if="type === 'textarea'" v-model="value"></textarea>
  <input v-else :type="type" v-model="value" />
</template>

<script setup>
import { ref, watch } from "vue";
const props = defineProps(["type", "default"]);
const emit = defineEmits(["update"]);
const value = ref(props.default);
watch(value, () => emit("update", value.value));
</script>
