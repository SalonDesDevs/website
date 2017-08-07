<template>
    <homepage></homepage>
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
@import url('https://fonts.googleapis.com/css?family=Lato:400,400i,600,700,700i,900&subset=latin-ext');

body, html {
    margin: 0;
    padding: 0;
    font-family: 'Lato', Roboto, Arial, sans-serif;
}

body {
    background-color: #fafafa;
}

::-webkit-scrollbar-thumb {
    background: #444;
    -webkit-border-radius: 1ex;
    -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
}
::-webkit-scrollbar-corner {
    background: transparent;
}
::-webkit-scrollbar {
    height: 8px;
    width: 8px;
    background: #2a2a2a;
}
</style>
