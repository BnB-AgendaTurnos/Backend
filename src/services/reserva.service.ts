import { prisma } from "../prisma/client";

interface CrearReservaDTO {
  id_usuario: number;
  id_turno: number;
}

export class ReservaService {

  async crearReserva(data: CrearReservaDTO) {

    const usuario = await prisma.usuario.findUnique({
      where: { id_usuario: data.id_usuario },
    });

    if (!usuario) {
      throw new Error("El usuario no existe");
    }

    const turno = await prisma.turno.findUnique({
      where: { id_turno: data.id_turno },
    });

    if (!turno) {
      throw new Error("El turno no existe");
    }

    const reservasActivas = await prisma.reserva.count({
      where: {
        id_turno: data.id_turno,
        reserva_estado: "RESERVADO",
      },
    });

    if (reservasActivas >= turno.cupo_maximo) {
      throw new Error("El turno no tiene cupo disponible");
    }

    return prisma.reserva.create({
      data: {
        id_usuario: data.id_usuario,
        id_turno: data.id_turno,
        reserva_estado: "RESERVADO",
      },
    });
  }

  async obtenerReservas() {
    return prisma.reserva.findMany({
      include: {
        usuario: true,
        turno: true,
      },
    });
  }

  async obtenerReservaPorId(id: number) {
    return prisma.reserva.findUnique({
      where: { id_reserva: id },
      include: {
        usuario: true,
        turno: true,
      },
    });
  }

  async cancelarReserva(id: number) { //No lo borro porque puede ser ocupado por otra persona, pero si la fecha ya pasó, por ahí se debería eliminar...
    return prisma.reserva.update({
      where: { id_reserva: id },
      data: {
        reserva_estado: "CANCELADO",
      },
    });
  }
}
