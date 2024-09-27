import fs from "fs";

export default defineEventHandler(async (event) => {
  const base = "data";
  const filePath = path.join(base, event.context.params.name);

  return sendStream(event, fs.createReadStream(filePath));
});