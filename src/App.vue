<template>
    <div id="app">
        <homepage></homepage>
    </div>
</template>

<script>
import Homepage from './components/Homepage.vue'

export default {
    name: 'app',
    data () {
        return {}
    },
    components: {
        Homepage
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i&subset=latin-ext');

body, html {
    margin: 0;
    padding: 0;
    font-family: 'Lato', Roboto, Arial, sans-serif;
}

body {
    background-color: #2a2a2a;
}
</style>
