import { Router } from "express";
import {
  crearUsuario,
  obtenerUsuarios,
  obtenerUsuarioPorId,
  actualizarUsuario,
  eliminarUsuario,
  obtenerReservasDeUsuario,
} from "../controllers/usuario.controller";

const router = Router();

router.post("/", crearUsuario);
  /**
   * @swagger
   * /usuarios:
   *   post:
   *     summary: Crear un nuevo usuario
   *     tags: [Usuarios]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/UsuarioInput'
   *     responses:
   *       201:
   *         description: Usuario creado correctamente
   */

router.get("/", obtenerUsuarios);
  /**
 * @swagger
 * /usuarios:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags: [Usuarios]
 *     responses:
 *       200:
 *         description: Lista de usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Usuario'
 */

router.get("/:id", obtenerUsuarioPorId);
  /**
   * @swagger
   * /usuarios/{id}:
   *   get:
   *     summary: Obtener un usuario por ID
   *     tags: [Usuarios]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Usuario encontrado
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Usuario'
   *       404:
   *         description: Usuario no encontrado
   */

router.put("/:id", actualizarUsuario);
  /**
   * @swagger
   * /usuarios/{id}:
   *   put:
   *     summary: Actualizar un usuario
   *     tags: [Usuarios]
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
   *             $ref: '#/components/schemas/UsuarioInput'
   *     responses:
   *       200:
   *         description: Usuario actualizado
   */

router.delete("/:id", eliminarUsuario);
  /**
   * @swagger
   * /usuarios/{id}:
   *   delete:
   *     summary: Eliminar un usuario
   *     tags: [Usuarios]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Usuario eliminado
   */

router.get("/:id/reservas", obtenerReservasDeUsuario);
/**
 * @swagger
 * /usuarios/{id}/reservas:
 *   get:
 *     summary: Obtener todas las reservas de un usuario
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Lista de reservas del usuario
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Reserva'
 *       404:
 *         description: Usuario no encontrado
 */

export default router;