// style
import '@style/main.scss';

// leaflet
import '@/vendors/leaflet';

// vue
import Vue from 'vue';
import router from '@/router';
// import store from '@/store';

new Vue({
	el: '#app',
	router,
});
