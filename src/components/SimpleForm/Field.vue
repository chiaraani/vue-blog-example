<template>
	<div class="field">
		<SimpleLabel :name="name" />
		<SimpleInput :type="type" :name="name" :data="data" :id="name"/>
	</div>
</template>

<script setup>
	import { computed } from 'vue'
	import SimpleLabel from './Label.vue'
	import SimpleInput from './Input.vue'

	const props = defineProps(['name', 'type', 'data'])
</script>