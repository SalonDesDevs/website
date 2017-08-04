<template>
    <div class="top-container">
        <particle></particle>
        <navigation></navigation>
    </div>
</template>

<script>
import Navigation from './Navigation/Navigation.vue'
import Particle from './Particle.vue'
import particleSettings from '../../particle-settings.json'

export default {
    name: 'homepage-header',
    data () {
        return {}
    },
    components: {
        Navigation,
        Particle
    }
}
</script>

<style>
.top-container {
    background-color: transparent;
} 
</style>
