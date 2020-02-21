<template>
    <div id="articles">
        <article-header v-if="!loading" :article-id="uri"></article-header>
        <article-content v-if="!loading" :article-id="uri"></article-content>
        <author-section></author-section>
        <footer-section></footer-section>
        <transition name="fadeload">
            <loader v-if="loading"></loader>
        </transition>
    </div>
</template>

<script>
import ArticleHeader from './Header/Article/Article.vue';
import ArticleContent from './Article/ArticleContent.vue';
import AuthorSection from './Article/AuthorSection.vue';
import FooterSection from './Footer/FooterSection.vue';
import Loader from './Loader/Loader.vue';

export default {
    name: 'article',
    components: {
        ArticleHeader,
        FooterSection,
        ArticleContent,
        AuthorSection,
        Loader
    },
    data() {
        return {
            uri: this.$route.params.uri,
        };
    },
    mounted() {
        if(!this.$store.getters.hasContentBeenFetched(this.uri))
            this.$store.dispatch('fetchArticle', this);
    },
    computed: {
        loading: function() {
            console.log('loading?');
            return !this.$store.getters.hasContentBeenFetched(this.uri);
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
