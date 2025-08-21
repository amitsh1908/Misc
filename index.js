import express from "express";
import pool from "./src/db/connection.js";
import authRoutes from "./src/route/authRoutes.js";
import { logger } from "./src/middleware/logger.js";
const app = express();

app.use(express.urlencoded({ extended: true }));



//view engine
app.set("view engine", "ejs");

app.use(logger);
app.use("/", authRoutes);

//server start for listening
app.listen(3000, () => {
  console.log("Server start for listening ");
});
