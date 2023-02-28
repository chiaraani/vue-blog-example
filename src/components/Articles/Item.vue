<script setup>
import Summarize from '@/components/user-interface/Summarize.vue'

const { article } = defineProps(['article'])
</script>

<template>
	<article class='card'>
		<h2>{{ article.title }}</h2>
		<p><Summarize :text='article.body' :max-length='20' /></p>
	</article>
</template>