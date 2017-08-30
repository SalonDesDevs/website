<template>
    <section id="section-discord-presentation">
        <separator-top></separator-top>
        <div class="flex-container">
            <div class="left">
                <svg id="phone-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 700">
                    <defs>
                        <filter id="a" color-interpolation-filters="sRGB">
                            <feGaussianBlur result="result6" stdDeviation=".5"/>
                            <feComposite in2="result6" operator="atop" in="SourceGraphic" 
                                result="result8"/>
                            <feComposite in2="SourceAlpha" in="result8" operator="atop" 
                                result="result9"/>
                        </filter>
                        <filter id="b" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity=".4" flood-color="#000" result="flood"/>
                            <feComposite in2="SourceGraphic" in="flood" operator="in" 
                                result="composite1"/>
                            <feGaussianBlur in="composite" stdDeviation=".5" result="blur"/>
                            <feOffset dy=".714" result="offset"/>
                            <feComposite in2="offset" in="SourceGraphic" result="composite2"/>
                        </filter>
                        <clipPath id="clip-rounded-corners-screen">
                            <rect width="339.5" height="599.5" x="10.25" y="853.63" rx="11" ry="14"/>
                        </clipPath>
                    </defs>
                    <g transform="translate(0 -803.4)">
                        <path fill="#e6e6e6" stroke="#999" stroke-width="3.562" 
                            d="M1.781 891.924v95.382" stroke-linecap="round" 
                            stroke-linejoin="round"/>
                        <path fill="#e6e6e6" stroke="#999" stroke-width="3.061" 
                            d="M358.67 942.247v45.311" stroke-linecap="round" 
                            stroke-linejoin="round"/>
                        <rect width="353.750" height="696.607" x="3.124" y="805.07" 
                            fill="#2a2a2a" stroke="#3a3a3a" stroke-width="3.392" ry="48.571" 
                            stroke-linecap="round" stroke-linejoin="round"/>
                        <image width="339.5" height="599.5" x="10.25" y="853.63"
                            stroke-width="0" clip-path="url(#clip-rounded-corners-screen)"
                            xlink:href="../../img/sdd-screenshot.png"/>
                        <rect width="85.71" height="21.42" x="137.14" y="1466.001" fill="#3a3a3a"
                            rx="8.571" ry="7.857" filter="url(#b)"/>
                        <g transform="translate(1.42857143)">
                            <rect width="85.71" height="5.714" x="135.714" y="819.088" fill="#3a3a3a" 
                                ry="5" rx="3"/>
                            <g transform="matrix(2.142 0 0 2.142 242.857 -1425)" filter="url(#a)">
                                <path fill="#333" 
                                    d="M6 1049.362c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z"/>
                                <path 
                                    fill="#1a1a1a" d="M4 1049.362c0 .553-.448 1-1 1s-1-.447-1-1c0-.552.448-1 1-1s1 .448 1 1z"
                                    opacity=".66"/>
                            </g>
                        </g>
                    </g>
                    <foreignObject width="226.43" height="521.43" rx="7.14" ry="7.14" x="122.86" y="128.57">
                        <div id="discord-phone-drawer">
                            <div class="scrollable">
                                <template v-if="sysadmin.length > 0">
                                    <h1>sysadmin - {{ sysadmin.length }}</h1>
                                    <div class="user-container" v-for="user in sysadmin">
                                        <img :src="user.avatar_url" />
                                        <span class="sysadmin">{{ user.nick || user.username }}</span>
                                    </div>
                                </template>
                                <template v-if="graphiste.length > 0">
                                    <h1>graphiste - {{ graphiste.length }}</h1>
                                    <div class="user-container" v-for="user in graphiste">
                                        <img :src="user.avatar_url" />
                                        <span class="graphiste">{{ user.nick || user.username }}</span>
                                    </div>
                                </template>
                                <template v-if="dev.length > 0">
                                    <h1>développeur - {{ dev.length }}</h1>
                                    <div class="user-container" v-for="user in dev">
                                        <img :src="user.avatar_url" />
                                        <span :class="{dev: true, admin: user.isAdmin}">{{ user.nick || user.username }}</span>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </foreignObject>
                </svg>
            </div>
            <div class="right">
                <right></right>
            </div>
        </div>
        <separator-bottom></separator-bottom>
    </section>
