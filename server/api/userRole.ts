import { defineEventHandler } from 'h3';
import jwt from 'jsonwebtoken';
import pool from '~/server/db'; // Importuj połączenie z bazą danych

const JWT_SECRET = useRuntimeConfig().private.JWT_SECRET;

export default defineEventHandler(async (event) => {
  console.log('userRole');
  if (event.context.validToken) {
    const headers = getRequestHeaders(event);
    const cookies = parseCookies(headers);
    const token = cookies['ACCESS_TOKEN'];

    if (token) {
      try {
        // Zweryfikuj token i uzyskaj ID użytkownika
        const decoded = jwt.verify(token, JWT_SECRET) as { id: number };

        // Pobierz rolę użytkownika z bazy danych
        const [rows] = await pool.query('SELECT role FROM users WHERE id = ?', [decoded.id]);
        const user = rows[0];

        return { role: user?.role || 'guest' };
      } catch (error) {
        console.error('Error fetching user role:', error);
        return { role: 'guest' }; // Domyślna rola w przypadku błędu
      }
    }
  }
  return { role: 'guest' }; // Domyślna rola, jeśli token nieważny
});
