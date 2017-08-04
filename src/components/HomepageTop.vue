<template>
    <div class="top-container">
        <div id="top-container-particles"></div>
        <navigation></navigation>
    </div>
</template>

<script>
import Navigation from './Navigation.vue'
import particleSettings from '../particle-settings.json'

export default {
    name: 'homepage-top',
    data () {
        return {}
    },
    mounted () {
        this.$nextTick(() => this.initParticleJS());
    },
    methods: {
        initParticleJS() {
            particlesJS('top-container-particles', particleSettings);
        }
    },
    components: {
        Navigation
    }
}
</script>

<style>
.top-container {
    background-color: transparent;
} 

#top-container-particles {
    height: 100%;
    width: 100%;
    z-index: -1;
    position: absolute;
    background-color: #transparent;
    color: #ffffff;
}
</style>
