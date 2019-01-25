import path from 'path';

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Mopsy',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no'},
      {hid: 'description', name: 'description', content: 'mopsy&apos;s design&dev log'},
      {property: "og:url", content: "mopsiology.firebaseapp.com"},
      {property: "og:title", content: "Mopsiology"},
      {property: "og:description", content: "Design X Technology"},
      {property: "og:image", content: "https://mopsyshin.github.io/images/web-cover.jpg"},
      {property: "og:image:type", content: "image/jpg"},
      {property: "og:image:width", content: "400px"},
      {property: "og:image:height", content: "300px"},
      {name: "apple-mobile-web-app-capable", content: "yes"},
    ],
    link: [
      {rel: 'icon', type: 'image/png', href: '/logo_m.png'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#3B8070'},
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    vendor: [
      'vue2-touch-events',
    ],
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
  },
  transition: {
    name: 'page',
    mode: 'out-in',
  },
  css: [
    { src: '~assets/css/main.scss', lang: 'scss'}
  ],
  modules: [
    [ 'nuxt-sass-resources-loader', path.resolve(__dirname, 'assets/css/main.scss') ],
    '@nuxtjs/markdownit',
  ],
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(lang, str).value;
        } catch (__) {}
      }
  
      return ''; // use external default escaping
    }
  }
}
