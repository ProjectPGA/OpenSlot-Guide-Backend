import Vue from 'vue';
import Vuesax from 'vuesax';

import App from './App.vue';
import router from './router';
import { store } from './store';
import Router from 'vue-router';

import 'boxicons';
import 'vuesax/dist/vuesax.css';
import './styles/main.scss';

import VueMq from 'vue-mq';
import axios from 'axios';
import i18n from '@/localization/localization';

import { Device } from '@/models/utils/Device';

Vue.config.productionTip = false;

axios.defaults.headers.post['Content-Type'] = 'application/json';

Vue.use(Router);
Vue.use(Vuesax);
Vue.use(VueMq, {
    breakpoints: {
        [Device.sm]: 769,
        [Device.md]: 1024,
        [Device.lg]: 1216,
        [Device.xl]: 1408,
    },
    defaultBreakpoint: 'sm',
});

new Vue({
    router,
    store,
    i18n,
    render: h => h(App),
}).$mount('#app');
