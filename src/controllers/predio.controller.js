// Controlador para predio: escucha y responde las peticiones
import { PredioModel } from "../models/predio.model.js";

// Listar todos los predios
export const getPredios = async (req, res) => {
  try {
    const results = await PredioModel.findAll();
    res.json({ results });
  } catch (error) {
    res.status(500).json({ error: "Error al listar los predios" });
    console.log(error);
  }
};

// Buscar predio por ID
export const getPredioById = async (req, res) => {
  try {
    const results = await PredioModel.findById(req.params.id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({ error: "Error al buscar el predio" });
  }
};

// Crear un predio
export const createPredio = async (req, res) => {
  const data = {
    descripcion: req.body.descripcion,
    area: req.body.area,
    direccion: req.body.direccion,
    statusActivo: req.body.statusActivo,
    fotografia: req.body.fotografia,
    observaciones: req.body.observaciones,
    evaluo: req.body.evaluo,
  };

  try {
    const results = await PredioModel.create(data);
    res.json({ results });
  } catch (error) {
    res.status(500).json({ error: "Error al crear el predio" });
  }
};

// Borrado fisico
export const deletePredio = async (req, res) => {
  try {
    const results = await PredioModel.delete(req.params.id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el predio" });
  }
};

// Borrado logico: cambia statusActivo a 'inactivo'
export const deactivatePredio = async (req, res) => {
  try {
    const results = await PredioModel.deactivate(req.params.id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({ error: "Error al desactivar el predio" });
  }
};

// Editar un predio
export const updatePredio = async (req, res) => {
  try {
    const results = await PredioModel.update(req.params.id, req.body);
    res.json({ results });
  } catch (error) {
    res.status(500).json({ error: "Error al editar el predio" });
  }
};
