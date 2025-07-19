<!-- <template>
  <div id="app">

    <HelloWorld msg="Welcome to Your Vue.js App" />
    <FormView msg="Welcome to Your Vue.js App" />
    <AboutView />
  </div>
</template>

<script>

import AboutView from './components/AboutView.vue';
import FormView from './components/FormView.vue';
import HelloWorld from './components/HelloWorld.vue'




export default {
  name: 'App',
  components: {
    HelloWorld,
    FormView,
    AboutView,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->


<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-light bg-light mx-auto">
      <div class="navbar-nav ">
        <router-link to="/" class="nav-item nav-link">Home</router-link>
        <router-link to="/form" class="nav-item nav-link">Form</router-link>
        <router-link to="/about" class="nav-item nav-link">About</router-link>
        <router-link to="/addblog" class="nav-item nav-link">Add Blog</router-link>
        <router-link to="/updatedata" class="nav-item nav-link">Update Data</router-link>
      </div>
    </nav>
    
    <div class="container-fluid mt-4">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>