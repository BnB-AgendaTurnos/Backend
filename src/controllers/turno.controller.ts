import { Request, Response } from "express";
import { TurnoService } from "../services/turno.service";

const turnoService = new TurnoService();

export async function crearTurno(req: Request, res: Response) {
  try {
    const turno = await turnoService.crearTurno(req.body);
    res.status(201).json(turno);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear turno" });
  }
}

export async function obtenerTurnos(req: Request, res: Response) {
  try {
    const turnos = await turnoService.obtenerTurnos();
    res.json(turnos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener turnos" });
  }
}

export async function obtenerTurnoPorId(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const turno = await turnoService.obtenerTurnoPorId(id);

    if (!turno) {
      return res.status(404).json({ error: "Turno no encontrado" });
    }

    res.json(turno);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener turno" });
  }
}

export async function actualizarTurno(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const turno = await turnoService.actualizarTurno(id, req.body);
    res.json(turno);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar turno" });
  }
}

export async function eliminarTurno(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    await turnoService.eliminarTurno(id);
    res.json({ message: "Turno eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar turno" });
  }
}