<template>
	<div class="location-detail">
		<Carousel
			class="location-detail__carousel"
			:images="locationData.images"
		/>
		<div class="container">
			<p>{{ locationData.description }}</p>
		</div>
	</div>
</template>

<script>
import Carousel from '@components/Carousel';
export default {
	components: {
		Carousel,
	},
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
};
</script>
