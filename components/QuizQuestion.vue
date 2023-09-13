<template>
    <div class="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow-lg">
      <h1 class="text-xl font-semibold mb-4">{{ question }}</h1>
  
      <div class="space-y-2">
        <div v-for="(option, index) in options" :key="index" class="flex items-center">
          <input :id="`option${index}${indexs}`" type="radio" :name="`answer${questionIndex}`" :value="option" v-model="selectedOption" @click="changeAnswer(option,index)" >
          <label :for="`option${index}${indexs}`" class="ml-2">{{ `Option ${String.fromCharCode(65 + index)}: ${option}` }}</label>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    question: String,
    options: Array,
    questionIndex: Number,
    answer: {
        type: String,
        default: ""
    },
    indexs: {
        type: Number,
        default: 0
    },
  });
  const emit = defineEmits(["selectAnswer"]);
    const { question, options, questionIndex,answer,index } = toRefs(props);
    const selectedOption = ref(answer.value);
    const changeAnswer = (option,index) => {
        const payload = {
            option,
            index
        }
        emit("selectAnswer",payload);
    }
  </script>