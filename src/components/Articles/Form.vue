<script setup>
	import { RouterLink } from 'vue-router'

	const props = defineProps(['article'])
	const emit = defineEmits(['save'])
</script>

<template>
	<article class="card">
		<form @submit.prevent="emit('save')">
			<div class="large field">
				<div>					
					<label for="title">Title</label>
					<span class="required-help">*</span>
				</div>
				<input type="text" name="title" v-model="article.title"/>
			</div>
			<div class="field">
				<div>	
					<label for="body">Body</label>
					<span class="required-help">*</span>
				</div>
				<textarea name="body" v-model="article.body"></textarea>
			</div>
			<button type="submit">Save</button>
			<RouterLink :to="{ name: 'home' }" class="red button">Cancel</RouterLink>
		</form>
	</article>
</template>