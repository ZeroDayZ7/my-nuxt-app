export const saveToLocalStorage = (isLoggedIn: boolean) => {
  console.log("Save 'isLoggedIn' - localStorage:", isLoggedIn);
  localStorage.setItem("isLoggedIn", isLoggedIn.toString());
};

export const updateIsLoggedIn = (isLoggedInRef: any, value: boolean) => {
  isLoggedInRef.value = value; // Ustaw nową wartość isLoggedIn
  console.log(`Update 'IsLoggedIn': ${isLoggedInRef.value}`);
  saveToLocalStorage(isLoggedInRef.value); // Zapisz po aktualizacji
};
