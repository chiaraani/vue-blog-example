<template>
	<div>					
		<label :for="name + '_field'">{{ label }}</label>
		<span class="required-help">*</span>
	</div>
</template>

<script setup>
	import { computed } from 'vue'
	import capitalize from '@/helpers/capitalize'

	const props = defineProps(['name'])

	const label = computed(() => capitalize(props.name))
</script>