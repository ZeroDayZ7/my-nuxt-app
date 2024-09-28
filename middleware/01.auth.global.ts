// middleware/auth.ts

export default defineNuxtRouteMiddleware((to, from) => {
  const { isLoggedIn } = useAuth();
  const { isOpen } = useModalNuxtUi();

  const router = useRouter();

  const routes = router.getRoutes();
  const routeExists = routes.some((route) => route.path === to.path);

  const test = to.matched.length;
  console.log(`Sprawdzam Auth`);
  console.log("routeExists: " + routeExists);
  console.log("to.matched.length: " + test);
  console.log("isLoggedIn: " + isLoggedIn.value);

  // if (to.path !== '/' && !isLoggedIn.value) {
  //   throw createError({ statusCode: 403, statusMessage: 'Forbidden' });
  // }

  if (to.path !== "/") {
    if (!isLoggedIn.value) {
      isOpen.value = true;
      return navigateTo("/");
    }
  }

  //   if (to.path !== '/' && !isLoggedIn.value) {
  //     throw createError({ statusCode: 403, statusMessage: 'Forbidden' });
  //   }
  // }


  // if (to.path !== "/") {
  //   if (!isLoggedIn.value) {
  //     isOpen.value = true;
  //     console.log(`if (!isLoggedIn.value)`);
  //     return navigateTo("/");
  //   }

  //   if (!routeExists && !test) {
  //     console.log(`if(!routeExists && !test)`);
  //     return navigateTo("/AAA");
  //   }
  // }

  console.log(`Sprawdzam Auth`);
});
