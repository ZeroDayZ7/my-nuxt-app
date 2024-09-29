<template>
  <div>
    <Accordion :initialTabs="accordionTabs" :allowMultiple="false">
      <template #tab1>
        <div class="flex flex-col">
          <UButton class="mt-2" to="/users/Profile" icon="i-heroicons-fire" color="blue">Dowód osobisty</UButton>
          <UButton class="mt-2" to="/users/DriverLicense" icon="i-heroicons-fire" color="blue">Prawo jazdy</UButton>
          <UButton class="mt-2" to="/test/test" icon="i-heroicons-fire" color="blue" disabled>Paszport</UButton>
          <UButton class="mt-2" to="/test/test" icon="i-heroicons-fire" color="blue" disabled>Legitymacje</UButton>
        </div>
      </template>
      <template #tab2>
        <div class="flex flex-col">
          <UButton class="mt-2" to="/test/test" icon="i-heroicons-fire" color="blue">E-recepty</UButton>
          <UButton class="mt-2" to="/test/test" icon="i-heroicons-fire" color="blue">Historia zdrowia</UButton>
          <UButton class="mt-2" to="/test/test" icon="i-heroicons-fire" color="blue">Ubezpieczenie zdrowotne</UButton>
        </div>
      </template>
      <template #tab3>
        <div class="flex flex-col">
          <UButton class="mt-2" to="/test/test" icon="i-heroicons-fire" color="blue">Wnioski online</UButton>
          <UButton class="mt-2" to="/test/test" icon="i-heroicons-fire" color="blue">Rejestracja pojazdów</UButton>
          <UButton class="mt-2" to="/test/test" icon="i-heroicons-fire" color="blue">Podatki</UButton>
          <UButton class="mt-2" to="/test/test" icon="i-heroicons-fire" color="blue">ZUS</UButton>
          <UButton class="mt-2" to="/test/test" icon="i-heroicons-fire" color="blue">Urząd skarbowy</UButton>
        </div>
      </template>
      <template #tab4>
        <div class="flex flex-col">
          <UButton class="mt-2" to="/test/test" icon="i-heroicons-fire" color="blue">Oferty pracy</UButton>
        </div>
      </template>
      <template #tab5>
        <div class="flex flex-col">
          <UButton class="mt-2" to="/test/test" icon="i-heroicons-fire" color="blue">Informacje o statusie studiów, ocenach</UButton>
        </div>
      </template>
      <template #tab6>
        <div class="flex flex-col">
          <UButton class="mt-2" to="/test/test" icon="i-heroicons-fire" color="blue">Bilety komunikacji miejskiej</UButton>
        </div>
      </template>
      <template #tab7>
        <div class="flex flex-col">
          <UButton class="mt-2" to="/test/test" icon="i-heroicons-fire" color="blue">Kalendarz</UButton>
          <UButton class="mt-2" to="/test/test" icon="i-heroicons-fire" color="blue">FAQ</UButton>
          <UButton class="mt-2" to="/test/test" icon="i-heroicons-fire" color="blue">Feedback: Możliwość zgłaszania uwag i sugestii dotyczących aplikacji.</UButton>
        </div>
      </template>
    </Accordion>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Accordion from '@/components/Ui/Accordion.vue'

const accordionTabs = ref([
  { title: 'Dokumenty osobiste', name: 'tab1', isOpen: false, isDisabled: false },
  { title: 'E-recepty i zdrowie', name: 'tab2', isOpen: false, isDisabled: false },
  { title: 'Usługi publiczne', name: 'tab3', isOpen: false, isDisabled: false },
  { title: 'Edukacja', name: 'tab4', isOpen: false, isDisabled: false },
  { title: 'Praca', name: 'tab5', isOpen: false, isDisabled: false },
  { title: 'Transport', name: 'tab6', isOpen: false, isDisabled: false },
  { title: 'Dodatkowe funkcje', name: 'tab7', isOpen: false, isDisabled: false }
])

</script>

<style scoped>
.w {
  display: flex;
  flex-direction: column;
}
</style>
