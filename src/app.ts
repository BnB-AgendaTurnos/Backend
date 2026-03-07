import express from "express";
import cors from "cors";

import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger";

import turnoRoutes from "./routes/turno.routes";
import sucursalRoutes from "./routes/sucursal.routes";
import reservaRoutes from "./routes/reserva.routes";
import usuarioRoutes from "./routes/usuario.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.use("/turnos", turnoRoutes);
app.use("/reservas", reservaRoutes);
app.use("/sucursales", sucursalRoutes);
app.use("/usuarios", usuarioRoutes);

export default app;