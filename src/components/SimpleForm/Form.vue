<template>
	<form @submit.prevent="$emit('submit')">
		<SimpleField v-for="field in fields" v-bind="field" :data="data"/>
		<button type="submit">{{ submitName }}</button>
		<RouterLink :to="{ name: 'home' }" class="red button">Cancel</RouterLink>
	</form>
</template>

<script setup>
	import SimpleField from '@/components/SimpleForm/Field.vue'

	defineProps(['data', 'fields', 'submitName'])
	defineEmits(['submit'])
</script>