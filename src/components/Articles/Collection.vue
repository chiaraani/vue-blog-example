<script setup>
import ArticleItem from './Item.vue'

const { articles } = defineProps(['articles'])
</script>

<template>
	<section class='responsive'>
		<ArticleItem v-for='article in articles' :hakey='article.id' :article='article' />
	</section>
</template>