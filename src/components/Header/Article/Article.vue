<template>
    <section class="top-container" id="header" :style="gradient">
        <particle></particle>
        <navigation></navigation>
        <div class="header-content">
            <div class="title-container">
                <div class="title">
                    <h1>{{ article.title }}</h1>
                    <h2>{{ article.author + ' - ' + date}}</h2>
                </div>
            </div>
            <div class="logo-container">
                <img ref="logo" :src="logoSrc" alt="python" crossOrigin="anonymous">
            </div>
        </div>
        <separator></separator>
    </section>
</template>

<script>
import Navigation from '../Navigation/Navigation.vue';
import Particle from '../Particle.vue';
import Separator from '../Homepage/Separator.vue';
import * as Vibrant from 'node-vibrant';

export default {
    name: 'article-header',
    props: ['articleId'],
    components: {
        Navigation,
        Particle,
        Separator
    },
    mounted() {
        this.$refs.logo.addEventListener('load', () => {
            const vibrant = new Vibrant(this.$refs.logo.getAttribute('src'));
            vibrant.getPalette((err, palette) => {
                if(err) return console.log(err);
                this.gradientColor = palette.Vibrant.getHex();
            });
        });
    },
    data() {
        return {
            article: this.$store.state.postContent[this.articleId],
            gradientColor: '#ffffff'
        };
    },
    computed: {
        logoSrc: function() {
            return 'https://salondesdevs.io/api/icon/by-language/' + this.article.tags[0];
        },
        gradient: function() {
            return {
                background: 'radial-gradient(100% 400px at bottom, ' + this.gradientColor + ' -200%, transparent 95%)',
            };
        },
        date: function() {
            return new Date(this.article.date).toISOString().substr(0, 10);
        }
    }
};
</script>

<style>
section.top-container {
    position: relative;
    overflow: hidden;
    transition: all 1s ease-in;
}
div.header-content {
    padding-top: 60px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    padding-bottom: 100px;
    color: #fafafa;
}

@media (max-width: 1140px) {
    div.header-content {
        flex-direction: column-reverse !important;
    }
    div.title {
        position: relative !important;
        width: fit-content;
        margin: 0 auto;
    }
    h1, h2 {
        text-align: center;
    }
}

@media (max-width: 500px) {
    .logo-container > img {
        width: 100% !important;
        height: 500px !important;
    }

    div.logo-container {
        height: fit-content !important;
    }
}

div.title-container {
    position: relative;
    flex: 1 0 50%;
}

div.logo-container {
    flex: 1 0 50%;
}

.logo-container > img {
    height: 500px;
    width: 500px;
    display: block;
    margin: 0 auto;
}

h1 {
    font-size: 32px;
    margin: 0;
    margin-top: 5px;
    font-weight: 800;
    text-transform: uppercase;
}

h2 {
    font-size: 18px;
    margin-top: 8px;
    font-weight: 400;
    text-transform: uppercase;
}

div.title {
    margin-top: 125px;
    position: absolute;
    right: 0;
}
</style>
