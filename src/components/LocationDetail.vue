<template>
	<div class="location-detail">
		<Carousel
			class="location-detail__carousel"
			:images="locationData.images"
		/>
		<div class="container">
			<div class="location-detail__content">
				<div v-if="index" class="location-detail__index">
					<div class="location-detail__index-num">
						{{ index }}
					</div>
				</div>
				<h3>{{ locationData.title }}</h3>
				<Subtitle>{{ locationData.subtitle }}</Subtitle>
				<p v-html="locationData.content" class="mt-3"></p>
				<div v-if="locationData.tags.length">
					<Tag
						v-for="(tag, index) in locationData.tags"
						:key="index"
					>{{ tag }}</Tag>
				</div>
				<div v-if="locationData.links.length" class="mt-5">
					<h4>相關連結</h4>
					<ul>
						<li v-for="(link, index) in locationData.links">
							<a :href="link.url" target="_blank" rel="noopener">{{ link.name }}</a>
						</li>
					</ul>
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
