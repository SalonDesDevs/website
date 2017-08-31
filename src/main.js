import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

Vue.use(VueRouter);

import Homepage from './components/Homepage.vue';
import Articles from './components/Articles.vue'

const routes = [
    {
        path: '/',
        component: Homepage
    },
    {
        path: '/articles',
        component: Articles
    },
    {
        path: '*',
        redirect: '/'
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

//eslint-disable-next-line no-unused-vars
const app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
