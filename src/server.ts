import express from "express";
import alunoRoutes from "./routes/aluno.routes.js";
import planoRoutes from "./routes/plano.routes.js";
import professorRoutes from "./routes/professor.routes.js";
import matriculaRoutes from "./routes/matricula.routes.js";
import agendamentoRoutes from "./routes/agendamento.routes.js";
import usuarioRoutes from "./routes/usuario.routes.js";

const app = express();

app.use(express.json());

app.use("/alunos", alunoRoutes);
app.use("/planos", planoRoutes);
app.use("/professores", professorRoutes);
app.use("/matriculas", matriculaRoutes);
app.use("/agendamentos", agendamentoRoutes);
app.use("/usuarios", usuarioRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
