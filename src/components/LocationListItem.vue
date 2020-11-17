<template>
	<li class="location-list-item">
		<span
			v-if="index"
			class="location-list-item__index"
		>{{ index }}</span>
		{{ locationData.title }}
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
