<template>
	<div>
		<h1>Home</h1>
	</div>
</template>

<script>
import { analytics } from '@/main';
export default {
	mounted() {
		analytics.logEvent('home_load');
	},
};
</script>
