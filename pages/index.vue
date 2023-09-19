<template>
    <div v-if="!validEmail" class="container">
        <div class="input">
            <select class="select" v-model="id">
                <!-- give a placeholder select user -->

                <option value="03aecfad-2b7e-4cad-acef-aaa72db3c54b">Ashmeet</option>
                <option value="f7fca160-dec7-4b7e-9412-a5174be15b44">Rohit</option>
                <option value="0ca5d409-312e-4679-b732-fe439562cb74">Rohan</option>
                <option value="460760bb-f351-4c4c-94d8-cafff41e06d1">Nirmal</option>
                <option value="52134764-2a47-4cae-b972-a18eb4f6e46b">Susanto</option>
                <option value="8a43d941-4576-4b18-9204-74fdb1e76357">Sarthak</option>
                <option value="8f9d6ebc-8e0b-4864-b329-d91b5542790d">Gopal</option>
                <option value="a461a748-728b-4455-a52e-34be2fe289d3">Manoj</option>
                <option value="fd259a5b-8bf2-468f-ae96-0375b846e84a">Praveen</option>
            </select>
            <button @click="checkEmail">Submit</button>
        </div>
    </div>
</template>

<script setup>
   const id = ref(null);
   const validEmail =ref(false);
   const route = useRoute();
   definePageMeta({
       middleware: 'auth'
   })
   onMounted(()=>{
       id.value="03aecfad-2b7e-4cad-acef-aaa72db3c54b";
       
    })
    const checkEmail = ()=>{
        //set the email in the local storage
        localStorage.setItem("email",id.value);
        navigateTo('/tests')
    }

</script>

<style scoped>


.container {
    @apply flex  items-center justify-center;
    @apply w-full ;
    @apply min-h-[80vh];

}
.select{
    @apply p-3 mb-3 mr-3 w-full rounded-2xl;
    
}
.input {
  @apply text-center;
}

input {
    @apply p-3 mb-3 mr-3  ;
}

button {

    @apply p-3 mb-3 mr-3  bg-[#007bff] text-white font-bold py-2 px-4 rounded;
}
</style>
