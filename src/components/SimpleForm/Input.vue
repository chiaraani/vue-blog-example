<template>
	<textarea v-if="type === 'textarea'" :name="name" v-model="data[name]"></textarea>
	<input v-else :type="type" :name="name" v-model="data[name]">
</template>

<script setup>
	defineProps(['type', 'name', 'data'])
</script>