</template>

<script>
import SeparatorTop from './SeparatorTop.vue'
import SeparatorBottom from './SeparatorBottom.vue'
import Right from './Right.vue'

export default {
    name: 'discord-presentation',
    components: {
        SeparatorTop,
        Right,
        SeparatorBottom
    },
    data () {
        return {members: []}
    },
    mounted () {
        const updateOnline = () => fetch('https://canary.discordapp.com/api/guilds/186941943941562369/widget.json')
            .then(resp => resp.json())
            .then(data => this.members = data.members)
            .catch(err => console.log(err));
        updateOnline();
        setInterval(updateOnline, 6e4);
    },
    computed: {
        sysadmin: function() {
            return this.members.filter(
                member =>
                    member.username === 'unixfox' ||
                    member.username === 'Uneo7' ||
                    member.username === 'Norman FELTZ' ||
                    member.username === 'Nopoza973' ||
                    member.username === 'Hugues' ||
                    member.username === 'Dreamsix' ||
                    member.username === '丁丁'
            );
        },
        graphiste: function() {
            return this.members.filter(
                member =>
                    member.username.indexOf('valmax72') >= 0 ||
                    member.username === 'Creart' ||
                    member.username === 'Kwizzy' ||
                    member.username === 'Yadunet'
            );
        },
        dev: function() {
            return this.members.filter(
                member => 
                    this.sysadmin.filter(
                        m => m.username === member.username
                    ).length === 0 &&
                    this.graphiste.filter(
                        m => m.username === member.username
                    ).length === 0 &&
                    !(member.nick && member.nick.startsWith('[C]'))
            ).map(
                user => {
                    user.nick = user.nick || user.username;
                    user.lnick = user.nick.toLowerCase();
                    user.isAdmin = user.username === 'DeltaEvo' ||
                        user.username === 'Litarvan' ||
                        user.username === 'FliiFe' ||
                        user.username === 'Loïc' ||
                        user.username === 'Vavaballz' ||
                        user.username === '(Psy) Pierre.G' || 
                        user.username === 'MinusKube'
                    return user;
                }
            ).sort(
                (a, b) => (a.lnick < b.lnick) ? -1 : (a.lnick > b.lnick) ? 1 : 0
            );
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,800&subset=latin-ext');
section#section-discord-presentation {
    background-color: #f0f0f0;
}

svg#phone-svg {
    display: block;
    margin: 0 auto;
    height: 700px;
}

@media (max-width: 1140px) {
    div.flex-container {
        flex-direction: column !important;
    }
    div.left {
        margin-bottom: 90px;
    }
    div.right {
        margin: 0 35px;
        max-width: 550px;
    }
}

div.flex-container {
    display: flex;
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
}

div#discord-phone-drawer {
    width: 100%;
    height: 100%;
    background-color: #282b30;
    font-family: 'Open Sans', sans-serif;
    overflow: hidden;
}

div.scrollable {
    max-height: 100%;
    margin-right: -60px;
    overflow: auto;
}

div#discord-phone-drawer > div > h1 {
    margin: 0;
    margin-bottom: 11px;
    padding: 11px 0 0 11px;
    color: #fefefe;
    font-size: 10px;
    text-transform: uppercase;
}

span.sysadmin {
    color: #c2214d;
}

span.admin {
    color: rgb(231, 76, 60) !important;
}

span.graphiste {
    color: #009e3f;
}

span.dev {
    color: #2387d6;
}

div.user-container {
    display: flex;
    align-items: center;
}

div.user-container > span {
    --webkit-font-smoothing: antialiased;
    font-size: 11px;
    margin-left: 11px;
    height: 40px;
    line-height: 35px;
    width: 100%;
    box-shadow: 0.1px 0.3px 0 0 rgba(100, 100, 100, 0.3);
    font-weight: 600;
}

div.user-container > img {
    width: 28px;
    margin-left: 11px;
    border-radius: 28px;
}

</style>
