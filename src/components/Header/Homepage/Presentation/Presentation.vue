<template>
    <div class="presentation-left-container">
        <catchphrase :content="catchPhraseArray"></catchphrase>
        <p>{{ content }}</p>
        <br>
        <a href="https://salondesdevs.io/discord"><button class="join">Nous rejoindre</button></a>
    </div>
</template>

<script>
import header from '../../../../header.json'
import Catchphrase from './Catchphrase.vue'

export default {
    name: 'presentation',
    data () {
        return header
    },
    computed: {
        catchPhraseArray: function() {
            return this.catchphrase.join('~');
        }
    },
    components: {
        Catchphrase
    }
}
</script>

<style scoped>
div.presentation-left-container {
    height: 100%;
}

p {
    color: #cacaca;
    max-width: 550px;
    text-align: justify;
}
button.join {
    background-color: #fafafa;
    color: #2a2a2a;
    border: none;
    font-weight: 600;
    font-size: 17px;
    font-family: 'Lato', Roboto, Arial, sans-serif;
    padding: 10px 40px;
    border-radius: 4px;
    box-shadow: 0 4px 4px 0px #2a2a2a;
}

button.join:hover {
    background-color: #fcfcfc;
    box-shadow: 0 8px 8px 0px #2a2a2a;
    cursor: pointer;
    cursor: hand;
}
</style>
