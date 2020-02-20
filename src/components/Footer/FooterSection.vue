<template>
    <footer>
        <h3>Retrouvez nous !</h3>
        <div class="icons-container">
            <FooterIcon
                href="https://github.com/SalonDesDevs"
                :src="require('../../img/github.svg')"
                color="white" />
            <FooterIcon
                href="https://gitlab.com/SalonDesDevs"
                :src="require('../../img/gitlab.svg')"
                color="#e24329" />
            <FooterIcon
                href="https://salondesdevs.io/discord"
                :src="require('../../img/discord.svg')"
                color="#7289da" />
            <FooterIcon
                href="https://www.youtube.com/channel/UCj0cYs6HJ6jRPLABDITK8pg"
                :src="require('../../img/youtube.svg')"
                color="#cd201f" />
            <FooterIcon
                href="https://twitter.com/salondesdevs_io"
                :src="require('../../img/twitter.svg')"
                color="#1da1f2" />
        </div>
        <div class="footer-separator"></div>
        <div class="bottomline">
            <p class="footer-about">Design par <a target="_blank" href="https://twitter.com/valentin_SLD_">valmax72</a></p>
            <p class="copyright">Copyright &copy; Salon des Développeurs.</p>
        </div>
    </footer>
</template>

<script>
import FooterIcon from './FooterIcon.vue';

export default {
    name: 'footer-section',
    components: {
        FooterIcon
    }
};
</script>

<style scoped>
footer {
    background-color: #262626;
    color: #fafafa;
    width: 100%;
}

h3 {
    margin: 0;
    text-align: center;
    padding-top: 30px;
    padding-bottom: 20px;
    font-weight: normal;
    font-size: 28px;
}

div.icons-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}

div.footer-separator {
    width: calc(100% - 130px);
    margin: 0 65px;
    height: 1px;
    margin-top: 20px;
    background-color: #444;
    border-radius: 5px;
}

p.copyright {
    margin: 0;
    right: 0;
    padding-right: 65px;
    padding-top: 5px;
    font-size: 17px;
    color: #999;
    padding-bottom: 10px;
    text-align: right;
}

div.bottomline {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}

p.footer-about {
    margin: 0;
    right: 0;
    padding-left: 65px;
    padding-top: 5px;
    font-size: 17px;
    color: #999;
    padding-bottom: 10px;
}

p > a, p > a:visited {
    color: #999;
    font-size: 17px;
    text-decoration: none;
    border-bottom: 2px solid #999;
}

p > a:hover {
    text-decoration: none;
    border-bottom: none;
}

@media (max-width: 600px) {
    div.bottomline {
        flex-direction: column-reverse;
        align-items: center;
    }

    p {
        padding-left: 0 !important;
        padding-right: 0 !important;
    }
}
</style>
