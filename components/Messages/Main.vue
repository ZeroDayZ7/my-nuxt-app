<!-- MessengerComponent.vue -->
<template>
    <div class="flex h-screen">
  <USlideover v-model="isOpen">
      <div class="p-4 flex-1">
        <UButton
          color="gray"
          variant="ghost"
          size="sm"
          icon="i-heroicons-x-mark-20-solid"
          class="flex sm:hidden absolute end-5 top-5 z-10"
          square
          padded
          @click="isOpen = false"
        />
         <!-- ==================== Lista kontaktów ==================== -->
      <div>
        <div class="p-4 mr-8">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Szukaj rozmów..."
            class="w-full p-2 border rounded"
          />
        </div>
        <div class="overflow-y-auto h-[calc(100vh-70px)]">
          <div
            v-for="contact in filteredContacts"
            :key="contact.id"
            @click="handleContactClick(contact)"
            class="p-4 cursor-pointer"
            :class="{ 'bg-blue-700': selectedContact?.id === contact.id }"
          >
            <div class="flex items-center">
              <img :src="contact.avatar" alt="Avatar" class="w-10 h-10 rounded-full mr-3" />
              <div>
                <div class="font-bold">{{ contact.name }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- ==================================================================== -->
      </div>
    </USlideover>
  
      <!-- Główny obszar czatu -->
      <div class="flex-1 flex flex-col">
        <!-- Nagłówek czatu -->
       
        <div class="p-4 flex justify-between items-center border-b" @click="isOpen = true">
          <div v-if="selectedContact" class="flex items-center">
            <img :src="selectedContact.avatar" alt="Avatar" class="w-10 h-10 rounded-full mr-3" />
            <div class="font-bold">{{ selectedContact.name }}</div>
          </div>
          <div class="flex space-x-2">
            <button class="p-2 hover:bg-green-100 rounded">
              <i class="fas fa-archive"></i>
            </button>
            <button class="p-2 hover:bg-green-100 rounded">
              <i class="fas fa-cog"></i>
            </button>
          </div>
        </div>
  
        <!-- Wiadomości -->
        <div class="flex-1 overflow-y-auto p-2" ref="messagesContainer">
          <div v-for="message in selectedContact?.messages" :key="message.id" class="mb-4">
            <div
              :class="[
                'max-w-xs p-2 rounded-lg',
                message.sender === 'user'
                  ? 'bg-blue-700 text-white ml-auto'
                  : 'bg-gray-300 text-black'
              ]"
            >
              {{ message.content }}
            </div>
            <div v-if="message.image" class="mt-2">
              <img :src="message.image" alt="Załączone zdjęcie" class="max-w-xs rounded-lg" />
            </div>
          </div>
        </div>
  
        <!-- Pole wprowadzania wiadomości -->
        <div class="p-4 border-t">
          <div class="flex items-center">
            <button class="p-2 green:bg-gray-100 rounded mr-2">
              <i class="far fa-image"></i>
            </button>
            <button class="p-2 green:bg-gray-100 rounded mr-2">
              <i class="far fa-smile"></i>
            </button>
            <input
              v-model="newMessage"
              @keyup.enter="sendMessage"
              type="text"
              placeholder="Napisz wiadomość..."
              class="flex-1 p-2 border rounded"
            />
            <button @click="sendMessage" class="ml-2 p-2 bg-blue-500 text-white rounded hover:bg-green-600">
              <i class="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted, nextTick } from 'vue';
  const isOpen = ref(false);

  const handleContactClick = (contact) => {
  selectContact(contact); // Wywołaj istniejącą logikę
  isOpen.value = false;
};

  const contacts = ref([
    {
      id: 1,
      name: 'Anna Kowalska',
      avatar: '/my-nuxt-app/users/avatar/12.jpg',
      lastMessage: 'Cześć, co słychać?',
      messages: [
        { id: 1, content: 'Cześć, co słychać?', sender: 'contact' },
        { id: 2, content: 'Hej! Wszystko w porządku, a u Ciebie?', sender: 'user' },
        { id: 3, content: 'Świetnie, dzięki! Masz plany na weekend?', sender: 'contact' },
        { id: 4, content: 'Myślałem o wycieczce za miasto. Może się wybierzemy?', sender: 'user' },
        { id: 5, content: 'Brzmi super! Gdzie chciałbyś pojechać?', sender: 'contact' },
        { id: 6, content: 'Może nad jezioro? Pogoda ma być ładna.', sender: 'user' },
        { id: 7, content: 'Świetny pomysł! Ustalmy szczegóły.', sender: 'contact' },
      ]
    },
    {
      id: 2,
      name: 'Jan Nowak',
      avatar: '/my-nuxt-app/users/avatar/12.jpg',
      lastMessage: 'Spotkajmy się jutro o 15:00',
      messages: [
        { id: 1, content: 'Cześć Jan, masz chwilę?', sender: 'user' },
        { id: 2, content: 'Hej, jasne. O co chodzi?', sender: 'contact' },
        { id: 3, content: 'Chciałbym omówić projekt. Kiedy masz czas?', sender: 'user' },
        { id: 4, content: 'Może jutro o 15:00?', sender: 'contact' },
        { id: 5, content: 'Pasuje mi. Gdzie się spotkamy?', sender: 'user' },
        { id: 6, content: 'W biurze, sala konferencyjna na 2 piętrze.', sender: 'contact' },
        { id: 7, content: 'Świetnie, do zobaczenia!', sender: 'user' },
      ]
    },
    {
      id: 3,
      name: 'Maria Wiśniewska',
      avatar: '/my-nuxt-app/users/avatar/12.jpg',
      lastMessage: 'Dziękuję za pomoc!',
      messages: [
        { id: 1, content: 'Cześć Maria, jak idzie praca nad prezentacją?', sender: 'user' },
        { id: 2, content: 'Hej! Powoli do przodu, ale mam kilka pytań.', sender: 'contact' },
        { id: 3, content: 'Jasne, w czym mogę pomóc?', sender: 'user' },
        { id: 4, content: 'Mam problem z formatowaniem wykresów. Mógłbyś rzucić okiem?', sender: 'contact' },
        { id: 5, content: 'Oczywiście. Wyślij mi to, co masz, a ja sprawdzę.', sender: 'user' },
        { id: 6, content: 'Świetnie, wysyłam za chwilę. Dziękuję za pomoc!', sender: 'contact' },
        { id: 7, content: 'Nie ma sprawy, zawsze chętnie pomogę.', sender: 'user' },
      ]
    },
    {
      id: 4,
      name: 'Piotr Zieliński',
      avatar: '/my-nuxt-app/users/avatar/12.jpg',
      lastMessage: 'Do zobaczenia na treningu!',
      messages: [
        { id: 1, content: 'Hej Piotr, jesteś gotowy na dzisiejszy trening?', sender: 'user' },
        { id: 2, content: 'Cześć! Tak, nie mogę się doczekać. O której się spotykamy?', sender: 'contact' },
        { id: 3, content: 'Standardowo o 18:00 na siłowni. Pamiętasz?', sender: 'user' },
        { id: 4, content: 'Racja, zapomniałem. Będę na pewno!', sender: 'contact' },
        { id: 5, content: 'Super. Masz jakieś specjalne życzenia co do treningu?', sender: 'user' },
        { id: 6, content: 'Może skupmy się dziś na nogach? Dawno nie robiłem porządnego treningu nóg.', sender: 'contact' },
        { id: 7, content: 'Dobry pomysł. Przygotuję plan. Do zobaczenia na treningu!', sender: 'user' },
      ]
    },
    {
      id: 5,
      name: 'Katarzyna Lewandowska',
      avatar: '/my-nuxt-app/users/avatar/12.jpg',
      lastMessage: 'Projekt jest już prawie gotowy',
      messages: [
        { id: 1, content: 'Cześć Kasia, jak wygląda postęp prac nad projektem?', sender: 'user' },
        { id: 2, content: 'Hej! Mam dobre wieści. Projekt jest już prawie gotowy.', sender: 'contact' },
        { id: 3, content: 'Świetnie! Kiedy możemy spodziewać się finalnej wersji?', sender: 'user' },
        { id: 4, content: 'Myślę, że do końca tygodnia wszystko będzie dopięte na ostatni guzik.', sender: 'contact' },
        { id: 5, content: 'Brzmi obiecująco. Potrzebujesz jeszcze jakiegoś wsparcia?', sender: 'user' },
        { id: 6, content: 'Na tę chwilę chyba nie. Ale dam znać, jeśli coś się zmieni.', sender: 'contact' },
        { id: 7, content: 'Dobrze, trzymam kciuki. Czekam na finalną wersję!', sender: 'user' },
      ]
    }
    ,
    {
      id: 6,
      name: 'Katarzyna Lewandowska',
      avatar: '/my-nuxt-app/users/avatar/12.jpg',
      lastMessage: 'Projekt jest już prawie gotowy',
      messages: [
        { id: 1, content: 'Cześć Kasia, jak wygląda postęp prac nad projektem?', sender: 'user' },
        { id: 2, content: 'Hej! Mam dobre wieści. Projekt jest już prawie gotowy.', sender: 'contact' },
        { id: 3, content: 'Świetnie! Kiedy możemy spodziewać się finalnej wersji?', sender: 'user' },
        { id: 4, content: 'Myślę, że do końca tygodnia wszystko będzie dopięte na ostatni guzik.', sender: 'contact' },
        { id: 5, content: 'Brzmi obiecująco. Potrzebujesz jeszcze jakiegoś wsparcia?', sender: 'user' },
        { id: 6, content: 'Na tę chwilę chyba nie. Ale dam znać, jeśli coś się zmieni.', sender: 'contact' },
        { id: 7, content: 'Dobrze, trzymam kciuki. Czekam na finalną wersję!', sender: 'user' },
      ]
    }
    ,
    {
      id: 7,
      name: 'Katarzyna Lewandowska',
      avatar: '/my-nuxt-app/users/avatar/12.jpg',
      lastMessage: 'Projekt jest już prawie gotowy',
      messages: [
        { id: 1, content: 'Cześć Kasia, jak wygląda postęp prac nad projektem?', sender: 'user' },
        { id: 2, content: 'Hej! Mam dobre wieści. Projekt jest już prawie gotowy.', sender: 'contact' },
        { id: 3, content: 'Świetnie! Kiedy możemy spodziewać się finalnej wersji?', sender: 'user' },
        { id: 4, content: 'Myślę, że do końca tygodnia wszystko będzie dopięte na ostatni guzik.', sender: 'contact' },
        { id: 5, content: 'Brzmi obiecująco. Potrzebujesz jeszcze jakiegoś wsparcia?', sender: 'user' },
        { id: 6, content: 'Na tę chwilę chyba nie. Ale dam znać, jeśli coś się zmieni.', sender: 'contact' },
        { id: 7, content: 'Dobrze, trzymam kciuki. Czekam na finalną wersję!', sender: 'user' },
      ]
    }
    ,
    {
      id: 8,
      name: 'Katarzyna Lewandowska',
      avatar: '/my-nuxt-app/users/avatar/12.jpg',
      lastMessage: 'Projekt jest już prawie gotowy',
      messages: [
        { id: 1, content: 'Cześć Kasia, jak wygląda postęp prac nad projektem?', sender: 'user' },
        { id: 2, content: 'Hej! Mam dobre wieści. Projekt jest już prawie gotowy.', sender: 'contact' },
        { id: 3, content: 'Świetnie! Kiedy możemy spodziewać się finalnej wersji?', sender: 'user' },
        { id: 4, content: 'Myślę, że do końca tygodnia wszystko będzie dopięte na ostatni guzik.', sender: 'contact' },
        { id: 5, content: 'Brzmi obiecująco. Potrzebujesz jeszcze jakiegoś wsparcia?', sender: 'user' },
        { id: 6, content: 'Na tę chwilę chyba nie. Ale dam znać, jeśli coś się zmieni.', sender: 'contact' },
        { id: 7, content: 'Dobrze, trzymam kciuki. Czekam na finalną wersję!', sender: 'user' },
      ]
    }
    ,
    {
      id: 9,
      name: 'Katarzyna Lewandowska',
      avatar: '/my-nuxt-app/users/avatar/12.jpg',
      lastMessage: 'Projekt jest już prawie gotowy',
      messages: [
        { id: 1, content: 'Cześć Kasia, jak wygląda postęp prac nad projektem?', sender: 'user' },
        { id: 2, content: 'Hej! Mam dobre wieści. Projekt jest już prawie gotowy.', sender: 'contact' },
        { id: 3, content: 'Świetnie! Kiedy możemy spodziewać się finalnej wersji?', sender: 'user' },
        { id: 4, content: 'Myślę, że do końca tygodnia wszystko będzie dopięte na ostatni guzik.', sender: 'contact' },
        { id: 5, content: 'Brzmi obiecująco. Potrzebujesz jeszcze jakiegoś wsparcia?', sender: 'user' },
        { id: 6, content: 'Na tę chwilę chyba nie. Ale dam znać, jeśli coś się zmieni.', sender: 'contact' },
        { id: 7, content: 'Dobrze, trzymam kciuki. Czekam na finalną wersję!', sender: 'user' },
      ]
    }
    ,
    {
      id: 10,
      name: 'Katarzyna Lewandowska',
      avatar: '/my-nuxt-app/users/avatar/12.jpg',
      lastMessage: 'Projekt jest już prawie gotowy',
      messages: [
        { id: 1, content: 'Cześć Kasia, jak wygląda postęp prac nad projektem?', sender: 'user' },
        { id: 2, content: 'Hej! Mam dobre wieści. Projekt jest już prawie gotowy.', sender: 'contact' },
        { id: 3, content: 'Świetnie! Kiedy możemy spodziewać się finalnej wersji?', sender: 'user' },
        { id: 4, content: 'Myślę, że do końca tygodnia wszystko będzie dopięte na ostatni guzik.', sender: 'contact' },
        { id: 5, content: 'Brzmi obiecująco. Potrzebujesz jeszcze jakiegoś wsparcia?', sender: 'user' },
        { id: 6, content: 'Na tę chwilę chyba nie. Ale dam znać, jeśli coś się zmieni.', sender: 'contact' },
        { id: 7, content: 'Dobrze, trzymam kciuki. Czekam na finalną wersję!', sender: 'user' },
      ]
    }
  ]);
  
  const selectedContact = ref(null);
  const newMessage = ref('');
  const searchQuery = ref('');
  const messagesContainer = ref(null);
  
  const filteredContacts = computed(() => {
    if (!searchQuery.value) return contacts.value;
    return contacts.value.filter(contact =>
      contact.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      contact.lastMessage.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });
  
  const selectContact = (contact) => {
    selectedContact.value = contact;
    nextTick(() => {
      if (messagesContainer.value) {
        messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
      }
    });
  };
  
  const sendMessage = () => {
    if (newMessage.value.trim() && selectedContact.value) {
      selectedContact.value.messages.push({
        id: selectedContact.value.messages.length + 1,
        content: newMessage.value,
        sender: 'user'
      });
      selectedContact.value.lastMessage = newMessage.value;
      newMessage.value = '';
      nextTick(() => {
        if (messagesContainer.value) {
          messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
        }
      });
    }
  };
  
  onMounted(() => {
    if (contacts.value.length > 0) {
      selectContact(contacts.value[0]);
    }
  });
  </script>