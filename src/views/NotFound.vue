<script setup>
	import { RouterLink } from 'vue-router'
</script>

<template>
	<h1>Page was not found</h1>
	<p class='big-font'>Go <RouterLink :to='{ name: "home" }'>home</RouterLink>.</p>
</template>