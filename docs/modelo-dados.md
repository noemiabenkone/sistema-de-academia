# Modelo de Dados

## Aluno 
- id int PK
- nome string, not null
- email string, not null
- cpf string, not null, unique
- endereço string, not null
- dataNascimento date, not null
- telefone string not null

# USUARIO
- id int PK
- nome string, not null
- email string, not null
- senha string, not null 
- role string, not null


# PROFESSOR
- id int PK 
- nome string, not null
- cpf string , not null, unique
- email string, not null


# PLANO
- id int PK 
- nome string, not null
- preco decimal, not null
- beneficios string, not null
- status string, not null


# MATRICULA
- id int PK
- alunoId int FK
- planoId int FK
- dataInicio date, not null
- status string, not null


# PAGAMENTO
- id int PK
- matriculaId int FK
- valor decimal, not null
- dataPagamento date, null
- dataVencimento date, not null
- status string, not null


# AGENDAMENTO
- id int PK 
- alunoId int FK
- professorId int FK
- data date, not null
- hora time, not null
- status string, not null


# CHECK_IN
- id int PK 
- alunoId int FK
- data date, not null
- hora time, not null
- status string, not null