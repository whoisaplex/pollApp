<template>
  <div class="container">
    <button v-if="!pressed" @click="newPoll" class="poll-button" :class="{'animationTest' : classActive}">New Poll</button>
    <Indexform v-if="pressed"></Indexform>
  </div>
</template>

<script>
import Indexform from '@/components/indexComps/Indexform'
export default {
  name: 'Index',
  components: {
    'Indexform': Indexform
  },
  data () {
    return {
      pressed: false,
      classActive: false
    }
  },
  methods: {
    newPoll(){
      this.classActive = true;
      const self = this;
      setTimeout(function(){
         self.pressed = true;
      }, 1000);
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
  flex-direction: column;
  overflow: hidden;
}
.poll-button{
  width:300px;
  height:100px;
  padding:10px 40px;
  background:#448AFF;
  color:#eaeaea;
  font-size:30px;
  border:none;
  cursor:pointer;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}
.animationTest{
  animation: test 1s;
}

@keyframes test {
  0%{transform: translateY(0%);}
  100%{transform: translateY(calc(-50vh - 50%));}
}

</style>
