## Sistema de Academia

# Sobre o projeto

API backend para gerenciamento de uma academia, desenvolvida como projeto de portfólio para praticar desenvolvimento backend, organização de código, banco de dados, validação de dados e implementação de regras de negócio.

O sistema permite gerenciar alunos, professores, planos, matrículas, pagamentos, agendamentos e check-ins.

# Objetivo

O projeto foi desenvolvido para centralizar informações que poderiam ser controladas manualmente por papel ou planilhas.

# Problemas considerados:

dificuldade para consultar informações dos alunos;

controle manual de pagamentos;

dificuldade para acompanhar matrículas;

informações espalhadas em diferentes locais;

risco de perda de dados.

# Funcionalidades

Cadastro, consulta, atualização e desativação de alunos;

Cadastro e consulta de professores;

Cadastro e gerenciamento de planos;

Gerenciamento de matrículas;

Registro e consulta de pagamentos;

Criação, consulta, atualização e cancelamento de agendamentos;

Registro e consulta de check-ins;

Cadastro e gerenciamento de usuários e roles;

Validação de dados com Zod;

Tratamento centralizado de erros.

# Regras de negócio

Um aluno não pode possuir mais de uma matrícula ativa;

O CPF do aluno deve ser único;

Um aluno não pode possuir dois agendamentos ativos no mesmo horário;

Um professor não pode possuir dois agendamentos ativos no mesmo horário;

Todo pagamento deve estar vinculado a uma matrícula existente;

O pagamento é registrado com status PAGO pelo backend;

A data de pagamento é registrada automaticamente;

A data de vencimento é calculada automaticamente;

O check-in exige uma matrícula ativa;

De 1 a 7 dias de atraso, o check-in permanece liberado;

A partir do 8º dia de atraso, o check-in é bloqueado;

Cada tentativa de check-in é registrada.

## Tecnologias utilizadas

Node.js

Express

TypeScript

PostgreSQL

Prisma ORM

Zod

Git

GitHub

## Estrutura do projeto

src/
├── controllers/
├── errors/
├── middlewares/
├── routes/
├── schemas/
├── services/
└── generated/

Routes: definem os endpoints da API;

Controllers: recebem requisições e retornam respostas;

Services: concentram regras de negócio e operações com o banco;

Schemas: validam os dados recebidos;

Middlewares: processam comportamentos compartilhados, como tratamento de erros;

Errors: contém os erros personalizados da aplicação.

## Banco de dados

O projeto utiliza PostgreSQL e Prisma ORM.

# Principais entidades:

Aluno

Professor

Plano

Matrícula

Pagamento

Agendamento

Check-in

Usuário

Role

## Como executar o projeto

1. Clonar o repositório

git clone https://github.com/noemiabenkone/sistema-de-academia.git

2. Entrar na pasta

cd sistema-de-academia

3. Instalar as dependências

npm install

4. Configurar o ambiente

Crie um arquivo .env na raiz:

DATABASE_URL="sua_connection_string_do_postgresql"

Utilize seu próprio banco PostgreSQL.

5. Executar as migrations

npx prisma migrate dev

6. Iniciar o servidor

Utilize o comando definido nos scripts do package.json.

Endpoints principais

Método

Endpoint

Descrição

GET

/alunos

Lista os alunos

POST

/alunos

Cria um aluno

GET

/alunos/:id

Busca um aluno

PUT

/alunos/:id

Atualiza um aluno

PATCH

/alunos/:id/desativar

Desativa um aluno

GET

/professores

Lista os professores

POST

/professores

Cria um professor

GET

/planos

Lista os planos

POST

/planos

Cria um plano

GET

/matriculas

Lista as matrículas

POST

/matriculas

Cria uma matrícula

GET

/pagamentos

Lista os pagamentos

POST

/pagamentos

Registra um pagamento

GET

/checkIns

Lista os check-ins

POST

/checkIns

Registra um check-in

GET

/agendamentos

Lista os agendamentos

POST

/agendamentos

Cria um agendamento

# Exemplos de requisições

Criar aluno

{
  "nome": "Maria Silva",
  "cpf": "12345678901",
  "email": "maria@email.com",
  "telefone": "11999999999",
  "dataNascimento": "2000-01-15"
}

Registrar pagamento

{
  "matriculaId": 1,
  "valor": 100
}

O backend controla automaticamente o status, a data do pagamento e a data de vencimento.

Registrar check-in

{
  "alunoId": 1
}

O backend verifica a matrícula ativa e as regras relacionadas ao pagamento antes de registrar o check-in.

# Validação e tratamento de erros

Os dados recebidos pela API são validados utilizando Zod.

Os erros da aplicação são tratados por um middleware centralizado.

Principais respostas HTTP:

400 — dados inválidos;

404 — recurso não encontrado;

409 — conflito ou violação de regra de negócio;

500 — erro interno do servidor.

Para regras de negócio, foi criado o erro personalizado AppError.

# Testes

Durante o desenvolvimento, os endpoints e as regras de negócio foram testados manualmente utilizando um cliente HTTP.

Foram verificados:

criação e consulta de registros;

validação dos dados;

regras de matrícula;

conflitos de agendamento;

registro de pagamentos;

regras de check-in;

respostas de erro da API.

Status do projeto

# Concluído — projeto de portfólio.

O projeto foi desenvolvido com foco em aprendizado e prática de desenvolvimento backend, desde a documentação e modelagem até a implementação da API e suas regras de negócio.