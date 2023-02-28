<script setup>
import { computed } from "vue";

const props = defineProps(["text", "maxLength"]);

const summary = computed(() => {
  if (props.text.length <= props.maxLength) return props.text;

  const sliced = props.text.slice(0, props.maxLength + 1);
  const words = sliced.split(" ");
  words.pop();
  return words.join(" ") + "...";
});
</script>

<template>
  {{ summary }}
</template>
