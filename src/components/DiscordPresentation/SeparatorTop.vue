<template>
    <div class="container">
        <div class="inner"></div>
    </div>
</template>

<script>
export default {
    name: 'separator-top',
};
</script>

<style scoped>
div.container {
    position: relative;
    width: 100%;
    height: 100px;
    margin-bottom: 50px;
}
div.inner {
    position: absolute;
    width: 150%;
    height: 100%;
    left: -25%;
    background-color: #fafafa;
    border-bottom-left-radius: 50% 100px;
    border-bottom-right-radius: 50% 100px;
}
</style>
