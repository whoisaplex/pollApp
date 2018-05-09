<template>
  <div class="container">
    <h1>Vote for your answer</h1>
    <div v-for="(answer, index) in stats.answers" class="vote-container" :style="{'background' : backgroundColor[index]}">
      <h2>{{answer}}</h2>
      <button @click="votePoll(index)">Vote</button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Voting',
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
  },
  methods: {
    votePoll(index){
      this.axios.post('http://localhost:5000/updatePoll', {paramID: this.$route.params.id, index: index}).then(response => {
        this.$parent.getPoll();
      });
    }
  }
}
</script>


<style scoped>
  .container{
    width:100%;
    display:flex;
    flex-direction: column;
    align-items: center;
  }

  .vote-container{
    display:flex;
    width: 40%;
    justify-content: space-between;
    background:grey;
    margin-bottom:10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  }
  .vote-container:first-of-type{
    margin-top:20px;
  }
  .vote-container h2{
    padding:10px;
    color:#eaeaea;
  }
  .vote-container button{
    padding:10px 25px;
    border:none;
    color:#eaeaea;
    background:#5f5f5f;
    font-size:15px;
    cursor:pointer;
    transition: background .2s;
  }
  .vote-container button:hover{
    background:#484848;
  }
  h1{
    color:grey;
  }
</style>
