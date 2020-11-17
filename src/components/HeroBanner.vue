<template>
	<div
		class="hero-banner"
	>
		<div
			class="hero-banner__image"
			:style="imageStyle"
		></div>
		<div class="hero-banner__content">
			<slot></slot>
		</div>
		<StartCta
			v-on="$listeners"
		/>
	</div>
</template>

<script>
import { throttleByAnimationFrame } from '@libs/uiUtils';
import StartCta from '@components/StartCta';
export default {
	components: {
		StartCta,
	},
	props: {
		imageUrl: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			bgY: 0,
			scale: 1,
		};
	},
	computed: {
		imageStyle() {
			const scale = this.scale > 1 ? `scale(${ this.scale })` : '';
			const translate = `translate(0, ${ this.bgY }px)`;
			return {
				'transform': `${ scale } ${ translate }`,
				'background-image': `url(${ this.imageUrl })`,
			}
		},
	},
	mounted() {
		window.addEventListener('scroll', throttleByAnimationFrame(this.updatePosition));
		window.addEventListener('resize', throttleByAnimationFrame(this.updatePosition));
	},
	methods: {
		updatePosition() {
			this.bgY = window.scrollY > 0 ? window.scrollY / 2 : 0;
			this.scale = window.scrollY < 0 ? 1 - (window.scrollY * 0.002) : 1;
		},
	},
};
</script>
