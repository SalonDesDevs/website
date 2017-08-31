<template>
    <section class="top-container" id="header">
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
    </section>
</template>

<script>
import Navigation from '../Navigation/Navigation.vue';
import Particle from '../Particle.vue';
import Planets from './Planets.vue';
import Presentation from './Presentation/Presentation.vue';
import Separator from './Separator.vue';

export default {
    name: 'homepage-header',
    components: {
        Navigation,
        Particle,
        Planets,
        Presentation,
        Separator
    }
};
</script>

<style>
section.top-container {
    background-color: transparent;
    position: relative;
    overflow: hidden;
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

@media (max-width: 1140px) {
    div.presentation-container {
        min-width: 600px !important;
    }
    div.planets-container {
        display: none;
    }
}

@media (max-width: 600px) {
    div.presentation-container {
        min-width: auto !important;
        width: 100%;
        padding-left: 35px;
        padding-right: 35px;
    }
}

td.half {
    width: 50%;
}

div.planets-container {
    flex: 1 0 50%;
}

div.presentation-container {
    height: 100%;
    flex: 1 0 50%;
    min-width: 550px;
}
</style>
