<script setup>
	import { RouterLink } from 'vue-router'
	import SimpleForm from '@/components/SimpleForm/Form.vue'

	defineProps(['article'])
	defineEmits(['save'])

	const fields = [
		{name: 'title', type: 'text', class: 'large'},
		{name: 'body', type: 'textarea'}
	]
</script>

<template>
	<article class="card">
		<SimpleForm :default="article" :fields="fields" submit-button="Save" @submit="data => $emit('save', data)" />
	</article>
</template>