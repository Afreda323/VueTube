import '@babel/polyfill'
import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'
import 'vuetify/dist/vuetify.min.css'
import App from './App.vue'

Vue.use(Vuetify, {
  theme: {
    primary: colors.red.base,
    secondary: colors.grey.darken1,
    accent: colors.shades.white,
    error: colors.red.accent2
  }
})

new Vue({
  el: "#app",
  render: createElement => createElement(App)
})