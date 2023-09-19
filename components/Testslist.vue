<template>
    <div>
        <div v-for="test in data" :key="test.id"
        class="shadow-lg">
            <div class="grid grid-cols-2 gap-x-64 w-full mt-10 mb-10 pl-6 py-4 text-2xl hover:shadow-xl">
                <div>
                    {{ test.name }}
                </div>
                <div class="">
                    <span>
                        <NuxtLink :to="`/test/${test.id}/launch`">Launch</NuxtLink>
                    </span>
                    <span :class="{'invisible': test.is_review}">
                        <button>&nbsp;| Review</button>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    const { data } = await useFetch('http://localhost:3002/tests');
</script>

<style scoped>

</style>