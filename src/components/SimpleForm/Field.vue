<template>
  <div class="field">
    <SimpleLabel :name="name" />
    <SimpleInput
      v-bind="inputAttrs"
      @update="(value) => $emit('update', value)"
      required
    />
  </div>
</template>

<script setup>
import SimpleLabel from "./Label.vue";
import SimpleInput from "./Input.vue";

const props = defineProps(["name", "type", "default"]);
defineEmits(["update"]);
const inputAttrs = { id: props.name + "_field", ...props };
</script>
