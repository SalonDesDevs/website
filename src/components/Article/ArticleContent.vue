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

#content td.gutter {
    display: none;
}

#content td.code {
    padding: 0px;
    overflow-x: auto;
}

#content p {
    text-align: justify;
}

#content pre *,
#content code {
    font-family: 'Source Code Pro', monospace;
    font-weight: 500;
    background-color: #f0f0f0;
}

#content figure,
#content table,
#content tbody,
#content tr,
#content td.code {
    display: block;
    width: 100%;
}

#content figure {
    margin: 10px 0;
    padding-left: 10px;
    padding-right: 10px;
    background-color: #f0f0f0;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.5);
}

#content a,
#content a:visited {
    color: #2a2a2a;
}

/* Imported from https://github.com/isagalaev/highlight.js/blob/master/src/styles/github.css */
#content .comment,
#content .quote {
  color: #998;
  font-style: italic;
}

#content .keyword,
#content .selector-tag,
#content .subst {
  color: #333;
  font-weight: bold;
}

#content .number,
#content .literal,
#content .variable,
#content .template-variable,
#content .tag .attr {
  color: #008080;
}

#content .string,
#content .doctag {
  color: #d14;
}

#content .title,
#content .section,
#content .selector-id {
  color: #900;
  font-weight: bold;
}

#content .subst {
  font-weight: normal;
}

#content .type,
#content .class .title {
  color: #458;
  font-weight: bold;
}

#content .tag,
#content .name,
#content .attribute {
  color: #000080;
  font-weight: normal;
}

#content .regexp,
#content .link {
  color: #009926;
}

#content .symbol,
#content .bullet {
  color: #990073;
}

#content .built_in,
#content .builtin-name {
  color: #0086b3;
}

#content .meta {
  color: #999;
  font-weight: bold;
}

#content .deletion {
  background: #fdd;
}

#content .addition {
  background: #dfd;
}

#content .emphasis {
  font-style: italic;
}

#content .strong {
  font-weight: bold;
}
</style>
