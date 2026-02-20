import { prisma } from "../prisma/client";

interface CrearTurnoDTO {
    fecha: string;
    hora_inicio: string;
    hora_fin: string;
    cupo_maximo: number;
    id_sucursal: number;
}

interface ActualizarTurnoDTO {
    fecha?: string;
    hora_inicio?: string;
    hora_fin?: string;
    cupo_maximo?: number;
}

export class TurnoService {
    async crearTurno(data: CrearTurnoDTO) {
        const sucursal = await prisma.sucursal.findUnique({
            where: { id_sucursal: data.id_sucursal },
        });

        if (!sucursal) {
            throw new Error("La sucursal no existe");
        }
        return prisma.turno.create({
            data: {
                fecha: new Date(data.fecha),
                hora_inicio: new Date(`1970-01-01T${data.hora_inicio}:00Z`),
                hora_fin: new Date(`1970-01-01T${data.hora_fin}:00Z`),
                cupo_maximo: data.cupo_maximo,
                id_sucursal: data.id_sucursal,
            },
        });
    }


    async obtenerTurnos() {
        return prisma.turno.findMany({
            include: {
                sucursal: true,
            },
        });
    }

    async obtenerTurnoPorId(id: number) {
        return prisma.turno.findUnique({
            where: { id_turno: id },
            include: {
                sucursal: true,
                reservas: true,
            },
        });
    }

    async actualizarTurno(id: number, data: ActualizarTurnoDTO) {
        const datosActualizados: any = {};

        if (data.fecha) {
            datosActualizados.fecha = new Date(data.fecha);
        }

        if (data.hora_inicio) {
            datosActualizados.hora_inicio = new Date(
                `1970-01-01T${data.hora_inicio}:00Z`
            );
        }

        if (data.hora_fin) {
            datosActualizados.hora_fin = new Date(
                `1970-01-01T${data.hora_fin}:00Z`
            );
        }

        if (data.cupo_maximo !== undefined) {
            datosActualizados.cupo_maximo = data.cupo_maximo;
        }

        return prisma.turno.update({
            where: { id_turno: id },
            data: datosActualizados,
        });
    }

    async eliminarTurno(id: number) {
        return prisma.turno.delete({
            where: { id_turno: id },
        });
    }
}