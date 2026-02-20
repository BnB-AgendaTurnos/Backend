import { prisma } from "../prisma/client";

interface CrearSucursalDTO {
  nombre: string;
  telefono: string;
  direccion: string;
  horario_apertura: string; // HH:mm
  horario_cierre: string;   // HH:mm
}

interface ActualizarSucursalDTO {
  nombre?: string;
  telefono?: string;
  direccion?: string;
  horario_apertura?: string;
  horario_cierre?: string;
}

export class SucursalService {
  async crearSucursal(data: CrearSucursalDTO) {
    return prisma.sucursal.create({
      data: {
        nombre: data.nombre,
        telefono: data.telefono,
        direccion: data.direccion,
        horario_apertura: new Date(`1970-01-01T${data.horario_apertura}:00Z`), //Para que no me de error, igual me toma solo la hora que le pase
        horario_cierre: new Date(`1970-01-01T${data.horario_cierre}:00Z`),
      },
    });
  }

  async obtenerSucursales() {
    return prisma.sucursal.findMany();
  }

  async obtenerSucursalPorId(id: number) {
    return prisma.sucursal.findUnique({
      where: { id_sucursal: id },
      include: {
        turnos: true,
      },
    });
  }

  async actualizarSucursal(id: number, data: ActualizarSucursalDTO) {
    const datosActualizados: any = {};

    if (data.nombre) datosActualizados.nombre = data.nombre;
    if (data.telefono) datosActualizados.telefono = data.telefono;
    if (data.direccion) datosActualizados.direccion = data.direccion;

    if (data.horario_apertura) {
      datosActualizados.horario_apertura = new Date(
        `1970-01-01T${data.horario_apertura}:00Z`
      );
    }

    if (data.horario_cierre) {
      datosActualizados.horario_cierre = new Date(
        `1970-01-01T${data.horario_cierre}:00Z`
      );
    }

    return prisma.sucursal.update({
      where: { id_sucursal: id },
      data: datosActualizados,
    });
  }
}