<template>
  <div class="blogContainer margin0-auto measure lh-copy">
    <h1 class="mb3 f1 measure lh-copy fw5">{{ title }}</h1>
    <!-- <div class="blogContent mb2 measure lh-copy" v-html="post.html"></div> -->
    <component :is="blogPostComponent" class="mb2" />
    <!-- <blogPost class="blogPost" /> -->
  </div>
</template>

<script>
// here we want to create a blog post from a markdown file
export default {
  // getting the blog post from a route param

  // asyncData({params})
  asyncData({ params }) {
    try {
      return { params };
    } catch (err) {
      return false;
    }
  },
  data() {
    return {
      title: null,
      blogPostComponent: null,
      params: null
    };
  },
  // use this method instead of asyncData
  created() {
    // grab the markdown file and turn into the blogPost component initialized in the data method

    // make it a require, import makes it a promise which we don't want here
    const markdown = require(`~/content/blog/${this.params.slug}.md`);
    const { attributes, vue } = markdown;
    this.title = attributes.title;
    this.blogPostComponent = vue.component;
  },
  head() {
    return {
      title: this.title
    };
  }
};
</script>

<style>
.frontmatter-markdown p {
  margin-bottom: 2rem;
}
.frontmatter-markdown a {
  text-decoration: underline;
  transition: color 0.15s ease-in;
  color: white;
  font-style: italic;
  font-weight: 500;
}

.frontmatter-markdown pre {
  white-space: pre-wrap;
}

.frontmatter-markdown a:hover {
  color: #ffff00;
}
</style>
