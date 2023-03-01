<script setup>
	import { useRoute } from 'vue-router'
	import { ref, onMounted, computed } from 'vue'
	import { marked } from 'marked'

	import Title from '@/components/layout/Title.vue'
	import { findRecord } from '@/data'
	import Loading from '@/components/user-interface/Loading.vue'
	const route = useRoute()
	const article = ref()

	onMounted(() => {
		findRecord('articles', route.params.slug)
		.then(data => article.value = data)
	})

	const bodyHTML = computed(() => marked(article.value.body))
</script>

<template>
	<Loading :data='article'>
		<article class="card">
			<Title>{{ article.title }}</Title>
			<div v-html='bodyHTML'></div>
		</article>
	</Loading>
</template>