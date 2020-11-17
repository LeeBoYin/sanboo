<template>
	<div>
		<HeroBanner
			:image-url="mapData.banner"
			@start="onClickStart"
		>
			<img :src="mapData.logo">
		</HeroBanner>
		<div ref="startPoint"></div>
		<div class="container py-5">
			<MapInfo
				ref="mapInfo"
				:map-data="mapData"
			/>
		</div>
		<RouteMap
			ref="routeMap"
			:map-data="mapData"
			@click:location="onClickLocation"
		/>
		<div class="container pt-3 pb-5">
			<LocationList>
				<LocationListItem
					v-for="(locationData, index) in mapData.locations"
					:key="index"
					:index="index + 1"
					:location-data="locationData"
					@click.native="onClickLocation(index)"
				/>
			</LocationList>
		</div>
		<LocationBlock
			ref="locationBlock"
			v-for="(locationData, index) in mapData.locations"
			:key="index"
			:index="index + 1"
			:location-data="locationData"
		/>
	</div>
</template>

<script>
import mapsData from '@/data/maps';
import { scrollTopAnimate } from '@libs/uiUtils';
// components
import HeroBanner from '@components/HeroBanner';
import LocationBlock from '@components/LocationBlock';
import LocationList from '@components/LocationList';
import LocationListItem from '@components/LocationListItem';
import MapInfo from '@components/MapInfo';
import RouteMap from '@components/RouteMap';

export default {
	components: {
		HeroBanner,
		LocationBlock,
		LocationList,
		LocationListItem,
		MapInfo,
		RouteMap,
	},
	props: {
		id: {
			type: String,
			required: true,
		},
	},
	computed: {
		mapData() {
			return mapsData[this.id];
		},
	},
	methods: {
		onClickStart() {
			scrollTopAnimate(this.$refs.startPoint.offsetTop, 1000);
		},
		onClickLocation(index) {
			scrollTopAnimate(this.$refs.locationBlock[index].$el.offsetTop, 1000);
		},
	},
};
</script>
