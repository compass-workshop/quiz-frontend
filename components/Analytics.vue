<template>
  <div
    class="grid grid-cols-2 text-black-500 text-2xl gap-x-64 border-b-[2px]  border-gray-100 w-full mt-10 mb-10 gap-y-4 p-6"
  >
    <div>Test Attempted: {{ data.TOTAL_TEST }}</div>
    <div>Passed Test: {{ data.PASS_TEST }}</div>
    <div>Average Score: {{ data.AVG_SCORE }}</div>
    <div>Failed Test: {{ data.TOTAL_TEST - data.PASS_TEST }}</div>
    <div>Best Score: {{ data.MAX_SCORE }}</div>
  </div>
</template>

<script setup>
const userId = localStorage.getItem("userId");
const { data } = await useFetch(`http://localhost:3000/analytics/${userId}`);
console.log(data.value);
</script>

<style scoped>
</style>