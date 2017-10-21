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
import Article from './components/Article.vue';

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
        path: '/article/:id/:title',
        component: Article
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
        fetchArticle ({commit}, {id, title}) {
            fetch('https://salondesdevs.io/api/post/content/by-uri/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id_suffix: id,
                    sanitized_title: title
                })
            })
                .then(data => data.json())
                .then(post => {
                    commit('setPostContent', {key_id: id, post});
                }).catch(console.trace);
        },
        fetchArticles ({commit}) {
            fetch('https://salondesdevs.io/api/posts/list')
                .then(data => data.json())
                .then(posts => {
                    commit('setPostList', {postList: posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())});
                }).catch(console.log);
        }
    }
});

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
