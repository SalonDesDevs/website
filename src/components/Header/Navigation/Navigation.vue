<template>
    <div class="navigation-bar">
        <table>
            <tr>
                <td class="left half">
                    <navigation-left></navigation-left>
                </td>
                <td class="right half">
                    <navigation-right></navigation-right>
                </td>
            </tr>
        </table>
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

<style lang="scss" scoped>
table {
    padding-left: 5%;
    padding-right: 5%;
    width: 100%;
    background: rgba(0, 0, 0, 0);
}

td.left {
    overflow: hidden;
}

td.right {
    overflow: hidden;
    text-align: right;
}
</style>
