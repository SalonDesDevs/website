<template>
    <section id="last-articles">
        <h2>Derniers articles</h2>
        <svg v-if="loading" class="navigation-logo" version="1.1" id="logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 300 500" enable-background="new 0 0 300 500" xml:space="preserve">
            <g>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M67.777,371.023c11.307-14.219,20.198-25.402,33.521-42.16
            c-18.791,0-31.167,0.422-43.507-0.087c-27.218-1.113-41.142-14.024-41.422-40.845c-0.638-60.656-0.501-121.319-0.043-181.976
            c0.188-25.385,14.507-38.872,39.495-40.178c16.498-0.856,33.162-1.295,49.602-0.027c35.151,2.715,67.736,1.188,86.855-35.487
            c4.77-9.146,13.995-11.166,24.462-7.638c0.659,10.487-8.254,15.414-13.615,21.896c-39.816,48.162-80.304,95.767-120.066,143.972
            c-24.992,30.303-17.834,56.386,18.409,70.414c35.852,13.877,44.107,43.628,20.617,74.311
            C92.938,371.289,92.938,371.289,67.777,371.023z"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M232.024,140.382c-10.152,13.615-19.173,25.713-31.842,42.712
            c17.539,0,29.955-0.465,42.32,0.095c27.104,1.243,40.832,14.243,41.107,41.119c0.615,59.718,0.572,119.458,0.07,179.18
            c-0.24,28.782-13.59,42.058-42.225,42.856c-24.785,0.696-49.72,1.585-74.394-0.254c-21.606-1.606-36.553,5.354-48.726,23.07
            c-7.875,11.461-15.534,26.663-38.121,18.698c18.064-21.723,35.353-42.582,52.723-63.382c28.854-34.554,58.22-68.688,86.482-103.716
            c22.082-27.367,13.93-54.567-18.913-67.296c-39.439-15.286-47.789-44.676-19.467-76.981
            C194.114,161.571,200.8,135.126,232.024,140.382z"></path>
            </g>
        </svg>
        <div class="articles-container">
            <article-tile v-for="article in articles" :id="article.id" :key="article.title"></article-tile>
        </div>
        <router-link to="/articles">Voir plus</router-link>
    </section>
</template>

<script>
import ArticleTile from './ArticleTile.vue';
export default {
    name: 'last-articles',
    components: {
        ArticleTile
    },
    computed: {
        loading: function() {
            return this.$root.$store.state.postList.length === 0;
        },
        articles: function() {
            return this.$root.$store.state.postList.slice(0,2);
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
}

@keyframes heartbeat {
    0% {
        transform: rotate(0deg);
    }
    50% {
        transform: rotate(180deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

svg {
    display: block;
    fill: #396eb8;
    height: 150px;
    margin: 0 auto;
    animation: heartbeat 2s infinite cubic-bezier(.215,.61,.355,1);
    margin-bottom: 30px;
}
</style>
