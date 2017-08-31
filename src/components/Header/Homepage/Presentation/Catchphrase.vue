<template>
    <h1>
        <span v-for="(part, index) in parsedContent" :class="{blue: index % 2}">{{ part }}</span>
    </h1>
</template>

<script>
export default {
    name: 'presentation',
    props: ['content'],
    computed: {
        parsedContent: function() {
            return this.content.split('~');
        }
    }
};
</script>

<style scoped>
span {
    color: #eee;
}
span.blue {
    color: #396eb8;
}
h1 {
    margin-top: 0;
    max-width: 550px;
    font-size: 35px;
    text-transform: uppercase;
    font-weight: 900;
}
@media (max-width: 600px) {
    h1 {
        font-size: 30px !important;
    }
}

@media (max-width: 1140px) {
    h1 {
        text-align: center;
    }
}
</style>
