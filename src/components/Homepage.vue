<template>
    <div id="app">
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
    }
};
</script>

<style scoped>
div#app {
    overflow-x: hidden;
}

div.placeholder-twitter {
    height: 800px;
}
</style>
