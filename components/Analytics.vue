<template>
    <div class="grid grid-cols-2 text-orange-500 text-2xl gap-x-64 border-b-4 border-orange-500 w-full mt-10 mb-10 gap-y-4 p-6">
        <div>Test Attempted: {{ data.attempted }}</div>
        <div>Passed Test: {{ data.passed }}</div>
        <div>Average Score: {{ data.average_score }}</div>
        <div>Failed Test: {{ data.failed }}</div>
        <div>Best Score: {{ data.best_score }}</div>
    </div>
</template>

<script setup>
  const data = { // will fetch from api
    attempted: 5,
    average_score: 15,
    best_score: 18,
    passed: 3,
    failed: 2
  }

</script>

<style scoped>
</style>