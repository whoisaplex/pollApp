<template>
  <div class="hello">
    <h1>{{$route.params.id}}</h1>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {

    }
  }
}
</script>


<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
