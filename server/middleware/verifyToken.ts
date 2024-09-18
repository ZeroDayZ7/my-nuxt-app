// server/middleware/verifyToken.ts
import { defineEventHandler, getRequestHeaders } from 'h3';
import { parseCookies } from '../utils/parseCookies';
import jwt from 'jsonwebtoken';



const JWT_SECRET = useRuntimeConfig().private.JWT_SECRET;

export default defineEventHandler(async (event) => {
  const headers = getRequestHeaders(event);
  const cookies = parseCookies(headers);
  const token = cookies['ACCESS_TOKEN'];
  console.log('HEADERS: ' + JSON.stringify(headers, null, 2));
  console.log('COOKIES: ' + JSON.stringify(cookies, null, 2));
  console.log('TOKEN: ' + JSON.stringify(token, null, 2));

  if (token) {
    try {
      // Sprawdź ważność tokena
      jwt.verify(token, JWT_SECRET);
      event.context.validToken = true; // Ustaw flagę, że token jest ważny
    } catch (error) {
      console.error('Error verifying token:', error);
      event.context.validToken = false; // Flaga, że token jest nieważny
    }
  } else {
    event.context.validToken = false; // Brak tokena
  }
});