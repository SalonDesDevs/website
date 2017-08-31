<template>
    <section id="last-articles">
        <h2>Derniers articles</h2>
        <div class="articles-container">
            <article-tile v-for="article in articles" v-bind="article" :key="article.title"></article-tile>
        </div>
        <a href="/articles">Voir plus</a>
    </section>
</template>

<script>
import articles from '../../articles.json';
import ArticleTile from './ArticleTile.vue';
export default {
    name: 'last-articles',
    data () {
        return {articles: articles.slice(0, 2)};
    },
    components: {
        ArticleTile
    }
};
</script>

<style scoped>

h2, a {
    font-weight: normal;
    color: #3a3a3a;
    margin-top: 0;
    font-size: 28px;
    padding-bottom: 70px;
    margin-bottom: 0;
}

a, a:hover, a:visited {
    font-size: 18px;
    color: #555;
    margin-top: 30px;
    padding-bottom: 40px;
    display: block;
}

section {
    text-align: center;
    background-color: #fafafa;
}

div.articles-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
</style>
