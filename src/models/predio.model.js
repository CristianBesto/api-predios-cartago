// Capa modelo para el modulo de predios
import { db } from "./bdatos.js";

export const PredioModel = {
  // Listar todos los predios
  findAll: async () => {
    const sql = "SELECT * FROM predios ORDER BY idPredio";
    const [rows] = await db.query(sql);
    return rows;
  },

  // Buscar por ID
  findById: async (id) => {
    const sql = "SELECT * FROM predios WHERE idPredio = ?";
    const [rows] = await db.query(sql, [id]);
    return rows;
  },

  // Crear un nuevo predio
  create: async (data) => {
    const sql = "INSERT INTO predios SET ?";
    const [rows] = await db.query(sql, [data]);
    return rows;
  },

  // Borrado fisico
  delete: async (id) => {
    const sql = "DELETE FROM predios WHERE idPredio = ?";
    const [rows] = await db.query(sql, [id]);
    return rows;
  },

  // Borrado logico: actualiza statusActivo a 'inactivo'
  deactivate: async (id) => {
    const sql =
      "UPDATE predios SET statusActivo = 'inactivo' WHERE idPredio = ?";
    const [rows] = await db.query(sql, [id]);
    return rows;
  },

  // Editar un predio
  update: async (id, data) => {
    const sql = "UPDATE predios SET ? WHERE idPredio = ?";
    const [rows] = await db.query(sql, [data, id]);
    return rows;
  },
};
