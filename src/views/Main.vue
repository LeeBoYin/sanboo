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
					:index="index"
					:location-data="locationData"
					@click.native="onClickListItem(index)"
				/>
			</LocationList>
		</div>
		<LocationBlock
			ref="locationBlock"
			v-for="(locationData, index) in mapData.locations"
			:key="index"
			:index="index"
			:location-data="locationData"
			@click:more="showLocationDetail(index)"
		/>
		<Footer />
		<Modal
			:is-open="isOpenModal"
			@close="isOpenModal = false"
		>
			<template #body>
				<LocationDetail
					v-if="locationDetailData"
					:key="locationDetailIndex"
					:location-data="locationDetailData"
					:index="locationDetailIndex"
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
import { setMapId, logEvent } from '@libs/analytics';

// components
import FabButton from '@components/FabButton';
import Footer from '@components/Footer';
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
		Footer,
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
	created() {
		setMapId(this.id);
	},
	mounted() {
		window.addEventListener('scroll', throttleByAnimationFrame(this.checkIsShowMenuButton));
		window.addEventListener('resize', throttleByAnimationFrame(this.checkIsShowMenuButton));
		logEvent('main_load');
	},
	methods: {
		checkIsShowMenuButton() {
			this.isShowMenuButton = window.scrollY > this.$refs.locationBlock[0].$el.offsetTop;
		},
		onClickStart() {
			scrollTopAnimate(this.$refs.startPoint.offsetTop, 1000);
		},
		onClickListItem(index) {
			logEvent('click_list_item', {
				location_name: this.mapData.locations[index].title,
				location_sn: index + 1,
			});
			this.showLocationDetail(index);
		},
		showLocationDetail(index) {
			this.isOpenModal = true;
			this.locationDetailIndex = index;
			this.locationDetailData = this.mapData.locations[index];
			logEvent('location_detail_view', {
				location_name: this.locationDetailData.title,
				location_sn: this.locationDetailIndex + 1,
			});
		},
		onClickShowMenu() {
			logEvent('click_show_menu');
			scrollTopAnimate(this.$refs.routeMap.$el.offsetTop, 1500);
		},
	},
};
</script>
