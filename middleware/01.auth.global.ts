// middleware/auth.ts

export default defineNuxtRouteMiddleware((to, from) => {
  const { isLoggedIn } = useAuth(); // Pobierz wartość isLoggedIn z kontekstu autoryzacji

  // Sprawdzenie, czy użytkownik jest zalogowany
  const isLoggedString = localStorage.getItem('isLoggedIn');

  if (isLoggedString !== null) {
    // Zamiana na liczbę
    if(isLoggedString === 'false'){
      isLoggedIn.value = false;
    }else{
      isLoggedIn.value = true;
    }}
   

    console.log(`AUTH LOCALSTORAGE: ${isLoggedString}`);
    console.log(`AUTH isLoggedIn: ${isLoggedIn.value}`);
    
  if (to.path !== "/" && !isLoggedIn.value) {
    console.log(`Access Denied`);
    return abortNavigation('Insufficient permissions.');
    // return navigateTo('/');
  }
});
