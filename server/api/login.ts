// server/api/login.ts
import { defineEventHandler, readBody } from "h3";
import pool from "~/server/db"; // Importuj skonfigurowane połączenie
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"; // Jeśli używasz bcrypt do haszowania haseł

const JWT_SECRET = useRuntimeConfig().private.JWT_SECRET;
const COOKIE_NAME = useRuntimeConfig().private.COOKIE_NAME; // Nazwa ciasteczka
const COOKIE_MAX_AGE = parseInt(useRuntimeConfig().private.COOKIE_MAX_AGE, 10); // Maksymalny czas życia ciasteczka
const COOKIE_SECURE = useRuntimeConfig().private.COOKIE_SECURE;

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email, password } = body;

  if (!email || !password) {
    return { status: 400, message: "Email and password are required" };
  }

  console.log("User email:", email);
  console.log("Password from request:", password);
  try {
    // Sprawdź, czy użytkownik istnieje
    const [rows] = await pool.query("SELECT id, email, password, role FROM users WHERE email = ?", [
      email,
    ]);
    if (rows.length === 0) {
      return { status: 401, message: "Invalid credentials" };
    }

    const user = rows[0];
    console.log(JSON.stringify(user, null, 2));

    // Porównaj hasło
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return { status: 401, message: "Invalid credentials" };
    }

    // Generuj token JWT
    const token = jwt.sign(
      { id: user.id, email: user.email, role:user.role }, JWT_SECRET,{ expiresIn: "1h" } // Token wygasa po 1 godzinie
    );

      // Ustaw ciasteczko
      setCookie(event, COOKIE_NAME, token, {
        httpOnly: true,
        secure: COOKIE_SECURE,
        maxAge: COOKIE_MAX_AGE,
        sameSite: 'Strict', // Możesz dostosować, np. 'Lax', 'None', 'Strict'
      });

    return { status: 200, token };
  } catch (error) {
    console.error("Server error:", error);
    return { status: 500, message: "Server error" };
  }
});
