import swaggerJsdoc from "swagger-jsdoc";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Sistema de Gestión de Turnos API",
      version: "1.0.0",
      description: "Documentación de la API para la gestión de turnos.",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Servidor local",
      },
    ],
  },
  apis: [
    "./src/routes/*.ts",
    "./src/docs/*.ts"
  ],
};

export const swaggerSpec = swaggerJsdoc(options);