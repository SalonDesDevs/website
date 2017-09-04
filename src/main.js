import Vue from 'vue';
import VueRouter from 'vue-router';
import VueHead from 'vue-head';
import Vuex from 'vuex';

Vue.use(VueRouter);
Vue.use(VueHead);
Vue.use(Vuex);

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
    scrollBehavior: () => ({
        x: 0,
        y: 0
    })
});
const store = new Vuex.Store({
    state: {
        postList: []
    },
    mutations: {
        setPostList(state, {postList}) {
            state.postList = postList;
        }
    }
});

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
