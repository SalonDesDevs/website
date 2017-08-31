<template>
    <section class="top-container" id="header">
        <particle></particle>
        <navigation></navigation>
        <div class="header-content">
            <div class="big-preview-container">
                <img :src="picture" :alt="title" />
            </div>
            <div class="article-title-container">
                <p class="last-article">Dernier article</p>
                <p class="last-article-title">{{ title }}</p>
                <p class="last-article-author">{{ author + ' - ' + date }}</p>
            </div>
        </div>
        <div class="separator-container">
            <separator></separator>
        </div>
    </section>
</template>

<script>
import Particle from '../Particle.vue';
import Navigation from '../Navigation/Navigation.vue';
import Separator from '../Homepage/Separator.vue';
import articles from '../../../articles.json';

export default {
    name: 'articles-header',
    components: {
        Particle,
        Navigation,
        Separator
    },
    data () {
        return articles[0];
    }
};
</script>

<style scoped>
section.top-container {
    background-color: transparent;
    position: relative;
    overflow: hidden;
    color: #fafafa
}
div.header-content {
    padding-top: 100px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    padding-bottom: 0;
}

@media (max-width: 1225px) {
    div.article-title-container {
        min-width: 600px !important;
    }
    div.big-preview-container > img {
        float: unset !important;
        margin: 0 auto;
    }
}

@media (max-width: 600px) {
    div.article-title-container {
        min-width: auto !important;
        width: 100%;
        padding-left: 35px;
        padding-right: 35px;
    }
}

div.big-preview-container {
    flex: 1 0 55%;
}

div.article-title-container {
    flex: 1 0 45%;
    min-width: 550px;
}

p.last-article {
    color: #396eb8;
    font-size: 35px;
    font-weight: 900;
    font-style: italic;
    margin-bottom: 0;
}

p.last-article-title {
    font-size: 36px;
    margin: 0;
    margin-top: 5px;
    font-weight: 700;
    text-transform: uppercase;
}

p.last-article-author {
    font-size: 18px;
    margin-top: 8px;
    text-transform: uppercase;
}

img {
    width: 600px;
    display: block;
    float: right;
    margin-right: 40px;
    border-radius: 8px;
}

div.separator-container {
    position: relative;
    margin-top: -120px;
    z-index: -1;
    height: 125px;
}

div.container {
    height: 125px !important;
}
</style>
