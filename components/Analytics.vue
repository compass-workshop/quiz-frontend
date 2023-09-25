<template>
  <div
    class="grid grid-cols-2 text-black-500 text-2xl gap-x-64 border-b-[2px]  border-gray-100 w-full mt-10 mb-10 gap-y-4 p-6"
  >
    <div>Test Attempted: {{ data?.TOTAL_TEST || 0 }}</div>
    <div>Passed Test: {{ data?.PASS_TEST || 0}}</div>
    <div>Average Score: {{ data?.AVG_SCORE || 0}}</div>
    <div>Failed Test: {{ (data?.TOTAL_TEST - data?.PASS_TEST) || 0}}</div>
    <div>Best Score: {{ data?.MAX_SCORE || 0}}</div>
  </div>
</template>

<script setup>
const userId = localStorage.getItem("userId");
const { base_url } = useRuntimeConfig().public;
const { data } = await useFetch(`${base_url}/analytics/${userId}`);
console.log(data.value);
</script>

<style scoped>
</style>