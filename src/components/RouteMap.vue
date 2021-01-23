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
				v-if="userCoordinate"
				ref="currentLocationMarker"
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
		>返回初始位置</button>
		<button
			v-if="geoLocationPermission !== 'denied' && isShowUserLocationButton"
			class="route-map__navigate-btn btn btn-lg btn-primary-dark"
			:class="{
				'route-map__navigate-btn--loading': isFetchingUserCoordinate,
			}"
			@click="goToUserLocation"
		>
			<img src="/static/icon/navigate.svg">
		</button>
	</div>
</template>

<script>
import { getCurrentCoordinate, checkGeolocationPermission, watchCurrentCoordinate } from '@libs/geolocation';
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
			watchPositionId: null,
		};
	},
	watch: {
		userCoordinate(newVal, oldVal) {
			// set initial coordinate
			if(newVal && !oldVal) {
				this.watchPositionId = watchCurrentCoordinate((currentCoordinate) => {
					this.userCoordinate = {
						lat: currentCoordinate.latitude,
						lng: currentCoordinate.longitude,
					};
				});
			}
			// update new coordinate
			if(newVal && oldVal) {
				this.$refs.currentLocationMarker.mapObject.setLatLng(this.userCoordinate);
				// follow user location
				if(!this.isShowUserLocationButton) {
					this.mapObject.once('moveend', () => {
						this.isShowUserLocationButton = false;
					});
					this.mapObject.setView(this.userCoordinate, this.mapObject.getZoom());
				}
			}
		},
	},
	mounted() {
		this.$el.addEventListener('touchmove', this.onMapTouch);
	},
	beforeDestroy() {
		this.$el.removeEventListener('touchmove', this.onMapTouch);
	},
	methods: {
		async onMapReady() {
			this.mapObject = this.$refs.map.mapObject;
			this.bindMapEvents();
			window.mapObject = this.mapObject;

			this.geoLocationPermission = await checkGeolocationPermission();
			if(this.geoLocationPermission === 'granted') {
				this.fetchUserCoordinate();
			}
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
			if(!this.userCoordinate) {
				await this.fetchUserCoordinate();
			}
			if(!this.userCoordinate) {
				return;
			}
			// hide UserLocationButton on map move end
			this.mapObject.once('moveend', () => {
				this.isShowUserLocationButton = false;
			});
			this.mapObject.setView(this.userCoordinate);
		},
		async fetchUserCoordinate() {
			this.isFetchingUserCoordinate = true;
			const currentCoordinate = await getCurrentCoordinate();
			this.isFetchingUserCoordinate = false;
			if(!currentCoordinate) {
				this.geoLocationPermission = 'denied';
				return;
			}
			this.userCoordinate = {
				lat: currentCoordinate.latitude,
				lng: currentCoordinate.longitude,
			};
		},
	},
};
</script>
