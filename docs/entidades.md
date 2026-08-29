## Levantamento de Entidades

# ALUNO
- id
- nome
- email
- cpf
- endereço
- dataNascimento
- telefone


# USUARIO
- id
- nome
- email
- senha
- role


# PROFESSOR
- id
- nome
- cpf
- email


# PLANO
- id
- nome
- preco
- beneficios
- status


# MATRICULA
- id
- alunoId
- planoId
- dataInicio
- status


# PAGAMENTO
- id
- matriculaId
- valor
- dataPagamento
- dataVencimento
- status


# AGENDAMENTO
- id
- alunoId
- professorId
- data
- hora
- status


# CHECK_IN
- id
- alunoId
- data
- hora
- status