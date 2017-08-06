<template>
    <div class="top-container">
        <particle></particle>
        <navigation></navigation>
        <table class="header-content">
            <tr>
                <td class="half">
                    <planets></planets>
                </td>
                <td class="half">
                    <presentation></presentation>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import Navigation from '../Navigation/Navigation.vue'
import Particle from '../Particle.vue'
import Planets from './Planets.vue'
import Presentation from './Presentation.vue'

export default {
    name: 'homepage-header',
    data () {
        return {}
    },
    components: {
        Navigation,
        Particle,
        Planets,
        Presentation
    }
}
</script>

<style>
div.top-container {
    background-color: transparent;
    overflow-x: hidden;
    height: 700px;
} 
table.header-content {
    padding-top: 60px;
    width: 100%;
}

td.half {
    width: 50%;
}
</style>
