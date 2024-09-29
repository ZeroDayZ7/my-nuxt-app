<script setup lang="ts">
import Error403 from '~/components/Errors/403.vue';
import Error404 from '~/components/Errors/404.vue';
import Error500 from '~/components/Errors/500.vue';

// Importuj inne komponenty błędów w razie potrzeby

// Definiujemy interfejs dla obiektu error, gdzie statusCode może być dowolną liczbą
interface ErrorProps {
  statusCode: number; // Może to być dowolny kod błędu, np. 403, 404, 500 itp.
}

// Typujemy propsy z wykorzystaniem interfejsu ErrorProps
const props = defineProps<{
  error: ErrorProps;
}>();

// Mapowanie kodów błędów na komponenty
const errorComponents: Record<number, any> = {
  403: Error403,
  404: Error404,
  500: Error500,
  // Możesz dodać więcej komponentów błędów według potrzeby, np. 500: Error500
};

// Zmienna przechowująca odpowiedni komponent błędu
const currentErrorComponent = errorComponents[props.error.statusCode] || null;

const handleError = () => clearError({ redirect: '/' });
</script>

<template>
  <div>
    <component :is="currentErrorComponent" v-if="currentErrorComponent" />
    <div v-else>{{ error.statusCode }}</div>
    <div><button @click="handleError">Go to the home page</button></div>
  </div>
</template>
