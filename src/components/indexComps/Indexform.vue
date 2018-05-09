<template>
  <div class="container">
      <h3 class="error-text" v-if="isNotValid">ALL ACTIVE FIELDS MUST BE FILLED IN</h3>
      <input v-model="pollName" type="text" placeholder="Poll Name"/>
      <input v-model="pollQuestion" type="text" placeholder="Question"/>
      <div v-for="answer in answers" class="answer-container">
        <input :class="{'answer-input-delete': answerLast(answer.id)}" type="text" :placeholder="answer.placeholder" :key="answer.id" v-model="answer.content"/>
        <button v-if="answerLast(answer.id)" @click="deleteAnswer()" class="answer-delete">X</button>
      </div>
      <div class="button-container">
        <button @click="addAnswer()" class="btn-blue">ADD ANSWER</button>
        <button @click="createPoll()">CREATE POLL</button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Indexform',
  data () {
    return {
      answers: [{id: 1, placeholder: 'Answer 1', content: ''}, {id: 2, placeholder: 'Answer 2', content: ''}],
      pollName: '',
      pollQuestion: '',
      isNotValid: false

    }
  },
  methods: {
    addAnswer(){
      this.answers.push({id: this.answers.length + 1, placeholder: `Answer ${this.answers.length + 1}`, content: ''});
    },
    createPoll(){
      if(this.checkValid()){

      }else{
        
      }
    },
    answerLast(id){
      if(id < this.answers.length){
        return false;
      }else if(id === this.answers.length && this.answers.length > 2){ return true;}
    },
    deleteAnswer(){
      this.answers.pop();
    },
    checkValid(){
      if(this.pollName === '' || this.pollQuestion === ''){
        this.isNotValid = true;
        return false;
      }
      return true;
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

.button-container{
  display:flex;
  justify-content: space-around;
}

.answer-container{
  width:calc(50vw + 40px);
  display:flex;
  justify-content: space-between;
  align-items: center;

}

.error-text{
  color:#D32F2F;
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
.answer-input-delete{
  width: calc(100% - 110px);
}
.answer-delete{
  padding:14px;
  margin:0px;
  width:30px;
  background-color:#D32F2F;
}

button{
  width:24vw;
  padding:10px;
  margin:15px 1vw;
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
.btn-blue{
  background-color:#2196F3;
}
</style>
