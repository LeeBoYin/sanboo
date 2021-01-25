<template>
	<div class="text-center text-xs text-muted p-3">
		Made with ❤️ by
		<a href="https://leeboy.in" target="_blank" @click="onClickLink('BY')">
			BY
		</a>
		&
		<a href="https://www.peizhen-lin.com" target="_blank" @click="onClickLink('PZ')">
			PZ
		</a>
	</div>
</template>

<script>
import { logEvent } from '@libs/analytics';
export default {
	methods: {
		onClickLink(name) {
			logEvent('click_footer_link', {
				link_name: name,
			});
		},
	},
}
</script>
