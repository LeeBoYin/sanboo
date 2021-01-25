<template>
	<div class="carousel">
		<div ref="list" class="carousel__list">
			<div
				v-for="(image, index) in images"
				:key="index"
				class="carousel__item"
				v-lazy:background-image="image"
			></div>
		</div>
		<div class="carousel__indicator">
			<div
				v-for="(image, index) in images"
				class="carousel__indicator-dot"
				:class="{ 'carousel__indicator-dot--active': index === currentIndex }"
			></div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		images: {
			type: Array,
			default: () => [],
		},
	},
	data() {
		return {
			currentIndex: 0,
		};
	},
	watch: {
		currentIndex() {
			this.$emit('change:index', this.currentIndex);
		},
	},
	mounted() {
		this.$refs.list.addEventListener('scroll', this.onListScroll);
	},
	beforeDestroy() {
		this.$refs.list.removeEventListener('scroll', this.onListScroll);
	},
	methods: {
		onListScroll() {
			this.currentIndex = Math.round(this.$refs.list.scrollLeft / this.$refs.list.clientWidth);
		},
	},
};
</script>
