<template>
    <div class="navigation-bar">
        <div class="left">
            <navigation-left></navigation-left>
        </div>
        <div class="right">
            <navigation-right></navigation-right>
        </div>
    </div>
</template>

<script>
import endpoints from '../../../endpoints.json';
import NavigationLeft from './NavigationLeft.vue'
import NavigationRight from './NavigationRight.vue'

export default {
    name: 'navigation',
    data () {
        return {
            names: Object.keys(endpoints),
            values: endpoints
        }
    },
    components: {
        NavigationLeft,
        NavigationRight
    }
}
</script>

<style scoped>
div.navigation-bar {
    padding-left: 5%;
    padding-right: 5%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

div.left {
    display: inline-block;
    flex-grow: 1;
}

div.right {
    display: inline-block;
    flex-grow: 1;
    text-align: right;
}

@media (max-width: 570px) {
    div {
        text-align: center;
    }
}
</style>
