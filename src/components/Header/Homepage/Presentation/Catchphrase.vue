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
}
</script>

<style scoped>
span {
    text-transform: uppercase;
    font-weight: 900;
    font-size: 40px;
    color: #eee;
}
span.blue {
    color: #396eb8;
}
h1 {
    max-width: 550px;
    margin-top: 0;
}
</style>
