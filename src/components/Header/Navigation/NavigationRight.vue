<template>
    <div>
        <search-button-bar></search-button-bar>
        <a href="/login"><button>Connexion</button></a>
    </div>
</template>

<script>
import SearchButtonBar from './SearchButtonBar.vue'

export default {
    name: 'navigation-right',
    data () {
        return {};
    },
    components: {
        SearchButtonBar
    }
}
</script>

<style lang="scss" scoped>

a {
    display: inline-block;

    padding-left: 20px;
    padding-right: 20px;

    font-size: 18px;
    font-weight: bold;

    height: 70px;
    vertical-align: top;
    line-height: 60px;
}

div {
    margin: 0 auto;
    padding: 0;
    padding-top: 5px;
    height: 60px;
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
    transition: background 100ms ease-in, color 100ms ease-in;
}

button:hover {
    background-color: #ffffff;
    border-color: #ffffff;
    color: #2a2a2a;
    box-shadow: 0 0 2px 0px #fff;
    cursor: pointer;
    cursor: hand;
}

</style>
