import FMMode from 'frontmatter-markdown-loader/mode';
const path = require('path');
const glob = require('glob');
const markdownPaths = ['blog'];

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/sunflower.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['tachyons/css/tachyons.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        include: path.resolve(__dirname, 'content'),
        loader: 'frontmatter-markdown-loader',
        options: {
          mode: [FMMode.VUE_COMPONENT],
          markdownit: {
            html: true,
            linkify: true,
            breaks: true
          }
        }
      });
    }
  },
  // this will generate the dynamic routes of the blog posts
  generate: {
    routes: dynamicMarkDownRoutes()
  }
};

// need to generate markdown paths for nuxt to build routes
function dynamicMarkDownRoutes() {
  return [].concat(
    ...markdownPaths.map(mdPath => {
      return glob
        .sync(`${mdPath}/*.md`, { cwd: 'content' })
        .map(filepath => `${mdPath}/${path.basename(filepath, '.md')}`);
    })
  );
}
