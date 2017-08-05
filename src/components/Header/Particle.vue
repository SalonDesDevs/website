<template>
    <div id="top-container-particles"></div>
</template>

<script>
import particleSettings from '../../particle-settings.json'

export default {
    name: 'particle',
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
    }}
</script>

<style>
#top-container-particles {
    height: 700px;
    width: 100%;
    z-index: -1;
    position: absolute;
    background-color: #transparent;
    color: #ffffff;
}
</style>
