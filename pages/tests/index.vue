<template>
  <div>
    <Analytics />
    <Testslist />
  </div>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
});
</script>

