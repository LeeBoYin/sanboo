<template>
	<div class="route-map">
		<LMap
			ref="map"
			style="height: 100%; width: 100%"
			:zoom="mapData.zoom"
			:center="mapData.coordinate"
			:options="mapOptions"
			@ready="onMapReady()"
		>
			<LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
			<LMarker
				v-for="(locationData, index) in mapData.locations"
				:key="index"
				:lat-lng="locationData.coordinate"
				:options="{
					riseOnHover: true,
				}"
			>
				<LIcon
					:icon-size="[28, 30]"
					:icon-anchor="[14, 30]"
					:popup-anchor="[0, -25]"
				>
					<MapMarker class="route-map__marker">{{ index + 1 }}</MapMarker>
				</LIcon>
				<LPopup
					:options="{
						closeButton: false,
					}"
					class="route-map__popup"
				>
					<LocationPopup
						:location-data="locationData"
						@click.native="onClickLocation(index)"
					/>
				</LPopup>
			</LMarker>
		</LMap>
	</div>
</template>

<script>
import {
	LIcon,
	LMap,
	LMarker,
	LPopup,
	LTileLayer,
	LTooltip,
} from 'vue2-leaflet';
import LocationPopup from '@components/LocationPopup';
import MapMarker from '@components/MapMarker';
export default {
	components: {
		LIcon,
		LMap,
		LMarker,
		LPopup,
		LTileLayer,
		LTooltip,
		LocationPopup,
		MapMarker,
	},
	props: {
		mapData: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			mapObject: null,
			mapOptions: {
				dragging: !L.Browser.mobile,
				scrollWheelZoom: false,
			},
		};
	},
	mounted() {
		this.$el.addEventListener('touchmove', this.onMapTouch);
	},
	beforeDestroy() {
		this.$el.removeEventListener('touchmove', this.onMapTouch);
	},
	methods: {
		onMapReady() {
			this.mapObject = this.$refs.map.mapObject;
			window.mapObject = this.mapObject;
		},
		onMapTouch(e) {
			if(e.touches.length > 1) {
				// pinch to zoom and pan on map
				e.stopPropagation();
				e.preventDefault();
			}
		},
		onClickLocation(index) {
			this.$emit('click:location', index);
		},
	},
};
</script>
