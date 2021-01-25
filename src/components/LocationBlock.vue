<template>
	<div class="location-block">
		<Carousel
			class="location-block__carousel"
			:images="locationData.images"
			@change:index="onCarouselIndexChange"
		/>
		<div class="container">
			<div class="location-block__content">
				<div class="location-block__index">
					<div class="location-block__index-num">
						{{ index + 1 }}
					</div>
				</div>
				<h2 ref="title">{{ locationData.title }}</h2>
				<Subtitle>{{ locationData.subtitle }}</Subtitle>
				<p class="mt-3">{{ locationData.description }}</p>
				<div v-if="locationData.tags.length">
					<Tag
						v-for="(tag, index) in locationData.tags"
						:key="index"
					>{{ tag }}</Tag>
				</div>
				<div class="mt-4 text-right">
					<button
						class="btn btn-primary-dark"
						@click="onClickMoreButton"
					>
						<span>了解更多</span>
						<img
							class="location-block__cta-arrow"
							src="/static/icon/arrow-right.svg"
						>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Carousel from '@components/Carousel';
import Subtitle from '@components/Subtitle';
import Tag from '@components/Tag';
import { logEvent } from '@libs/analytics';
export default {
	components: {
		Carousel,
		Subtitle,
		Tag,
	},
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
	data() {
		return {
			intersectionObserver: null,
			intersectionTimeout: null,
		};
	},
	mounted() {
		if(window.IntersectionObserver) {
			this.intersectionObserver = new IntersectionObserver((entries) => {
				entries.forEach(entry => {
					if(entry.isIntersecting) {
						this.intersectionTimeout = setTimeout(() => {
							logEvent('location_block_view', {
								location_name: this.locationData.title,
								location_index: this.index,
							});
						}, 1500);
					} else {
						clearTimeout(this.intersectionTimeout);
						this.intersectionTimeout = null;
					}
				});
			}, {
				root: null,
				rootMargin: '0px',
				threshold: 1,
			});
			this.intersectionObserver.observe(this.$refs.title);
		}
	},
	beforeDestroy() {
		if(this.intersectionObserver) {
			this.intersectionObserver.unobserve(this.$refs.title);
		}
	},
	methods: {
		onClickMoreButton() {
			logEvent('click_detail_button', {
				location_name: this.locationData.title,
			});
			this.$emit('click:more');
		},
		onCarouselIndexChange(index) {
			logEvent('carousel_image_view', {
				location_name: this.locationData.title,
				image_sn: index + 1,
				image_total: this.locationData.images.length,
				position: 'block',
			});
		},
	},
};
</script>
