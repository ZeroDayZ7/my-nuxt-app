// // middleware/logRequests.ts
import {
  defineEventHandler,
  getRouterParams,
  getRequestURL,
  getHeaders,
  getQuery,
} from "h3";

export default defineEventHandler(async (event) => {
  // Logowanie metody
  console.log(`==========================================`);
  console.log("New method: " + event.method);
  console.log("New headers: " + JSON.stringify(getHeaders(event), null, 2));
  console.log("New Params: " + JSON.stringify(getRouterParams(event), null, 2));
  console.log("New cookies: " + JSON.stringify(parseCookies(event), null, 2));
  console.log("New params: " + JSON.stringify(getQuery(event), null, 2));
  console.log("New request: " + getRequestURL(event));
  console.log(`==========================================`);
});
