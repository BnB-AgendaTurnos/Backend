import { Request, Response } from "express";
import { SucursalService } from "../services/sucursal.service";

const sucursalService = new SucursalService();

export async function crearSucursal(req: Request, res: Response) {
  try {
    const {
      nombre,
      telefono,
      direccion,
      horario_apertura,
      horario_cierre,
    } = req.body;

    if (
      !nombre ||
      !telefono ||
      !direccion ||
      !horario_apertura ||
      !horario_cierre
    ) {
      return res.status(400).json({ error: "Faltan datos" });
    }

    const sucursal = await sucursalService.crearSucursal({
      nombre,
      telefono,
      direccion,
      horario_apertura,
      horario_cierre,
    });

    res.status(201).json(sucursal);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear sucursal" });
  }
}

export async function obtenerSucursales(req: Request, res: Response) {
  try {
    const sucursales = await sucursalService.obtenerSucursales();
    res.json(sucursales);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener sucursales" });
  }
}

export async function obtenerSucursalPorId(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const sucursal = await sucursalService.obtenerSucursalPorId(id);

    if (!sucursal) {
      return res.status(404).json({ error: "Sucursal no encontrada" });
    }

    res.json(sucursal);
  } catch (error) {
    res.status(400).json({ error: "Error al obtener sucursal" });
  }
}

export async function actualizarSucursal(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);
    const sucursal = await sucursalService.actualizarSucursal(id, req.body);
    res.json(sucursal);
  } catch (error) {
    res.status(400).json({ error: "Error al actualizar sucursal" });
  }
}