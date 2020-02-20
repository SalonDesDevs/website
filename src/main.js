import Vue from 'vue';
import VueRouter from 'vue-router';
import VueHead from 'vue-head';
import Vuex from 'vuex';

Vue.use(VueRouter);
Vue.use(VueHead);
Vue.use(Vuex);

import App from './App.vue';
import Homepage from './components/Homepage.vue';

const routes = [
    {
        path: '/',
        component: Homepage
    },
    {
        path: '/articles',
        component: () => import('./components/Articles.vue')
    },
    {
        name: 'article',
        path: '/article/:uri',
        component: () => import('./components/Article.vue')
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
        postList: [],
        postContent: {}
    },
    mutations: {
        setPostList(state, {postList}) {
            state.postList = postList;
        },
        setPostContent(state, {key_id, post}) {
            console.log('set post content', key_id, post);
            Vue.set(state.postContent, key_id, post);
        }
    },
    getters: {
        isPostListEmpty(state) {
            return !state.postList.length;
        },
        hasContentBeenFetched: (state) => (id) => (state.postContent[id] !== undefined)
    },
    actions: {
        fetchArticle ({commit}, {uri}) {
            return import('../articles')
                .then(({ findByUri }) => findByUri(uri))
                .then((article) => {
                    commit('setPostContent', {key_id: uri, post: article});
                });
        },
        fetchArticles ({commit}) {
            return import('../articles').then(({ articles }) => {
                const sorted = articles.sort((a, b) => a.updateDate - b.updateDate);

                commit('setPostList', {postList: sorted});
            });
        }
    }
});

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
