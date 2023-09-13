<template>
    <div class="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow-lg">
      <h1 class="text-xl font-semibold mb-4">{{ question }}</h1>
  
      <div class="space-y-2">
        <div v-for="(option, index) in options" :key="index" class="flex items-center">
          <input :id="`option${index}${questionIndex}`" type="radio" :name="`answer${questionIndex}`" :value="option" v-model="selectedOption" @click="changeAnswer(option,questionIndex)" >
          <label :for="`option${index}`" class="ml-2">{{ `Option ${String.fromCharCode(65 + index)}: ${option}` }}</label>
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
    
  });
  const emit = defineEmits(["selectAnswer"]);
    const { question, options, questionIndex,answer,index } = toRefs(props);
    const selectedOption = ref(answer.value);
    const changeAnswer = (option,index) => {
        const payload = {
            option,
            index: questionIndex.value
        }
        emit("selectAnswer",payload);
    }
  </script>