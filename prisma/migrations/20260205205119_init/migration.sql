-- CreateEnum
CREATE TYPE "Rol" AS ENUM ('ADMIN', 'PROFESOR', 'CLIENTE');

-- CreateEnum
CREATE TYPE "EstadoCuenta" AS ENUM ('ACTIVA', 'INACTIVA');

-- CreateEnum
CREATE TYPE "EstadoReserva" AS ENUM ('RESERVADO', 'CANCELADO', 'ASISTIO', 'AUSENTE');

-- CreateTable
CREATE TABLE "Usuario" (
    "id_usuario" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "contrasena" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "cuenta_estado" "EstadoCuenta" NOT NULL,
    "rol" "Rol" NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "Sucursal" (
    "id_sucursal" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "horario_apertura" TIME NOT NULL,
    "horario_cierre" TIME NOT NULL,

    CONSTRAINT "Sucursal_pkey" PRIMARY KEY ("id_sucursal")
);

-- CreateTable
CREATE TABLE "Turno" (
    "id_turno" SERIAL NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "hora_inicio" TIME NOT NULL,
    "hora_fin" TIME NOT NULL,
    "cupo_maximo" INTEGER NOT NULL,
    "id_sucursal" INTEGER NOT NULL,

    CONSTRAINT "Turno_pkey" PRIMARY KEY ("id_turno")
);

-- CreateTable
CREATE TABLE "Reserva" (
    "id_reserva" SERIAL NOT NULL,
    "reserva_estado" "EstadoReserva" NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "id_turno" INTEGER NOT NULL,

    CONSTRAINT "Reserva_pkey" PRIMARY KEY ("id_reserva")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- AddForeignKey
ALTER TABLE "Turno" ADD CONSTRAINT "Turno_id_sucursal_fkey" FOREIGN KEY ("id_sucursal") REFERENCES "Sucursal"("id_sucursal") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reserva" ADD CONSTRAINT "Reserva_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reserva" ADD CONSTRAINT "Reserva_id_turno_fkey" FOREIGN KEY ("id_turno") REFERENCES "Turno"("id_turno") ON DELETE RESTRICT ON UPDATE CASCADE;
