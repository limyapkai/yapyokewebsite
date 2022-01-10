<template>
  <v-app id="app">
    <router-view />
    <main-navigation-bar></main-navigation-bar>
  </v-app>
</template>

<script>
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import MainNavigationBar from './components/MainNavigationBar.vue'

export default {
  name: 'App',

  components:{
    MainNavigationBar: MainNavigationBar,
  },
}
</script>