<template>
	<form @submit.prevent="$emit('submit', data)">
		<SimpleField v-for="field in fields" v-bind="field" :data="data"/>
		<button type="submit">{{ submitButton }}</button>
		<RouterLink :to="{ name: 'home' }" class="red button">Cancel</RouterLink>
	</form>
</template>

<script setup>
	import { reactive } from 'vue'
	import SimpleField from '@/components/SimpleForm/Field.vue'

	defineProps(['fields', 'submitButton'])
	defineEmits(['submit'])

	const data = reactive({})
</script>