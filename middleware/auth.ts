//get the email from the local storage and check if it is available or not
const getEmail = () => {
  if (process.client) {
    return localStorage.getItem("email");
  }
  return;
};
export default defineNuxtRouteMiddleware((to, from) => {
  const email = getEmail();

  if (to.path === "/") {
    if (email) {
      return navigateTo("/tests");
    }
    return true;
  }

  if (email) {
    return true;
  }
  return navigateTo("/");
});
