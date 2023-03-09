<script setup>
	import { ref, computed } from 'vue'

	import SimpleInput from './Input.vue'

	const props = defineProps(['name', 'type', 'size'])

	const label = computed(() => {
		return props.name.charAt(0).toUpperCase() + props.name.slice(1)
	})

	const valid = ref()
	const errorMessage = ref()
	function validate(event) {
		valid.value = event.target.validity.valid
		errorMessage.value =  event.target.validationMessage
	}
</script>

<template>
	<div :class="{field: true, [size]: true, invalid: valid === false, valid: valid }">	
		<div>
			<label :for="name">{{ label }}</label>
			<span class="required-help">*</span>
		</div>	
		<SimpleInput :type='type' :name="name" required @focusout='validate' @input='validate' />
		<p v-if='errorMessage'><strong>{{ errorMessage }}</strong></p>
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

	.invalid label, .invalid input, .invalid textarea, .invalid {
		color: red;
		border-color: red;
	}

	.valid input, .valid textarea {
		border-color: green;
	}
</style>