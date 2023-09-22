<template>
  <!-- design this copilot -->
  <div>
    <div class="flex flex-wrap mb-[8px] mx-auto">
      <div v-for="test in data" :key="test.id" class="m-[4px] w-[46%] mx-auto">
        <div
          class="grid grid-cols-2 gap-x-4 w-full py-4 px-6 text-xl justify-between items-center bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 dark:bg-gray-800 dark:text-white"
        >
          <div>
            {{ test.name }}
          </div>
          <div>
            <span>
              <button
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                <NuxtLink :to="`/tests/${test.id}/launch`">Launch</NuxtLink>
              </button>
            </span>
            <span :class="{ invisible: !test.isAttempted }">
              <button
                class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Review
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const userId = localStorage.getItem("userId");
const { data } = await useFetch(`http://localhost:3000/users/${userId}/tests`);
</script>

<style scoped>
</style>