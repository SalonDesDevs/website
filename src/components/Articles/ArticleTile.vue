<template>
    <div class="tile">
        <router-link :to="article.uri">
            <div class="article-img" >
                <div class="shade" :style="shadeStyle"></div>
                <img class="bg" src="../../img/article-bg.png" />
                <img ref="logo" class="logo" :src="logoSrc" :alt="article.tags[0]">
            </div>
            <h3> {{ article.title }}</h3>
        </router-link>
        <p> {{ article.author }} - {{ date }} </p>
    </div>
</template>

<script>
import * as Vibrant from 'node-vibrant';
export default {
    name: 'article-tile',
    props: ['id'],
    data() {
        return {
            logoColour: '#fff',
        };
    },
    computed: {
        article: function() {
            return this.$store.state.postList.filter(post => post.id === this.id)[0];
        },
        date: function() {
            return new Date(this.article.date).toISOString().substring(0, 10);
        },
        logoSrc: function() {
            return 'https://salondesdevs.io/api/icon/by-language/' + this.article.tags[0];
        },
        shadeStyle: function() {
            return {
                background: 'linear-gradient(to bottom, transparent 40%, ' + this.logoColour + ' 500%)'
            };
        }
    },
    mounted() {
        this.$refs.logo.addEventListener('load', () => {
            const vibrant = new Vibrant(this.$refs.logo.getAttribute('src'));
            vibrant.getPalette((err, palette) => {
                if(err) return console.log(err);
                this.logoColour = palette.Vibrant.getHex();
            });
        });
    }
};
</script>

<style scoped>
div.article-img {
    position: relative;
    border-radius: 5px;
    box-shadow: 0 2px 2px 0 rgba(42, 42, 42, 0.3);
    transition: all .1s ease-in-out;
    max-width: 500px;
    width: 100%;
    overflow: hidden;
}

div.shade {
    display: block;
    position: absolute;
    height: 100%;
    width: 100%;
}

img.bg {
    display: block;
    width: 100%;
    height: 100%;
    transition: all .1s ease-in-out;
}

img.logo {
    position: absolute;
    top: 10px;
    bottom: 10px;
    right: 10px;
    height: calc(100% - 20px);
    transition: all .1s ease-in-out;
}

h3, p {
    color: #3a3a3a;
    padding-left: 10px;
    margin-bottom: 0;
}

h3 {
    margin-top: 10px;
    font-size: 18px;
    text-transform: capitalize;
}

a {
    text-decoration: none;
}

a:hover > div.article-img {
    border-radius: 7px;
    transform: scale(1.01);
    box-shadow: 0 2px 8px 0px rgba(42, 42, 42, 0.3);
}

a:hover > div.article-img img.logo {
    /* transform: scale(1.02); */
}

p {
    font-weight: lighter;
    margin-top: 5px;
    font-size: 13px;
    color: #5a5a5a;
    text-transform: uppercase;
}

div.tile {
    display: inline-block;
    text-align: left;
    margin: auto 50px 30px;
}

@media (max-width: 600px) {
    div.tile {
        margin: auto !important;
        margin-left: 10px !important;
        margin-right: 10px !important;
    }
}
</style>
