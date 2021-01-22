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
			<LTileLayer url="https://b.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png " />
			<LMarker
				v-if="userCoordinate"
				:key="`${ userCoordinate.lat },${ userCoordinate.lng }`"
				:lat-lng="userCoordinate"
			>
				<LIcon
					:icon-size="[18, 18]"
					:icon-anchor="[9, 9]"
				>
					<CurrentLocationMarker />
				</LIcon>
			</LMarker>
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
		<button
			v-if="isShowBackButton"
			class="route-map__back-btn btn btn bg-white text-primary-dark"
			@click="backToInitialPosition"
		>
			返回初始位置
		</button>
		<button
			v-if="isShowUserLocationButton"
			class="route-map__navigate-btn btn btn-lg btn-primary-dark"
			@click="goToUserLocation"
		>
			<img src="/static/icon/navigate.svg">
		</button>
	</div>
</template>

<script>
import { getCurrentCoordinate } from '@libs/geolocation';
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
import CurrentLocationMarker from '@components/CurrentLocationMarker';
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
		CurrentLocationMarker,
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
			userCoordinate: null,
			isFetchingUserCoordinate: false,
			isShowUserLocationButton: true,
			isShowBackButton: false,
			geoLocationPermission: null,
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
			this.bindMapEvents();
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
		bindMapEvents() {
			this.mapObject.on('moveend', () => {
				this.isShowBackButton = true;
				this.isShowUserLocationButton = true;
			});
		},
		backToInitialPosition() {
			this.mapObject.once('moveend', () => {
				this.isShowBackButton = false;
			});
			this.mapObject.setView(this.mapData.coordinate, this.mapData.zoom);
		},
		async goToUserLocation() {
			if(this.isFetchingUserCoordinate) {
				return;
			}
			await this.fetchUserCoordinate();
			if(!this.userCoordinate) {
				return;
			}
			this.mapObject.once('moveend', () => {
				this.isShowUserLocationButton = false;
			});
			this.mapObject.setView(this.userCoordinate);
		},
		async fetchUserCoordinate() {
			this.isFetchingUserCoordinate = true;
			const currentCoordinate = await getCurrentCoordinate();
			this.userCoordinate = {
				lat: currentCoordinate.latitude,
				lng: currentCoordinate.longitude,
			};
			this.isFetchingUserCoordinate = false;
			if(!this.userCoordinate) {
				this.geoLocationPermission = 'denied';
			}
		},
	},
};
</script>
