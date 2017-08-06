<template>
    <div id="main-container">
        <homepage-header></homepage-header>
    </div>
</template>

<script>
import HomepageHeader from './Header/Homepage/Homepage.vue'

export default {
    name: 'homepage',
    data () {
        return {}
    },
    components: {
        HomepageHeader
    }
}
</script>

<style scoped>
div#main-container {
    overflow-x: hidden;
}
</style>
