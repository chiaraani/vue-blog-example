<script setup>
	import { reactive, } from 'vue'

	import Title from '@/components/layout/Title.vue'

	const article = reactive({ 
		title: '',
		body: ''
	})

	const submitHandler = () => console.log('Submitted!', article)

	// Form //
	import { RouterLink } from 'vue-router'
</script>

<template>
	<Title>New article</Title>
	<!-- Form -->
	<article class="card">
		<form @submit.prevent="submitHandler">
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