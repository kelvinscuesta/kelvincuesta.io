<template>
  <div class="margin0-auto measure lh-copy">
    <div class="mb4">
      <h1 class="f1 fw5">Blog</h1>
      <p class="f4">
        I'm primarily interested in tradeoffs between technologies, but will
        write about random topics of interest when they come up!
      </p>
    </div>
    <ul class="list">
      <li
        v-for="post in posts"
        :key="post.attributes.title"
        class="mb4 measure lh-copy"
      >
        <nuxt-link class="link link-visited loud-yellow white" :to="post._path">
          <div>
            <p class="f3">{{ post.attributes.title }}</p>
            <p class="i f4">{{ post.attributes.date }}</p>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
// want to import all the markdown files
export default {
  async asyncData() {
    const context = await require.context('~/content/blog', true, /\.md$/);
    const posts = context.keys().map(key => ({
      ...context(key),
      _path: `blog/${key.replace('.md', '').replace('./', '')}`
    }));
    // console.log('POSTS:', posts);
    return { posts: posts.reverse() };
  },
  data() {
    return { posts: [] };
  },
  head() {
    return {
      title: 'Blog | Kelvin Cuesta'
    };
  }
};
</script>

<style></style>
