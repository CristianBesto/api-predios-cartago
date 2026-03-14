// API REST : GET, POST, PUT, DELETE => express
import express from "express";
import cors from "cors";
import PredioRutas from "./routes/predio.route.js";

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Rutas
app.use("/api", PredioRutas);

export default app;
