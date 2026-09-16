import express from "express";
import { errorMiddleware } from "./middlewares/error.middleware.js";
import alunoRoutes from "./routes/aluno.routes.js";
import planoRoutes from "./routes/plano.routes.js";
import professorRoutes from "./routes/professor.routes.js";
import matriculaRoutes from "./routes/matricula.routes.js";
import agendamentoRoutes from "./routes/agendamento.routes.js";
import usuarioRoutes from "./routes/usuario.routes.js";
import checkInRoutes from "./routes/checkIn.routes.js";
import pagamentoRoutes from "./routes/pagamento.routes.js";
import rolesRoutes from "./routes/role.routes.js";

const app = express();

app.use(express.json());
app.use("/checkIns", checkInRoutes);
app.use("/pagamentos", pagamentoRoutes);
app.use("/alunos", alunoRoutes);
app.use("/planos", planoRoutes);
app.use("/professores", professorRoutes);
app.use("/matriculas", matriculaRoutes);
app.use("/agendamentos", agendamentoRoutes);
app.use("/usuarios", usuarioRoutes);
app.use("/roles", rolesRoutes);

app.use(errorMiddleware);
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
