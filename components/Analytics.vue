<template>
    <div class="grid grid-cols-2 text-orange-500 text-2xl gap-x-64 border-b-4 border-orange-500 w-full mt-10 mb-10 gap-y-4 p-6">
        <div>Test Attempted: {{ data.TOTAL_TEST }}</div>
        <div>Passed Test: {{ data.PASSED_TEST }}</div>
        <div>Average Score: {{ data.AVG_SCORE }}</div>
        <div>Failed Test: {{ data.TOTAL_TEST - data.PASSED_TEST }}</div>
        <div>Best Score: {{ data.MAX_SCORE }}</div>
    </div>
</template>

<script setup>
  const {data} = await useFetch('http://localhost:3000/analytics/1');
</script>

<style scoped>
</style>