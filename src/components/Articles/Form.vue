<script setup>
	import { RouterLink } from 'vue-router'
	import SimpleField from '@/components/SimpleForm/Field.vue'

	const props = defineProps(['article'])
	const emit = defineEmits(['save'])
</script>

<template>
	<article class="card">
		<form @submit.prevent="emit('save')">
			<SimpleField name="title" type="text" :data="article" size="large" />
			<SimpleField name="body" type="textarea" :data="article" />
			<button type="submit">Save</button>
			<RouterLink :to="{ name: 'home' }" class="red button">Cancel</RouterLink>
		</form>
	</article>
</template>