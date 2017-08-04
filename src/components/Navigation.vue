<template>
    <div class="navigation-bar">
        <table>
            <tr>
                <td class="left">
                    <ul>
                        <a href="/"><navigation-logo></navigation-logo></a>
                        <li v-for="name in names">
                            <a v-bind:href="values[name]">{{ name }}</a>
                        </li>
                    </ul>
                </td>
                <td class="right">
                    <ul>
                        <search-button-bar></search-button-bar>
                        <li>
                            <a href="/login"><button>Connexion</button></a>
                        </li>
                    </ul>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import endpoints from '../endpoints.json';
import NavigationLogo from './NavigationLogo.vue'
import SearchButtonBar from './SearchButtonBar.vue'

export default {
    name: 'navigation',
    data () {
        return {
            names: Object.keys(endpoints),
            values: endpoints
        }
    },
    components: {
        NavigationLogo,
        SearchButtonBar
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

table {
    padding-left: 5%;
    padding-right: 5%;
    width: 100%;
    background: rgba(0, 0, 0, 0);
}

td.left {
    width: 50%;
    overflow: hidden;
}

td.right {
    width: 50%;
    overflow: hidden;
    text-align: right;
}

button {
    background: transparent;
    border: 2px solid #cacaca;
    border-radius: 100px;
    height: 35px;
    padding-left: 20px;
    padding-right: 20px;
    font-family: 'Lato', Roboto, Arial, sans-serif;
    color: #cacaca;
    font-weight: bold;
    font-size: 17px;
}

button:hover {
    background-color: #ffffff;
    border-color: #ffffff;
    color: #2a2a2a;
    box-shadow: 0 0 2px 0px #fff;
}

</style>
