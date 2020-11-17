<template>
	<div class="map-info">
		<h1 class="mb-3">
			{{ mapData.title }}
		</h1>
		<p>
			{{mapData.description }}
		</p>
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
