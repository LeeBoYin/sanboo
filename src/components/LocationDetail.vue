<template>
	<div class="location-detail">
		<Carousel
			class="location-detail__carousel"
			:images="locationData.images"
			@change:index="onCarouselIndexChange"
		/>
		<div class="container">
			<div class="location-detail__content">
				<div class="location-detail__index">
					<div class="location-detail__index-num">
						{{ index + 1 }}
					</div>
				</div>
				<h3>{{ locationData.title }}</h3>
				<Subtitle>{{ locationData.subtitle }}</Subtitle>
				<p v-html="locationData.content" class="mt-3"></p>
				<div v-if="locationData.tags.length">
					<Tag
						v-for="(tag, tagIndex) in locationData.tags"
						:key="tagIndex"
					>{{ tag }}</Tag>
				</div>
				<div v-if="locationData.links.length" class="mt-5">
					<h4>相關連結</h4>
					<ul>
						<li v-for="(link, linkIndex) in locationData.links">
							<a
								:href="link.url"
								target="_blank"
								rel="noopener"
								@click="onClickLink(linkIndex)"
							>
								{{ link.name }}
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { logEvent } from '@libs/analytics';
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
			required: true,
		},
		locationData: {
			type: Object,
			required: true,
		},
	},
	methods: {
		onClickLink(linkIndex) {
			logEvent('click_location_link', {
				location_name: this.locationData.title,
				location_sn: this.index + 1,
				link_index: linkIndex,
				link_name: this.locationData.links[linkIndex].name,
			});
		},
		onCarouselIndexChange(imageIndex) {
			logEvent('carousel_image_view', {
				location_name: this.locationData.title,
				location_sn: this.index + 1,
				image_sn: imageIndex + 1,
				image_total: this.locationData.images.length,
				position: 'detail',
			});
		},
	},
};
</script>
