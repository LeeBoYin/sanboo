<template>
	<li class="location-list-item">
		<span
			class="location-list-item__index"
		>{{ index + 1 }}</span>
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
			required: true,
		},
		locationData: {
			type: Object,
			required: true,
		},
	},
}
</script>
