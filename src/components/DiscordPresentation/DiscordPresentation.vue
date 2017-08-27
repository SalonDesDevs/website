<template>
    <section id="section-discord-presentation">
        <separator-top></separator-top>
        <div class="flex-container">
            <div class="left">
                    <svg id="phone-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 252 490">
                        <defs>
                            <filter id="a" color-interpolation-filters="sRGB"><feGaussianBlur result="result6" stdDeviation=".5"/><feComposite in2="result6" operator="atop" in="SourceGraphic" result="result8"/><feComposite in2="SourceAlpha" in="result8" operator="atop" result="result9"/></filter>
                            <filter id="b" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity=".4" flood-color="#000" result="flood"/>
                                <feComposite in2="SourceGraphic" in="flood" operator="in" result="composite1"/>
                                <feGaussianBlur in="composite" stdDeviation=".5" result="blur"/>
                                <feOffset dy=".5" result="offset"/>
                                <feComposite in2="offset" in="SourceGraphic" result="composite2"/>
                            </filter>
                            <pattern id="screenshot" patternUnits="userSpaceOnUse" width="287" height="574">
                                <image xlink:href="../../img/sdd-screenshot.png" x="7" y="0" width="237.6" height="469" />
                            </pattern>
                        </defs>
                        <g transform="translate(0 -562.4)">
                            <path fill="#e6e6e6" stroke="#999" stroke-width="2.494" d="M1.247 624.347v66.768" stroke-linecap="round" stroke-linejoin="round"/>
                            <path fill="#e6e6e6" stroke="#999" stroke-width="2.143" d="M251.07 659.573v31.718" stroke-linecap="round" stroke-linejoin="round"/>
                            <rect width="247.625" height="487.625" x="2.187" y="563.549" fill="#2a2a2a" stroke="#3a3a3a" stroke-width="2.375" ry="34" stroke-linecap="round" stroke-linejoin="round"/>
                            <rect width="237.639" height="419.639" x="7.181" y="597.543" id="screen" stroke-width="0" ry="5" rx="5" fill="url(#screenshot)"/>
                            <rect width="60" height="15" x="96" y="1026.201" fill="#3a3a3a" rx="6" ry="5.5" filter="url(#b)"/>
                            <g transform="translate(1)">
                                <rect width="60" height="4" x="95" y="573.362" fill="#3a3a3a" ry="4" rx="2.256"/>
                                <g transform="matrix(1.5 0 0 1.5 170 -1001.2)" filter="url(#a)">
                                    <path fill="#333" d="M6 1049.362c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z"/>
                                    <path fill="#1a1a1a" d="M4 1049.362c0 .553-.448 1-1 1s-1-.447-1-1c0-.552.448-1 1-1s1 .448 1 1z" opacity=".66"/>
                                </g>
                            </g>
                        </g>
                    </svg>
            </div>
            <div class="right">
                <right></right>
            </div>
        </div>
    </section>
</template>

<script>
import SeparatorTop from './SeparatorTop.vue'
import Right from './Right.vue'

export default {
    name: 'discord-presentation',
    components: {
        SeparatorTop,
        Right
    }
}
</script>

<style scoped>
section#section-discord-presentation {
    background-color: #dedede;
}

svg#phone-svg {
    display: block;
    margin: 0 auto;
    height: 700px;
}

div.flex-container {
    display: flex;
    padding-bottom: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    padding-bottom: 100px;
    align-items: center;
}

div.left {
    flex: 1 0 50%;
}

div.right {
    flex: 1 0 50%;
    min-width: 550px;
}
</style>
