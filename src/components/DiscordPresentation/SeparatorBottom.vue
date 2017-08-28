<template>
    <div class="container">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 50 C40 200 60 -100 100 50 L 100 100 L 0 100 Z" />
        </svg>
    </div>
</template>

<script>
export default {
    name: 'separator-bottom',
}
</script>

<style scoped>
div.container {
    position: relative;
    width: 100%;
    height: 100px;
    background-color: #f0f0f0;
    overflow: hidden;
}

svg {
    fill: #fafafa;
}
</style>
