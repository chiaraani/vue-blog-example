<template>
	<div :class="{[size]: true, field: true}">
		<div>					
			<label :for="name">{{ label }}</label>
			<span class="required-help">*</span>
		</div>
		<SimpleInput :type="type" :name="name" :data="data"/>
	</div>
</template>

<script setup>
	import { computed } from 'vue'
	import SimpleInput from './Input.vue'

	const props = defineProps(['name', 'type', 'data', 'size'])

	const label = computed(() => {
		return props.name.charAt(0).toUpperCase() + props.name.slice(1)
	})
</script>