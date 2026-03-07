/**
 * @swagger
 * components:
 *   schemas:
 *     Usuario:
 *       type: object
 *       properties:
 *         id_usuario:
 *           type: integer
 *           example: 1
 *         nombre:
 *           type: string
 *           example: Juan Pérez
 *         email:
 *           type: string
 *           example: juan@email.com
 *         telefono:
 *           type: string
 *           example: "1123456789"
 *         cuenta_estado:
 *           type: string
 *           example: ACTIVA
 *         rol:
 *           type: string
 *           example: CLIENTE
 *
 *     UsuarioInput:
 *       type: object
 *       required:
 *         - nombre
 *         - email
 *         - contrasena
 *         - telefono
 *         - rol
 *       properties:
 *         nombre:
 *           type: string
 *           example: Juan Pérez
 *         email:
 *           type: string
 *           example: juan@email.com
 *         contrasena:
 *           type: string
 *           example: password123
 *         telefono:
 *           type: string
 *           example: "1123456789"
 *         rol:
 *           type: string
 *           example: CLIENTE
 *
 *     Turno:
 *       type: object
 *       properties:
 *         id_turno:
 *           type: integer
 *           example: 1
 *         fecha:
 *           type: string
 *           format: date
 *           example: "2026-03-10"
 *         hora_inicio:
 *           type: string
 *           example: "10:00:00"
 *         hora_fin:
 *           type: string
 *           example: "11:00:00"
 *         cupo_maximo:
 *           type: integer
 *           example: 10
 *         id_sucursal:
 *           type: integer
 *           example: 2
 *
 *     TurnoInput:
 *       type: object
 *       required:
 *         - fecha
 *         - hora_inicio
 *         - hora_fin
 *         - cupo_maximo
 *         - id_sucursal
 *       properties:
 *         fecha:
 *           type: string
 *           format: date
 *           example: "2026-03-10"
 *         hora_inicio:
 *           type: string
 *           example: "10:00:00"
 *         hora_fin:
 *           type: string
 *           example: "11:00:00"
 *         cupo_maximo:
 *           type: integer
 *           example: 10
 *         id_sucursal:
 *           type: integer
 *           example: 2
 *
 *     Sucursal:
 *       type: object
 *       properties:
 *         id_sucursal:
 *           type: integer
 *           example: 1
 *         nombre:
 *           type: string
 *           example: Sucursal Centro
 *         telefono:
 *           type: string
 *           example: "1144556677"
 *         direccion:
 *           type: string
 *           example: Av. Corrientes 1234
 *         horario_apertura:
 *           type: string
 *           example: "08:00:00"
 *         horario_cierre:
 *           type: string
 *           example: "20:00:00"
 *
 *     SucursalInput:
 *       type: object
 *       required:
 *         - nombre
 *         - telefono
 *         - direccion
 *         - horario_apertura
 *         - horario_cierre
 *       properties:
 *         nombre:
 *           type: string
 *           example: Sucursal Centro
 *         telefono:
 *           type: string
 *           example: "1144556677"
 *         direccion:
 *           type: string
 *           example: Av. Corrientes 1234
 *         horario_apertura:
 *           type: string
 *           example: "08:00:00"
 *         horario_cierre:
 *           type: string
 *           example: "20:00:00"
 *
 *     Reserva:
 *       type: object
 *       properties:
 *         id_reserva:
 *           type: integer
 *           example: 1
 *         reserva_estado:
 *           type: string
 *           example: RESERVADO
 *         id_usuario:
 *           type: integer
 *           example: 5
 *         id_turno:
 *           type: integer
 *           example: 3
 *
 *     ReservaInput:
 *       type: object
 *       required:
 *         - id_usuario
 *         - id_turno
 *       properties:
 *         id_usuario:
 *           type: integer
 *           example: 5
 *         id_turno:
 *           type: integer
 *           example: 3
 */