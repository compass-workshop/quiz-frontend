<template>
    <div v-if="!validEmail" class="container">
        <div class="input">
            <select class="p-3 mb-3 mr-3 w-full rounded-2xl" v-model="id">
                <!-- give a placeholder select user -->

                <option v-for="user in users" :value="user.userId">{{ user.firstName }} {{ user.lastName}}</option>
            </select>
            <button @click="checkEmail">Submit</button>
        </div>
    </div>
</template>

<script setup>
   const id = ref(null);
   const validEmail =ref(false);
   const route = useRoute();
   const users = ref(
    [
  {
    "email": "susanto.mandal@mailsac.com",
    "firstName": "Susanto",
    "userId": "11fb14f6-cc4b-4bac-a875-bf8074c0235b",
    "lastName": "Mandal"
  },
  {
    "email": "sarthak.jain@mailsac.com",
    "firstName": "Sarthak",
    "userId": "19e4b894-3789-40cb-9524-4002a1a180a5",
    "lastName": "Jain"
  },
  {
    "email": "rohit.kumar@mailsac.com",
    "firstName": "Rohit",
    "userId": "2347dbe0-b383-4e72-8a26-1fecb2ee574c",
    "lastName": "Kumar"
  },
  {
    "email": "manoj.saini@mailsac.com",
    "firstName": "Manoj",
    "userId": "708f270d-5956-44f6-89ea-a8a8ffa3af46",
    "lastName": "Saini"
  },
  {
    "email": "ashmeet.kaur@mailsac.com",
    "firstName": "Ashmeet",
    "userId": "d2fba718-d25e-429e-a0f9-ec5640cba84d",
    "lastName": "Kaur"
  },
  {
    "email": "gopal.gupta@mailsac.com",
    "firstName": "Gopal",
    "userId": "d50e5046-5d43-4c92-ac02-fe7a56eab0d8",
    "lastName": "Gupta"
  },
  {
    "email": "praveen.kumar@mailsac.com",
    "firstName": "Praveen",
    "userId": "de7977fc-955a-4682-8c3e-0f27dd1caac5",
    "lastName": "Kumar"
  },
  {
    "email": "nirmal.kumar@mailsac.com",
    "firstName": "Nirmal",
    "userId": "e1bd0700-0f7f-4831-adaf-b34f7adba18f",
    "lastName": "Kumar"
  },
  {
    "email": "rohan.goel@mailsac.com",
    "firstName": "Rohan",
    "userId": "fb8fa005-93d8-4ddb-bb7a-14747e4f0e4a",
    "lastName": "Goel"
  }
]

   )
   definePageMeta({
       middleware: 'auth'
   })
   onMounted(()=>{
       id.value = users.value[0].userId
    })

    const checkEmail = ()=>{
        //set the email in the local storage
        const user = users.value.find(user => id.value === user.userId)
        localStorage.setItem("userId",user.userId);
        localStorage.setItem("email",user.email);
        localStorage.setItem("userName", user.firstName + " " + user.lastName);
        navigateTo('/tests')
    }

</script>

<style scoped>


.container {
    @apply flex  items-center justify-center w-full  min-h-[80vh];

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
