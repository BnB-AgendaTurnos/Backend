import { Router } from "express";
import {
  crearSucursal,
  obtenerSucursales,
  obtenerSucursalPorId,
  actualizarSucursal 
} from "../controllers/sucursal.controller";

const router = Router();

router.post("/", crearSucursal);
router.get("/", obtenerSucursales);
router.get("/:id", obtenerSucursalPorId);
router.put("/:id", actualizarSucursal);


export default router;