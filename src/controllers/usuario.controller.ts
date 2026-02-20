import { Request, Response } from "express";
import { UsuarioService } from "../services/usuario.service";

const usuarioService = new UsuarioService();

export const crearUsuario = async (req: Request, res: Response) => {
  try {
    const { nombre, email, contrasena, telefono, rol } = req.body;

    if (!nombre || !email || !contrasena || !telefono || !rol) {
      return res.status(400).json({ error: "Faltan datos" });
    }

    const usuario = await usuarioService.crearUsuario({
      nombre,
      email,
      contrasena,
      telefono,
      rol,
    });

    res.status(201).json(usuario);
  } catch (error) {
    res.status(500).json({ error: "Error al crear usuario" });
  }
};

export const obtenerUsuarios = async (_req: Request, res: Response) => {
  try {
    const usuarios = await usuarioService.obtenerUsuarios();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener usuarios" });
  }
};

export const obtenerUsuarioPorId = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const usuario = await usuarioService.obtenerUsuarioPorId(id);

    if (!usuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener usuario" });
  }
};

export const actualizarUsuario = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const usuario = await usuarioService.actualizarUsuario(id, req.body);
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar usuario" });
  }
};

export const eliminarUsuario = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    await usuarioService.eliminarUsuario(id);

    res.json({ message: "Usuario desactivado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar usuario" });
  }
};

export const obtenerReservasDeUsuario = async (
  req: Request,
  res: Response
) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const reservas = await usuarioService.obtenerReservas(id);
    res.json(reservas);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener reservas" });
  }
};