<template>
    <div class="presentation-left-container">
        <h2>{{ title }}</h2>
        <p>{{ content }}</p>
        <br>
        <a href="https://salondesdevs.io/discord"><button class="join">Nous rejoindre</button></a>
    </div>
</template>

<script>
import discordPresentation from '../../discord-presentation.json'
export default {
    name: 'right',
    data () {
        return discordPresentation
    }
}
</script>

<style scoped>
div.presentation-left-container {
    height: 100%;
}

p {
    color: #454545;
    max-width: 550px;
    text-align: justify;
    margin-bottom: 40px;
    margin-top: 50px;
}
button.join {
    background-color: #4477c0;
    color: #fafafa;
    border: none;
    font-weight: 600;
    font-size: 17px;
    font-family: 'Lato', Roboto, Arial, sans-serif;
    padding: 10px 40px;
    border-radius: 4px;
    box-shadow: 0 4px 4px 0px rgba(40, 40, 40, 0.2);
    transition: box-shadow 200ms;
}

button.join:hover {
    background-color: #497bc5;
    box-shadow: 0 5px 8px 0px rgba(40, 40, 40, 0.2);
    cursor: pointer;
    cursor: hand;
}
@media (max-width: 1140px) {
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h2 {
        text-align: center;
    }
}
h2 {
    color: #454545;
    margin-top: 0;
    max-width: 550px;
    font-size: 35px;
    text-transform: uppercase;
    font-weight: 900;
}
@media (max-width: 600px) {
    h2 {
        font-size: 30px !important;
    }
}

</style>
