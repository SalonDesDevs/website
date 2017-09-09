<template>
    <section class="content">
        <h1 id="heading">{{article.title}}</h1>
        <div v-html="article.content" id="content">
        </div>
    </section>
</template>

<script>
export default {
    name: 'article-content',
    props: ['articleId'],
    data() {
        return {
            article: this.$store.state.postContent[this.articleId]
        };
    }
};
</script>

<style>
section.content {
    background-color: #fafafa;
    color: #1c1c1c;
}

div#content {
    background-color: #fafafa;
    margin: 0 auto;
    padding: 10px 35px;
    max-width: 800px;
}

h1#heading {
    margin-top: 0px;
    padding-top: 25px;
    padding: 25px 35px;
    display: block;
    width: fit-content;
    margin: 0 auto;
    font-size: 40px;
    text-align: center;
}

td.gutter {
    display: none;
}

td.code {
    padding: 0px;
    overflow-x: auto;
}

p {
    text-align: justify;
}

pre *, code {
    font-family: 'Source Code Pro', monospace;
    font-weight: 500;
    background-color: #f0f0f0;
}

figure, table, tbody, tr, td.code {
    display: block;
    width: 100%;
}

figure {
    margin: 10px 0;
    padding-left: 10px;
    padding-right: 10px;
    background-color: #f0f0f0;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
}

a, a:visited {
    color: #2a2a2a;
}

/* Imported from https://github.com/isagalaev/highlight.js/blob/master/src/styles/github.css */
.comment,
.quote {
  color: #998;
  font-style: italic;
}

.keyword,
.selector-tag,
.subst {
  color: #333;
  font-weight: bold;
}

.number,
.literal,
.variable,
.template-variable,
.tag .attr {
  color: #008080;
}

.string,
.doctag {
  color: #d14;
}

.title,
.section,
.selector-id {
  color: #900;
  font-weight: bold;
}

.subst {
  font-weight: normal;
}

.type,
.class .title {
  color: #458;
  font-weight: bold;
}

.tag,
.name,
.attribute {
  color: #000080;
  font-weight: normal;
}

.regexp,
.link {
  color: #009926;
}

.symbol,
.bullet {
  color: #990073;
}

.built_in,
.builtin-name {
  color: #0086b3;
}

.meta {
  color: #999;
  font-weight: bold;
}

.deletion {
  background: #fdd;
}

.addition {
  background: #dfd;
}

.emphasis {
  font-style: italic;
}

.strong {
  font-weight: bold;
}
</style>
