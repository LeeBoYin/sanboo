// style
import '@style/main.scss';

// leaflet
import '@/vendors/leaflet';

// vue
import Vue from 'vue';
import router from '@/router';
// import store from '@/store';

// firebase
import firebaseApp from 'firebase/app';
import 'firebase/analytics';
import firebaseConfig from '../firebase.config';
firebaseApp.initializeApp(firebaseConfig);
firebaseApp.analytics();

import VueLazyload from 'vue-lazyload';

Vue.use(VueLazyload, {
	preLoad: 2,
});

new Vue({
	el: '#app',
	router,
});
