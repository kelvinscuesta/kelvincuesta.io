<template>
  <div class="blogContainer">
    <h1>{{ post.attributes.title }}</h1>
    <h2>{{ post.attributes.date }}</h2>
    <!-- eslint-disable-next-line -->
    <div class="blogContent" v-html="post.html"></div>
  </div>
</template>

<script>
// here we want to create a blog post from a markdown file
export default {
  // getting the blog post from a route param
  async asyncData({ params }) {
    try {
      const post = await import(`~/content/blog/${params.slug}.md`);
      console.log('Post:', post);
      return {
        post
      };
    } catch (err) {
      return false;
    }
  },
  head() {
    return {
      title: this.post.attributes.title
    };
  }
};
</script>

<style></style>
