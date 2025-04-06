import { Router } from "express";
import HabitacionesController from "../controller/habitaciones.controller.js";

const habitacionesController = new HabitacionesController();

const router = Router();
router.post("/", habitacionesController.crearhabitacion);
router.get("/", habitacionesController.leerhabitaciones);
router.delete("/:id", habitacionesController.borrarhabitacionporid);
router.put("/:id", habitacionesController.modificarhabitacionporid);
export default router;

