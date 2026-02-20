import { Request, Response } from "express";
import { ReservaService } from "../services/reserva.service";

const reservaService = new ReservaService();

export async function crearReserva(req: Request, res: Response) {
  try {
    const reserva = await reservaService.crearReserva(req.body);
    res.status(201).json(reserva);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
}

export async function obtenerReservas(req: Request, res: Response) {
  const reservas = await reservaService.obtenerReservas();
  res.json(reservas);
}

export async function obtenerReservaPorId(req: Request, res: Response) {
  const id = Number(req.params.id);
  const reserva = await reservaService.obtenerReservaPorId(id);
  res.json(reserva);
}

export async function cancelarReserva(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const reserva = await reservaService.cancelarReserva(id);
    res.json(reserva);
  } catch (error) {
    res.status(400).json({ error: "No se pudo cancelar la reserva" });
  }
}