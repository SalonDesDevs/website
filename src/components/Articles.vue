<template>
    <div id="articles">
        <articles-header></articles-header>
        <loader></loader>
        <last-articles-full-list></last-articles-full-list>
        <footer-section></footer-section>
    </div>
</template>

<script>
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

</style>
