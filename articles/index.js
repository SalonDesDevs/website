import * as HelloWorld from './hello-world';

export const articles = [
    HelloWorld
];

export const findByUri = (uri) => articles.find(article => article.uri == uri);
