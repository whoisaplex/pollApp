<template>
  <div id="app">
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'App',
  components: {
    'Header': Header
  }
}
</script>

<style>
  *{
    padding:0px;
    margin:0px;
  }
  body{
    background:#eaeaea;
    padding:0px;
    margin:0px;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width:100vw;
    height:100vh;
  }
</style>
