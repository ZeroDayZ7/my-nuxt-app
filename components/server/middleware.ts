import verifyToken from "./middleware/verifyToken";

export default defineEventHandler(async (event) => {
  await verifyToken(event); // Najpierw sprawdź token
});