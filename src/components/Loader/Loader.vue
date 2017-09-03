<template>
    <div class="loader">
        <p>Chargement</p>
    </div>
</template>

<script>
export default {
    name: 'loader',
};
</script>

<style scoped>
div.loader {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #2a2a2a;
}

p {
    color: #f0f0f0;
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: calc(50% - 30px);
    font-size: 30px;
    animation-name: loading;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    pointer-events: none;
}

@keyframes loading {
    from {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>
