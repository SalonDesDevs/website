<template>
    <div>
        <a :href="url">
            <img :src="picture" />
            <h3> {{ title }}</h3>
        </a>
        <p> {{ author }} {{ date }} </p>
    </div>
</template>

<script>
export default {
    name: 'last-articles',
    props: ['title', 'url', 'author', 'date', 'picture'],
};
</script>

<style scoped>
img {
    border-radius: 5px;
    box-shadow: 0 2px 2px 0 rgba(42, 42, 42, 0.3);
    transition: all .1s ease-in-out;
    max-width: 500px;
    width: 100%;
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

a {
    text-decoration: none;
}

a:hover > img {
    transform: scale(1.01);
    box-shadow: 0 2px 8px 0px rgba(42, 42, 42, 0.3);
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
    margin: auto 50px 30px;
}

@media (max-width: 600px) {
    div {
        margin: auto !important;
        margin-left: 10px !important;
        margin-right: 10px !important;
    }
}
</style>
