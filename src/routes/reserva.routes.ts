import { Router } from "express";
import {
  crearReserva,
  obtenerReservas,
  obtenerReservaPorId,
  cancelarReserva,
} from "../controllers/reserva.controller";

const router = Router();

router.post("/", crearReserva);
router.get("/", obtenerReservas);
router.get("/:id", obtenerReservaPorId);
router.put("/:id/cancelar", cancelarReserva);

export default router;