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
import articles from '../../articles.json'
import ArticleTile from './ArticleTile.vue'
export default {
    name: 'last-articles',
    data () {
        return {articles};
    },
    components: {
        ArticleTile
    }
}
</script>

<style scoped>

h2, a {
    font-weight: normal;
    color: #3a3a3a;
    margin-top: 0;
    font-size: 28px;
    margin-bottom: 70px;
}

a, a:hover, a:visited {
    font-size: 18px;
    color: #555;
    margin-top: 30px;
    margin-bottom: 40px;
    display: block;
}

section {
    text-align: center;
}

div.articles-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
</style>
