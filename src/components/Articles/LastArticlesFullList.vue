<template>
    <section id="last-articles">
        <div class="articles-container">
            <article-tile v-for="article in articles" :id="article.id" :key="article.id"></article-tile>
        </div>
        <!-- <button v-on:click="more">Voir plus</button> -->
    </section>
</template>

<script>
import ArticleTile from './ArticleTile.vue';

export default {
    name: 'last-articles-full-list',
    methods: {
        more: function() {
            console.log('more');
        }
    },
    components: {
        ArticleTile
    },
    computed: {
        articles: function() {
            return this.$root.$store.state.postList.slice(1);
        }
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
    max-width: 1200px;
    margin: 0 auto;
}

@media (min-width: 1225px) {
    div.articles-container {
        padding-top: 70px !important;
    }
}

button {
    background-color: #396eb8;
    border: 0px;
    color: #fafafa;
    padding: 8px 60px;
    text-transform: uppercase;
    font-size: 17px;
    font-weight: 700;
    border-radius: 5px;
    box-shadow: 0 2px 2px 0 rgba(40, 40, 40, 0.5);
    margin-bottom: 35px;
    transition: all .1s;
}

button:hover {
    box-shadow: 0 4px 6px 0px rgba(40, 40, 40, 0.5);
    cursor: pointer;
}
</style>
