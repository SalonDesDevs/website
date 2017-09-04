<template>
    <div id="articles">
        <articles-header></articles-header>
        <last-articles-full-list></last-articles-full-list>
        <footer-section></footer-section>
        <transition name="fadeload">
            <loader v-if="loading"></loader>
        </transition>
    </div>
</template>

<script>
/*globals store: true */
import ArticlesHeader from './Header/Articles/Articles.vue';
import FooterSection from './Footer/FooterSection.vue';
import LastArticlesFullList from './Articles/LastArticlesFullList.vue';
import Loader from './Loader/Loader.vue';

export default {
    name: 'articles',
    components: {
        ArticlesHeader,
        FooterSection,
        LastArticlesFullList,
        Loader
    },
    mounted() {
        fetch('https://salondesdevs.io/api/posts/list')
            .then(data => data.json())
            .then(posts => {
                this.$root.$store.commit('setPostList', {postList: posts});
            }).catch(console.log);
    },
    computed: {
        loading: function() {
            return this.$root.$store.state.postList.length === 0;
        },
        firstArticleString: function () {
            return JSON.stringify(this.posts[0]);
        },
        postsString: function() {
            return JSON.stringify(this.posts.slice(1));
        }
    },
    head: {
        title: {
            inner: 'Derniers Articles - Salon des développeurs'
        },
        meta: [
            { property: 'og:title', content: 'Derniers Articles - Salon des développeurs' },
            { property: 'og:url', content: window.location },
            { name: 'twitter:title', content: 'Derniers Articles - Salon des développeurs' },
            { name: 'twitter:description', content: 'Articles écrits par la communauté, sur tout et n\'importe quoi !' },
            { id: 'meta-desc', name: 'description', content: 'Articles écrits par la communauté, sur tout et n\'importe quoi !' }
        ]
    }
};
</script>

<style>
.fadeload-leave {
    opacity: 1;
}

.fadeload-leave-active {
    transition: opacity .5s;
}

.fadeload-leave-to {
    opacity: 0;
}
</style>
