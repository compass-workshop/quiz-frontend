<template>
  <div>
    <QuizQuestion
      v-for="(question, index) in data.EVALUATED_ANSWERS"
      :key="index"
      :question="question"
      :options="options[index]"
      :questionIndex="index"
      @selectAnswer="changeAnswer"
      :isQuiz=false
    />
  </div>
</template>

<script setup>
const route = useRoute();
const testId = route.params.testId;
const userId = localStorage.getItem("userId");
let data = reactive({});

onMounted(async () => {
  const response = await useFetch(
    `http://localhost:3000/users/${userId}/tests/${testId}`
  );

  data = response.data.value;
});
</script>