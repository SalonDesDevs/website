<template>
    <a
        :style="{'--color': color}"
        class="footer-icon"
        target="_blank"
        :href="href"
        v-html="svg">
    </a>
</template>

<script>
export default {
    data: () => ({
        svg: null
    }),

    props: ['href', 'src', 'color'],

    mounted() {
        fetch(this.src)
            .then((response) => response.text())
            .then((response) => {this.svg = response;});
    }
}
</script>

<style>
a.footer-icon > svg {
    width: 60px;
    fill: #888;
    margin: 20px;
    transition: all .1s ease-in-out;
}

a.footer-icon svg:hover {
    transform: scale(1.1);
    fill: var(--color);
}
</style>
