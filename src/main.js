import Vue from 'vue';
import VueRouter from 'vue-router';
import VueHead from 'vue-head';

Vue.use(VueRouter);
Vue.use(VueHead);

import App from './App.vue';
import Homepage from './components/Homepage.vue';
import Articles from './components/Articles.vue';

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
    routes,
    scrollBehavior: () => ({x: 0, y: 0})
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
