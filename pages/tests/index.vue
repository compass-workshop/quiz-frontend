<template>
     <div >
        <Analytics />
        <TestsList />
    </div>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
});
</script>

