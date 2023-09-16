<template>
    <div>
        <div v-for="test in data" :key="test.id"
        class="shadow-lg">
            <div class="grid grid-cols-2 gap-x-64 w-full mt-10 mb-10 pl-6 py-4 text-2xl hover:shadow-xl">
                <div>
                    {{ test.id }} | {{ test.name }}
                </div>
                <div class="">
                    <span>
                        <button>Launch</button>
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
  const data =
    [
        {
            id: 123,
            name: "Test1",
            is_review: false
        },
        {
            id: 456,
            name: "Test2",
            is_review: true
        },
        {
            id: 789,
            name: "Test3",
            is_review: false
        },
        {
            id: 102,
            name: "Test4",
            is_review: true
        }
    ]
</script>

<style scoped>

</style>