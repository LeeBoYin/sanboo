<template>
	<li class="location-list-item">
		<span
			v-if="index"
			class="location-list-item__index"
		>{{ index }}</span>
		<span
			class="location-list-item__title"
		>
			{{ locationData.title }}
		</span>
		<img
			class="location-list-item__arrow"
			src="/static/icon/arrow-right-primary-dark.svg"
		>
	</li>
</template>

<script>
export default {
	props: {
		index: {
			type: Number,
			default: null,
		},
		locationData: {
			type: Object,
			required: true,
		},
	},
}
</script>
