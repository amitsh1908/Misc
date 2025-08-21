// src/middleware/logger.js
export const logger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // important! warna request aage route tak nahi jaayegi
};
