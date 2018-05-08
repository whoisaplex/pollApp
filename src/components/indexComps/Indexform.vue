<template>
  <div class="container">

      <input type="text" placeholder="Poll Name"/>
      <input type="text" placeholder="Subject"/>
      <button>CREATE POLL</button>

  </div>
</template>

<script>
export default {
  name: 'Indexform',
  data () {
    return {

    }
  }
}
</script>


<style scoped>
.container{
  width:100%;
  height:100%;
  display:flex;
  justify-content: center;
  align-items: center;
  animation: flyin .9s;

}
@keyframes flyin {
  0%{transform:  translateY(calc(50vh + 25%));}
  100%{transform: translateY(0%);}
}

input{
  width:50vw;
  padding:20px;
  margin:15px 0px;
  border:none;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  color:#212121;
  outline: none;
}
input:focus::placeholder{
  transition: all .5s;
  padding-left:20px;
}
input::placeholder{
  color:#BDBDBD;
}

button{
  width:50vw;
  padding:20px;
  margin:15px 0px;
  box-sizing: content-box;
  background:#4CAF50;
  border:none;
  font-size:25px;
  color:#eaeaea;
  font-weight:bold;
  cursor:pointer;
  outline: none;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}
button:active{
  box-shadow: 0 1px 1px rgba(0,0,0,0.1), 0 1px 1px rgba(0,0,0,0.1);
}

</style>
