<template>
    <div>
      <h1 class="text-2xl font-semibold text-center pt-10">Quiz</h1>
  
      <QuizQuestion v-for="(question, index) in questionData" :key="index" :question="question"  :options="options[index]"  :questionIndex="index" @selectAnswer="changeAnswer"/>
      <div class="flex justify-center my-10">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded " @click="checkAnswers">Check Answers</button>
      </div>
    </div>
  </template>
  
  <script setup>
    const questionData = ref([]);
    const options = ref([]);
    const defaultAnswer = ref([]);
    const route = useRoute();
    const params = route.params.testId; 
    const userId = ref(null);
    definePageMeta({
      middleware:"auth"
    })
    

    onMounted(async()=>{
     
      userId.value= localStorage.getItem("email");
      const getData = async() => {
        const response = await fetch(`http://localhost:3000/tests/${params}`);
        const data = await response.json();
      
        data.questions.forEach((question) => {
          questionData.value= [...questionData.value,question.text];
          options.value= [...options.value,question.options];
          defaultAnswer.value= [...defaultAnswer.value,{questionId: question.id, questionText: question.text, selectedAnswer: ''}];
        })
      }
      await getData();
    })
    
    
    const changeAnswer = (payload) => {
        const {option,index} = payload;
        defaultAnswer.value[index].selectedAnswer = option;
    }
    const checkAnswers = async() => {

        
        const sendData = {
          answers: defaultAnswer.value,
          userId: userId.value,
          email: 'rohit.kumar@comprotechnologies.com',
          testId: params,
          submittedAt: 10,
          submittedBy: "Rohit"

        }
        const response = await fetch(`http://localhost:3000/tests/${userId.value}/${params}`,{
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(sendData)
        });
        const data = await response.json();
        console.log(data);
        
    }
  </script>