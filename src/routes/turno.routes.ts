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
  /**
   * @swagger
   * /turnos:
   *   post:
   *     summary: Crear un nuevo turno
   *     tags: [Turnos]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/TurnoInput'
   *     responses:
   *       201:
   *         description: Turno creado correctamente
   */

router.get("/", obtenerTurnos);
  /**
   * @swagger
   * /turnos:
   *   get:
   *     summary: Obtener todos los turnos
   *     tags: [Turnos]
   *     responses:
   *       200:
   *         description: Lista de turnos
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 $ref: '#/components/schemas/Turno'
   */

router.get("/:id", obtenerTurnoPorId);
  /**
   * @swagger
   * /turnos/{id}:
   *   get:
   *     summary: Obtener un turno por ID
   *     tags: [Turnos]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *         description: ID del turno
   *     responses:
   *       200:
   *         description: Turno encontrado
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Turno'
   *       404:
   *         description: Turno no encontrado
   */

router.put("/:id", actualizarTurno);
/**
 * @swagger
 * /turnos/{id}:
 *   put:
 *     summary: Actualizar un turno
 *     tags: [Turnos]
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
 *             $ref: '#/components/schemas/TurnoInput'
 *     responses:
 *       200:
 *         description: Turno actualizado
 */

router.delete("/:id", eliminarTurno);
/**
 * @swagger
 * /turnos/{id}:
 *   delete:
 *     summary: Eliminar un turno
 *     tags: [Turnos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Turno eliminado
 */

export default router;