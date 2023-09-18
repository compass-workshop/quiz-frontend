<template>
    <div>
        <div v-for="test in data" :key="test.id" class="shadow-lg">
            <div class="grid grid-cols-2 gap-x-64 w-full mt-10 mb-10 pl-6 py-4 text-2xl hover:shadow-xl">
                <div>
                    {{ test.name }}
                </div>
                <div>
                    <span>
                        <button class="border-4 border-red-800 p-2 bg-yellow-300 rounded-full">
                            <NuxtLink :to="`/test/${test.id}/launch`">Launch</NuxtLink>
                        </button>
                    </span>
                    <span :class="{'invisible': test.is_review}">
                        <span>&nbsp;| </span>
                        <button class="border-4 border-red-800 p-2 bg-yellow-300 rounded-full">Review</button>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const { data }=await useFetch('http://localhost:3000/tests');
</script>

<style scoped>

</style>