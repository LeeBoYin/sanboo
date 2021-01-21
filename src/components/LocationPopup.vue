<template>
	<div class="location-popup">
		<div
			v-if="locationData.images && locationData.images.length"
			:style="{
				'background-image': `url(${ locationData.images[0] })`
			}"
			class="location-popup__image"
		></div>
		<div class="location-popup__title">
			{{ locationData.title }}
		</div>
		<img
			class="location-popup__arrow"
			src="/static/icon/arrow-right-primary-dark.svg"
		>
	</div>
</template>

<script>
export default {
	props: {
		locationData: {
			type: Object,
			required: true,
		},
	},
};
</script>
