<template>
  <div>
    <h1>{{stats.pollQuestion}}</h1>
    <h2 v-for="(answer, index) in stats.answers" :style="{'background': backgroundColor[index]}">{{answer}} : {{stats.data[index] - 1}}</h2>
  </div>
</template>

<script>
import PollPie from '@/components/PollComps/PollPie'
export default {
  name: 'Polls',
  components: {
    'PollPie': PollPie
  },
  props: ['stats'],
  data () {
    return {
      backgroundColor: [
        'rgba(255, 99, 132, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(255, 206, 86, 0.7)',
        'rgba(75, 192, 192, 0.7)',
        'rgba(153, 102, 255, 0.7)'
      ]
    }
  }
}
</script>


<style scoped>
  h1{
    color:grey;
  }
  h2{
    background-color:#d2d2d25c;
    padding: 5px 10px;
    margin-bottom:2px;
    color:#eaeaea;
  }

</style>
