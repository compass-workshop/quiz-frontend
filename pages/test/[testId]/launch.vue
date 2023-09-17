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
    const answer = ref([]);
    const params = "30c82e3e-3d2f-408b-99af-9a5901d71953"
    onMounted(async()=>{
      const route = useRoute();
      // const params = route.params.testId;
      
      const getData = async() => {
        const response = await fetch(`http://localhost:3001/tests/${params}`);
        const data = await response.json();
        data.questions.forEach((question) => {
          questionData.value= [...questionData.value,question.text];
          options.value= [...options.value,question.options];
          defaultAnswer.value= [...defaultAnswer.value,{questionId: question.id, answer: ""}];
          answer.value= [...answer.value,question.answer];
          
        })
      }
      await getData();
      // console.log(defaultAnswer.value);
    })
    
    
    const changeAnswer = (payload) => {
        const {option,index} = payload;
        defaultAnswer.value[index].answer = option;
    }
    const checkAnswers = async() => {
        // const store = useStore();
        const userId = "52134764-2a47-4cae-b972-a18eb4f6e46b";
        const sendData = {
          submittedAnswers: [{questionId: '1b8a4a1e-eabd-47fd-b2a2-a72befbc5864', questionText: 'Which country is known as the Land of the Rising Sun?', answer: 'Japan'}],
          userId,
          testId: params,
          submittedAt: 10,
          submittedBy: "Rohit"

        }
        console.log(sendData);
        const response = await fetch(`http://localhost:3000/tests/${userId}/${params}`,{
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            answers: sendData
          })
        });
        const data = await response.json();
        console.log(data);
        
    }
  </script>