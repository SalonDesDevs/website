<template>
    <ul>
        <a href="/"><navigation-logo></navigation-logo></a>
        <li v-for="name in names">
            <a v-bind:href="values[name]">{{ name }}</a>
        </li>
    </ul>
</template>

<script>
import endpoints from '../../../endpoints.json';
import NavigationLogo from './NavigationLogo.vue'

export default {
    name: 'navigation-left',
    data () {
        return {
            names: Object.keys(endpoints),
            values: endpoints
        }
    },
    components: {
        NavigationLogo,
    }
}
</script>

<style lang="scss" scoped>
a, a:visited {
    color: #d1d1d1;
    text-decoration: none;
}

a:hover {
    color: #ffffff;
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
}

li {
    display: inline-block;

    padding-left: 20px;
    padding-right: 20px;

    font-size: 18px;
    font-weight: bold;

    height: 70px;
    vertical-align: top;
    line-height: 60px;
}

svg.navigation-logo {
    padding-right: 20px;
}

ul {
    margin: 0;
    padding: 0;
    padding-top: 5px;
    height: 60px;
}
</style>
