// server/middleware/verifyToken.ts
import {
  defineEventHandler,
  getRequestHeaders,
  parseCookies,
} from "h3";
import jwt from "jsonwebtoken";

const config = useRuntimeConfig();
const JWT_SECRET = config.JWT_SECRET;

export default defineEventHandler(async (event) => {
  console.log("VeryfiToken");

  const cookies = parseCookies(event);

  if (!cookies || !cookies['ACCESS_TOKEN']) {
    event.context.validToken = false; // Brak tokena
    console.log(`=> Brak Tokenu=> ACCESS_TOKEN`);
    return;
  }

  const token = cookies['ACCESS_TOKEN'];
  
  try {
    // Sprawdź ważność tokena
    jwt.verify(token, JWT_SECRET);
    event.context.validToken = true; // Ustaw flagę, że token jest ważny
    console.log(`=> Token Ważny => ACCESS_TOKEN`);
  } catch (error) {
    console.error("Error verifying token:", error);
    event.context.validToken = false; // Flaga, że token jest nieważny
  }
});
