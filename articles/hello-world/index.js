export const title = "Hello, world!";

export const uri = "hello-world";

export const creationDate = new Date(2020, 1, 20, 23);

export const updateDate = new Date(2020, 1, 20, 23, 10);

export const authors = [
    "LightDiscord"
];

export const tags = [
    "SDD"
];

export const bgImage = require('../../src/img/article-bg.png');

export const fetchContent = () => import('./README.md');
