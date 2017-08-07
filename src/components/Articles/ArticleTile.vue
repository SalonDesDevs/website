<template>
    <div>
        <img :src="picture" />
        <h3> {{ title }}</h3>
        <p> {{ author }} {{ date }} </p>
    </div>
</template>

<script>
import articles from '../../articles.json'
export default {
    name: 'last-articles',
    props: ['title', 'author', 'date', 'picture'],
}
</script>

<style scoped>
img {
    border-radius: 5px;
    box-shadow: 0 2px 2px 0 rgba(42, 42, 42, 0.3);
}

h3, p {
    color: #3a3a3a;
    padding-left: 10px;
    margin-bottom: 0;
}

h3 {
    margin-top: 10px;
    font-size: 18px;
    text-transform: capitalize;
}

p {
    font-weight: lighter;
    margin-top: 5px;
    font-size: 13px;
    color: #5a5a5a;
    text-transform: uppercase;
}

div {
    display: inline-block;
    text-align: left;
    margin: auto 20px 30px 20px;
}
</style>
