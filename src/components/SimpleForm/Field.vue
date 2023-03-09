<script setup>
	import { computed } from 'vue'

	const props = defineProps(['name', 'type', 'size'])

	const label = computed(() => {
		return props.name.charAt(0).toUpperCase() + props.name.slice(1)
	})
</script>

<template>
	<div :class="['field', size]">	
		<div>
			<label :for="name">{{ label }}</label>
			<span class="required-help">*</span>
		</div>	
		<textarea v-if="type === 'textarea'" :name="name" required></textarea>
		<input v-else type="text" :name='name' required />
	</div>
</template>

<style>
	label {
		color: grey;
		font-weight: bold;
		font-family: sans-serif;
	}

	input, textarea {
		border-radius: 10px;
		padding: 5px;
		border: 1px solid #777;
		margin: 1px;
		display: block;
		font: inherit;
	}

	::placeholder {
		font-weight: normal;
		color: #0005;
	}

	input:focus, textarea:focus {
		outline: none;
		border-width: 2px;
		border-color: #36009d;
		margin: 0px;
	}

	textarea {
		min-width: 70vw;
		min-height: 50vmin;
	}

	.field {
		margin: 10px 0;
		display: flex;
		flex-direction: column;
	}

	.field.large {		
    margin-bottom: 30px;	
  }

	.field.large input {
		font-size: 2em;
		font-weight: bold;
	}

	.required-help {
		color: #36009d;
	}
</style>