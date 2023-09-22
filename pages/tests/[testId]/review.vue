<template>
  <div>
    <QuizQuestion
      v-for="(question, index) in reviewData"
      :key="index"
      :question="questions[index]"
      :options="options[index]"
      :questionIndex="index"
      :status="status[index]"
      :isQuiz="false"
      :answer="selectedAnswers[index]"
    />
  </div>
</template>

<script setup>
const route = useRoute();
const testId = route.params.testId;
const userId = localStorage.getItem("userId");
const selectedAnswers = ref([]);
const questions = ref([]);
const options = ref([]);
const status = ref([]);

let data = reactive({});

onMounted(async () => {
  // const reviewData = await useFetch(
  //   `http://localhost:3000/tests/${testId}/review/${userId}`
  // );
});
const reviewData = ref([
  {
    question: "What is the capital of India?",
    options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "Delhi",
    status: "CORRECT",
  },
  {
    question: "What is the capital of India?",
    options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "Delhi",
    status: "CORRECT",
  },
  {
    question: "What is the capital of India?",
    options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "Delhi",
    status: "CORRECT",
  },
  {
    question: "What is the capital of India?",
    options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "Delhi",
    status: "WRONG",
  },
]);

reviewData.value.map((item) => {
  questions.value.push(item.question);
  selectedAnswers.value.push(item.answer);
  options.value.push([...item.options]);
  status.value.push(item.status);
});

</script>