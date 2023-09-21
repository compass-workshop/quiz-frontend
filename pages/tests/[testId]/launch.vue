<template>
  <div>
    <h1 class="text-2xl font-semibold text-center pt-10">Quiz</h1>
    <QuizQuestion
      v-for="(question, index) in questionData"
      :key="index"
      :question="question"
      :options="options[index]"
      :questionIndex="index"
      @selectAnswer="updateAnswer"
    />
    <div class="flex justify-center my-10">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="submitTest"
      >
        Submit Test
      </button>
    </div>
  </div>
</template>

<script setup>
const questionData = ref([]);
const options = ref([]);
const selectedAnswer = ref([]);
const userId = ref(null);
const email = ref(null);
const userName = ref(null);

const route = useRoute();
const testId = route.params.testId;

definePageMeta({
  middleware: "auth",
});

onMounted(async () => {
  userId.value = localStorage.getItem("userId");
  email.value = localStorage.getItem("email");
  userName.value = localStorage.getItem("userName");
  await getQuestions();
});

const getQuestions = async () => {
  const { data } = await useFetch(`http://localhost:3000/tests/${testId}`);
  data.value.questions.forEach((question) => {
    questionData.value = [...questionData.value, question.text];
    options.value = [...options.value, question.options];
    selectedAnswer.value = [
      ...selectedAnswer.value,
      {
        questionId: question.id,
        questionText: question.text,
        selectedAnswer: "",
      },
    ];
  });
};
const updateAnswer = (payload) => {
  const { option, index } = payload;
  selectedAnswer.value[index].selectedAnswer = option;
};

const submitTest = async () => {
  const sendData = {
    answers: selectedAnswer.value,
    userId: userId.value,
    email: email.value,
    testId: testId,
    submittedAt: 10,
    submittedBy: userName.value,
  };
  const response = await useFetch(
    `http://localhost:3000/tests/${userId.value}/${testId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendData),
    }
  );
  navigateTo("/tests");
};
</script>
