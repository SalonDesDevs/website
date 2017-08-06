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
    height: calc(100% - 3px);
    width: 100%;
    z-index: -1;
    position: absolute;
    background: #2a2a2a;
    background: -moz-linear-gradient(top, #2a2a2a 30%, #2e353f 100%);
    background: -webkit-linear-gradient(top, #2a2a2a 30%,#2e353f 100%);
    background: linear-gradient(to bottom, #2a2a2a 30%,#2e353f 100%);
    color: #ffffff;
}
</style>
