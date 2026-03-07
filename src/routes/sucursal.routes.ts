import { Router } from "express";
import {
  crearSucursal,
  obtenerSucursales,
  obtenerSucursalPorId,
  actualizarSucursal 
} from "../controllers/sucursal.controller";

const router = Router();

router.post("/", crearSucursal);
  /**
 * @swagger
 * /sucursales:
 *   post:
 *     summary: Crear una nueva sucursal
 *     tags: [Sucursales]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SucursalInput'
 *     responses:
 *       201:
 *         description: Sucursal creada correctamente
 */

router.get("/", obtenerSucursales);
  /**
 * @swagger
 * /sucursales:
 *   get:
 *     summary: Obtener todas las sucursales
 *     tags: [Sucursales]
 *     responses:
 *       200:
 *         description: Lista de sucursales
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Sucursal'
 */

router.get("/:id", obtenerSucursalPorId);
  /**
 * @swagger
 * /sucursales/{id}:
 *   get:
 *     summary: Obtener una sucursal por ID
 *     tags: [Sucursales]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Sucursal encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Sucursal'
 */

router.put("/:id", actualizarSucursal);
/**
 * @swagger
 * /sucursales/{id}:
 *   put:
 *     summary: Actualizar una sucursal
 *     tags: [Sucursales]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SucursalInput'
 *     responses:
 *       200:
 *         description: Sucursal actualizada
 */


export default router;