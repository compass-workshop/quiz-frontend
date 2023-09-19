<template>
     <div >
        <Analytics />
        <ListTest />
    </div>
</template>

<script setup>
definePageMeta({
  middleware: "auth",
});
</script>

