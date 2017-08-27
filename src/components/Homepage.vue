<template>
    <div id="app">
        <homepage-header></homepage-header>
        <last-articles></last-articles>
        <discord-presentation></discord-presentation>
    </div>
</template>

<script>
import HomepageHeader from './Header/Homepage/Homepage.vue'
import LastArticles from './Articles/LastArticles.vue'
import DiscordPresentation from './DiscordPresentation/DiscordPresentation.vue'

export default {
    name: 'homepage',
    components: {
        HomepageHeader,
        LastArticles,
        DiscordPresentation
    }
}
</script>

<style scoped>
div#app {
    overflow-x: hidden;
}
</style>
