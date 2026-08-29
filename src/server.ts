import express from "express";
import alunoRoutes from "./routes/aluno.routes.js";

const app = express();

app.use(express.json());

app.use("/alunos", alunoRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});