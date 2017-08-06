<template>
    <svg ref="planets" viewBox="0 0 486 420" id="planets" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <filter id="glow" width="5" height="5" x="-1" y="-1" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0.7" flood-color="#000" result="flood"/>
                <feComposite in="SourceGraphic" in2="flood" operator="in" result="composite1"/>
                <feGaussianBlur in="composite1" stdDeviation="3" result="blur"/>
                <feOffset dx="0" dy="0" result="offset" />
                <feComposite in="SourceGraphic" in2="offset" result="composite2"/>
            </filter>
        </defs>
        <g fill="none" stroke="#444" stroke-width="2.5" stroke-linecap="round">
            <path v-for="bond in bonds" :d="bondPath[bond.id]" :stroke="bond.fill"/>
        </g>
        <g filter="url(#glow)" stroke-width=".5">
            <circle v-for="planet in planets" v-bind="planet"/>
        </g>
    </svg>
</template>

<script>
import planets from '../../../planets.json'
export default {
    name: 'planets',
    data () {
        return Object.assign(planets, {
            moveInitialized: false
        })
    },
    computed: {
        bondPath: function() {
            let result = {};
            this.bonds.forEach( e => {
                let {from, to} = e;
                let sPlanet = this.planets.filter(e => e.id == from)[0];
                let tPlanet = this.planets.filter(e => e.id == to)[0];
                result[e.id] = `M${sPlanet.cx},${sPlanet.cy}L${tPlanet.cx},${tPlanet.cy}`;
            });
            return result;
        }
    },
    mounted () {
        this.$nextTick(() => this.initMove());
    },
    methods: {
        initMove() {
            if(this.moveInitialized) return;
            this.moveInitialized = true;
            this.planets.forEach(planet => {
                let moveX = Math.random() * 2 * this.speed - this.speed;
                let moveY = Math.random() * 2 * this.speed - this.speed;
                setInterval(() => {
                    if(planet.cx + planet.r >= 486 || planet.cx - planet.r <= 0) moveX = -moveX;
                    if(planet.cy + planet.r >= 420 || planet.cy - planet.r <= 0) moveY = -moveY;
                    planet.cx += moveX;
                    planet.cy += moveY;
                }, 30);
            });
        }
    }
}
</script>

<style>
svg#planets {
    height: 300px;
    display: table;
    margin: 0 auto;
    background-color: rgba(42, 42, 42, 0.6);
}
</style>
