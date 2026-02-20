import { Router } from "express";
import {
  crearTurno,
  obtenerTurnos,
  obtenerTurnoPorId,
  actualizarTurno,
  eliminarTurno,
} from "../controllers/turno.controller";

const router = Router();

router.post("/", crearTurno);
router.get("/", obtenerTurnos);
router.get("/:id", obtenerTurnoPorId);
router.put("/:id", actualizarTurno);
router.delete("/:id", eliminarTurno);

export default router;