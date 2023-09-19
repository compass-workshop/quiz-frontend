//get the email from the local storage and check if it is available or not
const getEmail = () => {
    // console.log(process.client)
  if(process.client){
    return localStorage.getItem("email");
  }
    return null;
};
export default defineNuxtRouteMiddleware((to, from) => {
  const email = getEmail();
  
  if (to.path === "/") {
    if (email) {
      return navigateTo("/tests");
    }else
    return true;
  }
  console.log(to.path,email)
  if (email!==null) {
    return true;
  } else {
    return navigateTo("/");
  }
});
