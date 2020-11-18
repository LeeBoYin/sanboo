<template>
	<div class="location-block">
		<Carousel
			class="location-block__carousel"
			:images="locationData.images"
		/>
		<div class="container">
			<div class="location-block__content">
				<div v-if="index" class="location-block__index">
					<div class="location-block__index-num">
						{{ index }}
					</div>
				</div>
				<h2>{{ locationData.title }}</h2>
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
						@click="$emit('click:more')"
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
export default {
	components: {
		Carousel,
		Subtitle,
		Tag,
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
