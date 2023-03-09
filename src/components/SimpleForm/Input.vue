<script setup>
	defineProps(['type'])
</script>

<template>
	<textarea v-if="type === 'textarea'"></textarea>
	<input v-else type="text" />
</template>