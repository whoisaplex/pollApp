<template>
  <div class="header">
    <h1>POLLING APPLICATION</h1>
  </div>
</template>

<script>
export default {
  name: 'Header'
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
  h1{
    color:#eaeaea;
  }
  .header{
    position:fixed;
    width:100%;
    height:75px;
    background:#2196F3;
    display:flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    z-index: 10;
  }
</style>
