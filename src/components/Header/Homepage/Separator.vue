<template>
    <div class="container">
        <div class="inner"></div>
    </div>
</template>

<script>
export default {
    name: 'homepage-header',
    data () {
        return {}
    }}
</script>

<style scoped>
div.container {
    position: relative;
    width: 100%;
    height: 100px;
}
div.inner {
    position: absolute;
    width: 120%;
    height: 100%;
    left: -10%;
    background-color: #fafafa;
    border-top-left-radius: 50% 100px;
    border-top-right-radius: 50% 100px;
}
</style>
