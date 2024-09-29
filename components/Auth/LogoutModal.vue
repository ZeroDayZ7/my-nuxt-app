<script setup lang="ts">
import { logoutUser } from '~/services/auth';

const { isOpen } = useModalNuxtUi();
const { isLoggedIn } = useAuth();
// const isSubmitting = useSubmitting();
const isSubmitting = ref(false);
const isLogout = ref(false);
const messageError = ref('');

interface AuthResponse {
  token?: string;
  status?: number;
  message: string;
}


const handleLogoutNo = () => {
  isLogout.value = false; // Zamknij modal po wylogowaniu
  messageError.value = '';
};

const handleLogoutYes = async () => {
  if (isSubmitting.value) return;  // Zapobiegaj wielokrotnemu wysyłaniu

  isSubmitting.value = true;

  setTimeout(() => {
    isSubmitting.value = false;
    // messageError.value = "Coś poszło nie tak!"
    isOpen.value = false;
    isLoggedIn.value = false;
    isLogout.value = false;
    navigateTo('/');
  }, 1000);
  return;

  // Zrób zapytanie do API o logowanie
  try {
    const response: AuthResponse = await logoutUser();

    if ('token' in response) { // Sprawdzamy, czy odpowiedź zawiera token
      isLoggedIn.value = false;
      isLogout.value = false; // Zamknij modal po wylogowaniu
      isOpen.value = false; 
    } else {
      messageError.value = response.message; // Używamy wiadomości z błędu
    }
  } catch (error) {
    messageError.value = 'Wystąpił błąd podczas logowania.';
    console.error('Błąd logowania:', error);
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <div>
    <UButton icon="i-heroicons-power" color="orange" @click="isLogout = true" />
        <!-- Modal wylogowania -->
        <UModal v-model="isLogout" :ui="{
          container: 'min-h-0 lg:min-h-full'
        }">
          <UCard>
            <template #header>
              <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                Czy na pewno chcesz się wylogować?
              </h3>
            </template>
            <div class="flex justify-end space-x-2 mt-4">
              <p v-if="messageError" class="error absolute left-5">{{ messageError }}</p>
              <UButton color="red" class="min-w-[80px] h-[40px] flex items-center justify-center" @click="handleLogoutYes" :loading="isSubmitting" autofocus>{{!isSubmitting ? 'TAK' : ''}}</UButton>
              <UButton color="gray" @click="handleLogoutNo">NIE</UButton>
            </div>
          </UCard>
        </UModal>
      </div>
</template>



<style scoped></style>