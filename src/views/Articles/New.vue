<script setup>
	import { reactive, } from 'vue'

	import Title from '@/components/layout/Title.vue'
	import ArticleForm from '@/components/Articles/Form.vue'

	const article = reactive({ 
		title: '',
		body: ''
	})

	const saveHandler = () => console.log('Submitted!', article)
</script>

<template>
	<Title>New article</Title>
	<ArticleForm :article='article' @save="saveHandler" />	
</template>