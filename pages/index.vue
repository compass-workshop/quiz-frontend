<template>
    <div>
      <h1 class="text-2xl font-semibold text-center pt-10">Quiz</h1>
  
      <QuizQuestion v-for="(question, index) in question" :key="index" :question="question"  :options="options[index]"  :questionIndex="index" @selectAnswer="changeAnswer"/>
      <div class="flex justify-center my-10">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " @click="checkAnswers">Check Answers</button>
      </div>
    </div>
  </template>
  
  <script setup>


    const question = ref(["What is the capital of France?","What is the capital of England?","What is the capital of Germany?","What is the capital of Spain?"]);
    const options = ref([["Paris", "London", "Berlin", "Madrid"],["Paris", "London", "Berlin", "Madrid"],["Paris", "London", "Berlin", "Madrid"],["Paris", "London", "Berlin", "Madrid"]]);
    const answer = ref(["paris","London","Berlin","Madrid"]);
    const defaultAnswer = ref(["","","",""]);
    const changeAnswer = (payload) => {
        const {option,index} = payload;
        defaultAnswer.value[index] = option;
    }
    const checkAnswers = () => {
        let score = 0;
        for(let i = 0; i < answer.value.length; i++){
            if(answer.value[i] === defaultAnswer.value[i]){
                score++;
            }
        }
        alert(`You scored ${score} out of ${answer.value.length}`);
    }
  </script>