<template>
    <div v-if="!validEmail" class="container">
        <div class="input">
            <input type="text" placeholder="Enter your email" v-model="email" />
            <button @click="checkEmail">Start</button>
        </div>
    </div>
    <div v-else>
        <Analytics />
        <Testslist />
    </div>
</template>

<script setup>
   const email = ref("");
   const id = ref("");
   const validEmail =ref(false);
    const checkEmail = async()=>{
        //check the email in the database

        // const response = await fetch(`http://localhost:3000/users/${email.value}`);
        // const data = await response.json();
        // if(data.length){
        //     validEmail.value = true;
        //     id.value = data[0].id;
        // }
        // else{
        //     validEmail.value = false;
        // }
        validEmail.value = true;
    }

</script>

<style scoped>


.container {
  display: flex;
  justify-content: center; 
  width: 100%;
  margin-left:4rem;
  align-items: center; 
  min-height: 80vh; 
}

.input {
  text-align: center;
}

input {
  padding: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
}

button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 10px;
}
</style>
