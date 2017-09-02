<template>
    <transition name="fade" mode="out-in" appear>
        <router-view></router-view>
    </transition>
</template>

<script>
export default {
    name: 'app'
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Lato:400,400i,600,700,700i,900,900i&subset=latin-ext');

body, html {
    margin: 0;
    padding: 0;
    font-family: 'Lato', Roboto, Arial, sans-serif;
}

* {
    font-family: 'Lato', Roboto, Arial, sans-serif;
}

body {
    background-color: #2a2a2a;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
