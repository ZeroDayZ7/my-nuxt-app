// Funkcja do parsowania ciasteczek z nagłówków
export const parseCookies = (headers: Record<string, string>) => {
    const cookies = headers['cookie'] || '';
    return cookies.split(';').reduce((acc, cookie) => {
      const [key, value] = cookie.split('=');
      acc[key.trim()] = value;
      return acc;
    }, {} as Record<string, string>);
  };
  