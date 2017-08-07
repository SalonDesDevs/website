<template>
    <div id="app">
        <homepage-header></homepage-header>
        <last-articles></last-articles>
    </div>
</template>

<script>
import HomepageHeader from './Header/Homepage/Homepage.vue'
import LastArticles from './Articles/LastArticles.vue'

export default {
    name: 'homepage',
    data () {
        return {}
    },
    components: {
        HomepageHeader,
        LastArticles
    }
}
</script>

<style scoped>
div#app {
    overflow-x: hidden;
}
</style>
