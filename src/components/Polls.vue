<template>
  <div class="polls-container">
    <h1 v-if="failedToLoad">Sorry the is no Poll here!</h1>
    <PollPie v-if="isLoaded" :stats="statistics" class="Poll-Statistic-Container"></PollPie>
    <StatisticLabels v-if="isLoaded" :stats="statistics" class="Poll-Labels-Container"></StatisticLabels>
  </div>
</template>

<script>
import PollPie from '@/components/PollComps/PollPie'
import StatisticLabels from '@/components/PollComps/StatisticLabels'
export default {
  name: 'Polls',
  components: {
    'PollPie': PollPie,
    'StatisticLabels': StatisticLabels
  },
  data () {
    return {
      isLoaded: false,
      failedToLoad: false,
      statistics: undefined
    }
  },
  created(){
    this.axios.post('http://localhost:5000/getPoll', {paramID: this.$route.params.id}).then(response => {
      if(response.data.length === 0){
        this.failedToLoad = true;
      }else{
        this.isLoaded = true;
        this.statistics = response.data[0];
      }
    });  
  }
}
</script>


<style scoped>
  .polls-container{
    width:100%;
    display:flex;
    justify-content: center;
    padding-top:100px;
    overflow-x:hidden;
  }
  h1{
    color:red;
  }
  .Poll-Statistic-Container{
    width:400px;
    margin-right:50px;
  }
  .Poll-Labels-Container{
    width:400px;
    margin-left:50px;
  }
</style>
