<script setup>
	import { RouterLink } from 'vue-router'
	import SimpleForm from '@/components/SimpleForm/Form.vue'

	defineProps(['article'])
	const emit = defineEmits(['save'])

	const fields = [
		{name: 'title', type: 'text', size: 'large'},
		{name: 'body', type: 'textarea'}
	]
</script>

<template>
	<article class="card">
		<SimpleForm :data="article" :fields="fields" submit-name="Save" @submit="emit('save')" />
	</article>
</template>