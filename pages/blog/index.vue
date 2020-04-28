<template>
  <div class="margin0-auto measure lh-copy">
    <div class="mb4">
      <h1 class="f1 fw5">Blog</h1>
      <p class="f3">
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
    // eslint-disable-next-line no-unused-vars
    const context = await require.context('~/content/blog', true, /\.md$/);
    // require.context is a webpack function that can create a list of directories and modules

    // in our case we grab with context.keys() an array of file names
    // ['./2020-04-25-testing.md, './2020-04-26-my-first-blogpost.md']
    // eslint-disable-next-line no-unused-vars
    let posts = context.keys().map(key => ({
      ...context(key),
      _path: `blog/${key.replace('.md', '').replace('./', '')}`
    }));
    posts = posts.reverse();
    console.log(posts);
    return { posts };
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
