<template>
	<div class="map-info">
		<h1 class="mb-3">
			{{ mapData.title }}
		</h1>
		<p>
			{{mapData.description }}
		</p>
		<div v-if="mapData.links.length" class="mt-5">
			<h4>相關連結</h4>
			<ul>
				<li v-for="(link, index) in mapData.links">
					<a :href="link.url" target="_blank" rel="noopener">{{ link.name }}</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		mapData: {
			type: Object,
			required: true,
		},
	},
};
</script>
