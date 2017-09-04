<template>
    <div id="homepage">
        <homepage-header></homepage-header>
        <last-articles></last-articles>
        <discord-presentation></discord-presentation>
        <div class="placeholder-twitter"></div>
        <footer-section></footer-section>
    </div>
</template>

<script>
import HomepageHeader from './Header/Homepage/Homepage.vue';
import LastArticles from './Articles/LastArticles.vue';
import DiscordPresentation from './DiscordPresentation/DiscordPresentation.vue';
import FooterSection from './Footer/FooterSection.vue';

export default {
    name: 'homepage',
    components: {
        HomepageHeader,
        LastArticles,
        DiscordPresentation,
        FooterSection
    },
    mounted() {
        if(!this.$root.$store.state.postList.length)
            fetch('https://salondesdevs.io/api/posts/list')
                .then(data => data.json())
                .then(posts => {
                    this.$root.$store.commit('setPostList', {postList: posts});
                }).catch(console.log);
    }
};
</script>

<style scoped>
div#homepage {
    overflow-x: hidden;
}

div.placeholder-twitter {
    height: 800px;
    background-color: #fafafa;
}
</style>
