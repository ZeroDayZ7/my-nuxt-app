import type { NitroFetchOptions } from "nitropack";

// Konfiguracja API
const API_CONFIG = {
  baseUrl: "http://localhost:3001/my-nuxt-app",
  defaultHeaders: {
    "Content-Type": "application/json",
  },
};

// Typy dla metod HTTP
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "HEAD" | "OPTIONS" | "CONNECT" | "TRACE";

// Interfejs dla opcji żądania API
interface ApiClientOptions extends Omit<NitroFetchOptions<any>, 'method'> {
  method?: HttpMethod;
}

// Klasa do wykonywania żądań API
class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string = API_CONFIG.baseUrl) {
    this.baseUrl = baseUrl;
  }

  async request<T>(endpoint: string, options: ApiClientOptions = {}): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const { method = 'GET', headers = {}, ...restOptions } = options;

    const response = await $fetch<T>(url, {
      method,
      headers: {
        ...API_CONFIG.defaultHeaders,
        ...headers,
      },
      ...restOptions,
    });

    return response as T;
  }
}

// Eksport instancji ApiClient
export const apiClient = new ApiClient();
