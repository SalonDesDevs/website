<template>
    <div id="articles">
        <articles-header></articles-header>
        <last-articles-full-list></last-articles-full-list>
        <footer-section></footer-section>
    </div>
</template>

<script>
import ArticlesHeader from './Header/Articles/Articles.vue';
import FooterSection from './Footer/FooterSection.vue';
import LastArticlesFullList from './Articles/LastArticlesFullList.vue';

export default {
    name: 'articles',
    components: {
        ArticlesHeader,
        FooterSection,
        LastArticlesFullList
    }
};
</script>

<style>

</style>
