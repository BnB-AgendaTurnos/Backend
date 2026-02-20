import { prisma } from "../prisma/client";

interface CrearUsuarioDTO {
  nombre: string;
  email: string;
  contrasena: string;
  telefono: string;
  rol: "ADMIN" | "CLIENTE";
}

interface ActualizarUsuarioDTO {
  nombre?: string;
  email?: string;
  telefono?: string;
  cuenta_estado?: "ACTIVA" | "INACTIVA";
}

export class UsuarioService {

  async crearUsuario(data: CrearUsuarioDTO) {
    return prisma.usuario.create({
      data: {
        nombre: data.nombre,
        email: data.email,
        contrasena: data.contrasena,
        telefono: data.telefono,
        rol: data.rol,
        cuenta_estado: "ACTIVA",
      },
    });
  }

  async obtenerUsuarios() {
    return prisma.usuario.findMany({
      select: {
        id_usuario: true,
        nombre: true,
        email: true,
        rol: true,
        cuenta_estado: true,
      },
    });
  }

  async obtenerUsuarioPorId(id: number) {
    return prisma.usuario.findUnique({
      where: { id_usuario: id },
      select: {
        id_usuario: true,
        nombre: true,
        email: true,
        telefono: true,
        rol: true,
        cuenta_estado: true,
      },
    });
  }

  async actualizarUsuario(id: number, data: ActualizarUsuarioDTO) {
    return prisma.usuario.update({
      where: { id_usuario: id },
      data,
    });
  }

  async eliminarUsuario(id: number) {
    return prisma.usuario.update({
      where: { id_usuario: id },
      data: { cuenta_estado: "INACTIVA" },
    });
  }

  async obtenerReservas(id_usuario: number) {
    return prisma.reserva.findMany({
      where: { id_usuario },
      include: {
        turno: true,
      },
    });
  }
}