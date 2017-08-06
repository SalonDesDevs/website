<template>
    <div class="top-container">
        <particle></particle>
        <navigation></navigation>
        <div class="header-content">
            <div class="planets-container">
                <planets></planets>
            </div>
            <div class="presentation-container">
                <presentation></presentation>
            </div>
        </div>
        <separator></separator>
    </div>
</template>

<script>
import Navigation from '../Navigation/Navigation.vue'
import Particle from '../Particle.vue'
import Planets from './Planets.vue'
import Presentation from './Presentation/Presentation.vue'
import Separator from './Separator.vue'

export default {
    name: 'homepage-header',
    data () {
        return {}
    },
    components: {
        Navigation,
        Particle,
        Planets,
        Presentation,
        Separator
    }
}
</script>

<style>
div.top-container {
    background-color: transparent;
    position: relative;
} 
div.header-content {
    padding-top: 60px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    padding-bottom: 100px;
}

td.half {
    width: 50%;
}

div.planets-container {
    padding-right: 50px;
    flex: 1 0 calc(50% - 50px);
}

div.presentation-container {
    height: 100%;
    flex: 1 0 50%;
    min-width: 550px;
}
</style>
