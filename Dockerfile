# Używamy obrazu Node.js jako bazowego
FROM node:20.10.0

# Ustawienie katalogu roboczego
WORKDIR /app

# Skopiowanie plików package.json oraz package-lock.json
COPY package*.json ./

# Kopiowanie pliku .env do kontenera
COPY .env ./

# Ustaw zmienne środowiskowe
# ENV VITE_API_URL=http://localhost:3000
# ENV DB_HOST=localhost
# ENV DB_USER=root
# ENV DB_PASSWORD=root
# ENV DB_NAME=my-nuxt-app
# ENV JWT_SECRET=ABC
# ENV COOKIE_NAME=ACCESS_TOKEN
# ENV COOKIE_MAX_AGE=3600000
# ENV COOKIE_SECURE=true

# Instalacja zależności
RUN npm install

# Skopiowanie wszystkich plików projektu do katalogu roboczego
COPY . .

# Kompilacja projektu Nuxt (dla SSR)
RUN npm run build

# Eksponowanie portu 3000, na którym działa Nuxt
EXPOSE 3001

# Uruchomienie aplikacji
CMD ["npm", "run", "start"]
