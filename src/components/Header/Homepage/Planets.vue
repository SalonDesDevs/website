<template>
    <div>
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
            <g fill="none" stroke="#555" stroke-width="2.5" stroke-linecap="round">
                <path v-for="bond in bonds" :d="bondPath[bond.id].path" :opacity="bondPath[bond.id].opacity"/>
            </g>
            <g filter="url(#glow)" stroke-width=".5">
                <circle v-for="planet in planets" v-bind="planet" :stroke="planet.fill"/>
            </g>
        </svg>
    </div>
</template>

<script>
export default {
    name: 'planets',
    data () {
        return {
            "moveInitialized": false,
            "timers": [],
            "speed": 0.10,
            "planets": [{
                    "id": "3",
                    "cx": 70,
                    "cy": 152,
                    "fill": "#5585ca",
                    "r": 44
                },
                {
                    "id": "5",
                    "cx": 433,
                    "cy": 288,
                    "fill": "#3c8dbb",
                    "r": 43.5
                },
                {
                    "id": "1",
                    "cx": 379,
                    "cy": 34,
                    "fill": "#3a6cb3",
                    "r": 28
                },
                {
                    "id": "2",
                    "cx": 145,
                    "cy": 66,
                    "fill": "#2b57a7",
                    "r": 29
                },
                {
                    "id": "4",
                    "cx": 249,
                    "cy": 197,
                    "fill": "#2b57a7",
                    "r": 12.3
                },
                {
                    "id": "6",
                    "cx": 28,
                    "cy": 381,
                    "fill": "#3969a5",
                    "r": 18
                },
                {
                    "id": "7",
                    "cx": 275,
                    "cy": 384,
                    "fill": "#3a6cb3",
                    "r": 28
                }
            ],
            "bonds": [{
                    "id": "1-2",
                    "from": 1,
                    "to": 2
                },
                {
                    "id": "1-3",
                    "from": 1,
                    "to": 3
                },
                {
                    "id": "3-4",
                    "from": 3,
                    "to": 4
                },
                {
                    "id": "4-7",
                    "from": 4,
                    "to": 7
                },
                {
                    "id": "5-2",
                    "from": 5,
                    "to": 2
                },
                {
                    "id": "5-1",
                    "from": 5,
                    "to": 1
                },
                {
                    "id": "6-5",
                    "from": 6,
                    "to": 5
                },
                {
                    "id": "6-3",
                    "from": 6,
                    "to": 3
                }
            ]
        };
    },
    computed: {
        bondPath: function() {
            let result = {};
            this.bonds.forEach( e => {
                let {from, to} = e;
                let sPlanet = this.planets.filter(e => e.id == from)[0];
                let tPlanet = this.planets.filter(e => e.id == to)[0];
                result[e.id] = result[e.id] || {};
                result[e.id].path = `M${sPlanet.cx},${sPlanet.cy}L${tPlanet.cx},${tPlanet.cy}`;
                result[e.id].opacity = 5e4 / (Math.pow(sPlanet.cx - tPlanet.cx, 2) + Math.pow(sPlanet.cy - tPlanet.cy, 2));
            });
            return result;
        }
    },
    mounted () {
        this.$nextTick(() => this.initMove());
    },
    beforeDestroy() {
        this.timers.forEach((id) => {
            clearInterval(id);
        });
    },
    methods: {
        initMove() {
            // Make sure to run this only once.
            if(this.moveInitialized) return;
            this.moveInitialized = true;
            // Function to determine the speed according to the lifetime
            const accelerationValue = (time, lifetime) => - Math.pow((time*2/lifetime - 1), 4) + 1;
            const randomVelocity = () => Math.random() * 2 * this.speed - this.speed;
            const start = Date.now();
            let previousFrameTime = performance.now();
            this.planets.forEach(planet => {
                // Speed on each axis. No flooring for better randomness in the directions.
                planet.moveX = randomVelocity();
                planet.moveY = randomVelocity();
                // Time interval at which the direction is reversed.
                planet.lifetime = Math.floor(Math.random() * 5000) + 5000;
                // Prevent excessive moving around. Planets end up overlapping, wich is kinda ugly
                this.timers.push(setInterval(() => {
                    planet.moveX *= -1;
                    planet.moveY *= -1;
                }, planet.lifetime));
            });
            const loop = (frameTime) => {
                window.requestAnimationFrame(loop);
                const delta = frameTime - previousFrameTime;
                previousFrameTime = frameTime;
                this.planets.forEach(planet => {
                    if(planet.cx + planet.r >= 486 || planet.cx - planet.r <= 0) planet.moveX = -planet.moveX;
                    if(planet.cy + planet.r >= 420 || planet.cy - planet.r <= 0) planet.moveY = -planet.moveY;
                    // When we are close to reversing the direction (see above), slow down the planet.
                    const now = Date.now();
                    const elapsed = now - start;
                    const acc = accelerationValue(elapsed % planet.lifetime, planet.lifetime);
                    planet.cx += planet.moveX * acc * (delta / 32);
                    planet.cy += planet.moveY * acc * (delta / 32);
                });
            };
            window.requestAnimationFrame(loop);
            // resume after re-focus
            let visibilityChange, hidden;
            if (typeof document.hidden !== 'undefined') {
                hidden = 'hidden';
                visibilityChange = 'visibilitychange';
            } else if (typeof document.msHidden !== 'undefined') {
                hidden = 'msHidden';
                visibilityChange = 'msvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                hidden = 'webkitHidden';
                visibilityChange = 'webkitvisibilitychange';
            }
            document.addEventListener(visibilityChange, () => {
                if(!document[hidden])
                    previousFrameTime = performance.now();
            });
        }
    }
};
</script>

<style scoped>
svg#planets {
    display: block;
    max-height: 420px;
    border-radius: 10px;
    max-width: 486px;
    width: calc(100% - 40px);
    padding: 0 20px 0 20px;
    margin: 0 auto;
}
</style>
