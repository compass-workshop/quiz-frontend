//get the email from the local storage and check if it is available or not
const getemail = () => {
    if(process.client){
        return localStorage.getItem('email')
    }
    return null;
}
export default defineNuxtRouteMiddleware((to, from) => {
    const email =getemail()
    if(!email){
        return true;
    }
    return navigateTo('/tests')
})

