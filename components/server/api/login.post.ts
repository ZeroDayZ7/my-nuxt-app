// server/api/login.ts
import { defineEventHandler, readBody } from "h3";
import pool from "~/server/db";
import jwt from "jsonwebtoken";
import bcrypt from 'bcryptjs';
import { RowDataPacket } from "mysql2";

const config = useRuntimeConfig();
const JWT_SECRET: string = config.JWT_SECRET;
const COOKIE_NAME: string = config.COOKIE_NAME;
const COOKIE_MAX_AGE: number = parseInt(config.COOKIE_MAX_AGE);

export default defineEventHandler(async (event) => {
  console.log('Received request for /api/login');
  const body = await readBody(event);
  const { email, password } = body;

  if (!email || !password) {
    return { status: 400, message: "Email and password are required" };
  }

  console.log("User email:", email);
  console.log("Password from request:", password);
  try {
    // Sprawdź, czy użytkownik istnieje
    const [rows] = await pool.execute<RowDataPacket[]>("SELECT id, email, password, role FROM users WHERE email = ? LIMIT 1", [
      email,
    ]);
    if (rows.length === 0) {
      return { status: 401, message: "Nieprawidłowy login lub hasło." };
    }

    const user = rows[0];
    console.log(JSON.stringify(user, null, 2));

    // Porównaj hasło
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return { status: 401, message: "Nieprawidłowy login lub hasło." };
    }

    // Generuj token JWT
    const token = jwt.sign(
      { id: user.id, email: user.email, role:user.role }, JWT_SECRET,{ expiresIn: "1h" } // Token wygasa po 1 godzinie
    );

      // Ustaw ciasteczko
      setCookie(event, COOKIE_NAME, token, {
        httpOnly: true,
        secure: process.env.NODE_ENV  === 'production',
        maxAge: COOKIE_MAX_AGE,
        sameSite: "strict", // Możesz dostosować, np. 'Lax', 'None', 'Strict'
      });

    return { status: 200, token, message: "Logowanie poprawne" };
  } catch (error) {
    console.error("Server error:", error);
    return { status: 500, message: "Server error" };
  }
});
