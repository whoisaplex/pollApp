<template>
  <div class="polls-container">
    <PollPie></PollPie>
  </div>
</template>

<script>
import PollPie from '@/components/PollComps/PollPie'
export default {
  name: 'Polls',
  components: {
    'PollPie': PollPie
  },
  data () {
    return {

    }
  }
}
</script>


<style scoped>
  .polls-container{
    width:100%;
    height:100%;
    display:flex;
    justify-content: center;
    padding-top:100px;
    overflow-x:hidden;
  }
  h1{
    color:red;
  }
</style>
