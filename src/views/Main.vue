<template>
	<div>
		<HeroBanner
			:image-url="mapData.banner"
			@start="onClickStart"
		>
			<img :src="mapData.logo" alt="logo">
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
			@click:location="showLocationDetail"
		/>
		<div class="container pt-3 pb-5">
			<LocationList>
				<LocationListItem
					v-for="(locationData, index) in mapData.locations"
					:key="index"
					:index="index + 1"
					:location-data="locationData"
					@click.native="showLocationDetail(index)"
				/>
			</LocationList>
		</div>
		<LocationBlock
			ref="locationBlock"
			v-for="(locationData, index) in mapData.locations"
			:key="index"
			:index="index + 1"
			:location-data="locationData"
			@click:more="showLocationDetail(index)"
		/>
		<div class="text-center text-xs text-muted p-3">
			Made with ❤️ by BY & PZ
		</div>
		<Modal
			:is-open="isOpenModal"
			@close="isOpenModal = false"
		>
			<template #body>
				<LocationDetail
					v-if="locationDetailData"
					:key="locationDetailIndex"
					:location-data="locationDetailData"
					:index="locationDetailIndex + 1"
				/>
			</template>
		</Modal>
		<FabButton
			v-if="isShowMenuButton"
			class="btn btn-primary"
			@click.native="onClickShowMenu"
		>
			<img src="/static/icon/menu.svg">
		</FabButton>
	</div>
</template>

<script>
import mapsData from '@/data/maps';
import { scrollTopAnimate, throttleByAnimationFrame } from '@libs/uiUtils';
// components
import FabButton from '@components/FabButton';
import HeroBanner from '@components/HeroBanner';
import LocationBlock from '@components/LocationBlock';
import LocationDetail from '@components/LocationDetail';
import LocationList from '@components/LocationList';
import LocationListItem from '@components/LocationListItem';
import MapInfo from '@components/MapInfo';
import Modal from '@components/Modal';
import RouteMap from '@components/RouteMap';

export default {
	components: {
		FabButton,
		HeroBanner,
		LocationBlock,
		LocationDetail,
		LocationList,
		LocationListItem,
		MapInfo,
		Modal,
		RouteMap,
	},
	props: {
		id: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			isOpenModal: false,
			isShowMenuButton: false,
			locationDetailData: null,
			locationDetailIndex: null,
		};
	},
	computed: {
		mapData() {
			return mapsData[this.id];
		},
	},
	mounted() {
		window.addEventListener('scroll', throttleByAnimationFrame(this.checkIsShowMenuButton));
		window.addEventListener('resize', throttleByAnimationFrame(this.checkIsShowMenuButton));
	},
	methods: {
		checkIsShowMenuButton() {
			this.isShowMenuButton = window.scrollY > this.$refs.locationBlock[0].$el.offsetTop;
		},
		onClickStart() {
			scrollTopAnimate(this.$refs.startPoint.offsetTop, 1000);
		},
		showLocationDetail(index) {
			this.isOpenModal = true;
			this.locationDetailIndex = index;
			this.locationDetailData = this.mapData.locations[index];
		},
		onClickShowMenu() {
			scrollTopAnimate(this.$refs.routeMap.$el.offsetTop, 1500);
		},
	},
};
</script>
