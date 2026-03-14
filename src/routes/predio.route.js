// Rutas del modulo predio
import { Router } from "express";
import * as PredioController from "../controllers/predio.controller.js";

const router = Router();

// Listar todos los predios
router.get("/predio/listartodos", PredioController.getPredios);

// Buscar predio por ID
router.get("/predio/listarporid/:id", PredioController.getPredioById);

// Crear un predio
router.post("/predio/crear", PredioController.createPredio);

// Eliminar fisicamente un predio
router.delete("/predio/borrar/:id", PredioController.deletePredio);

// Eliminar logicamente un predio (cambia statusActivo a 'inactivo')
router.put("/predio/desactivar/:id", PredioController.deactivatePredio);

// Editar un predio
router.put("/predio/editar/:id", PredioController.updatePredio);

export default router;
