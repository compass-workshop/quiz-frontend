//get the email from the local storage and check if it is available or not
const getemail = () => {
    if(process.client){
        return localStorage.getItem('email')
    }
    return null;
}
export default defineNuxtRouteMiddleware((to, from) => {
    const email =getemail()
    if(to.path === '/'){
        if(email){
            return navigateTo('/tests');
        }
        return true;
    }
    if (email) {
        return true;
    }else{
        return navigateTo('/')
    }
    
})


