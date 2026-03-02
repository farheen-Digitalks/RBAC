import express from "express";
import cors from "cors";
import { connectDB } from "./config/connection.js";

const app = express();
connectDB();

app.use(
  cors({
    origin: "*", // frontend
    credentials: true, // ⭐ required
  }),
);
app.use(express.json());

import allRoutes from "./routes/routes.js";
app.use("/api", allRoutes);

app.get("/", (req, res) => {
  res.send("SaaS API running");
});

app.get("/health", (req, res) => {
  res.send("OK");
});

export default app;
