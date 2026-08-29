# Sistema de Gerenciamento de Academia

## objetivo

Desenvolver um sistema para gerenciar alunos, professores, 
 planos e pagamentos, substituindo o controle manual atualmente realizado e papel e planilha.


## Usuarios do Sistema

- Aluno
- Professore
- Recepcionista
- Gerente


## Problemas Identificados

- Demora para localizar informaçoẽs dos Alunos. 
- Controle manual de pagamentos.
- Dificuldades para acompanhar matrículas. 
- Informaçoẽs espalhadas em papeis.
- Risco de perda de dados. 


## Requisitos Funcionais 

- RF01 - Cadastrar Aluno 
- RF02 - Editar Aluno 
- RF03 - Desativar Aluno 
- RF04 - Consultar Aluno 
- RF05 - Cadastrar Plano 
- RF06 - Registrar Pagamentos 
- RF07 - Emitir Relatorios  
- RF08 - Realizar Check In do aluno
- RF09 - Desativar Planos
- RF10 - Cadastrar Matrícula
- RF11 - Consultar Matrícula
- RF12 - Atualizar Matrícula
- RF13 - Cancelar Matrícula
- RF14 - Cadastrar Professor
- RF15 - Editar Professor
- RF16 - Desativar Professor
- RF17 - Consultar Professor
- RF18 - Cadastrar Agendamento
- RF19 - Consultar Agendamento
- RF20 - Alterar Agendamento
- RF21 - Cancelar Agendamento



## Requisitos Não Funcionais 

- RNF01 — Segurança: as senhas dos usuários devem ser armazenadas de forma segura e nunca em texto puro.

- RNF02 — Autenticação: o acesso às funcionalidades administrativas deve exigir autenticação.

- RNF03 — Autorização: o sistema deve controlar o acesso às funcionalidades de acordo com o papel do usuário, como gerente e recepcionista.

- RNF04 — Validação: os dados recebidos pela API devem ser validados antes de serem processados ou armazenados.

- RNF05 — Integridade dos dados: o sistema deve garantir a consistência dos dados e dos relacionamentos entre as entidades.

- RNF06 — Tratamento de erros: o sistema deve tratar erros de forma adequada, retornando respostas HTTP apropriadas sem expor informações sensíveis.

- RNF07 — Manutenibilidade: o código deve ser organizado de forma modular, facilitando a manutenção e evolução do sistema.

- RNF08 — Testabilidade: as principais funcionalidades e regras de negócio devem poder ser testadas de forma automatizada.

- RNF09 — Desempenho: as operações da API devem apresentar tempo de resposta adequado para as operações previstas na primeira versão do sistema.


## Regras de Negócio


- RN01 — Matrícula única: um aluno não pode possuir mais de uma matrícula ativa simultaneamente.

- RN02 — CPF único: cada aluno deve possuir um CPF único no sistema. Não é permitido cadastrar dois alunos com o mesmo CPF.

- RN03 — Conflito de agendamento do aluno: um aluno não pode possuir dois agendamentos no mesmo dia e horário.

- RN04 — Conflito de agendamento do professor: um professor não pode possuir dois agendamentos no mesmo dia e horário.

- RN05 — Tolerância de pagamento: o aluno possui um período de tolerância de até 7 dias após o vencimento do pagamento.

- RN06 — Check-in durante a tolerância: enquanto o pagamento estiver atrasado entre 1 e 7 dias, o aluno poderá realizar o check-in normalmente.

- RN07 — Bloqueio por atraso: a partir do 8º dia de atraso, o check-in do aluno deve ser bloqueado.

- RN08 — Registro de check-in: toda tentativa de check-in deve ser registrada pelo sistema, independentemente de o acesso ser liberado ou bloqueado.

- RN09 — Agendamento para plano Ouro: somente alunos com um plano que ofereça acompanhamento de professor poderão realizar agendamentos com professores.

- RN10 — Agendamento de professor: um agendamento deve estar associado a um aluno, um professor, uma data e um horário válidos.

- RN11 — Pagamento associado à matrícula: todo pagamento deve estar vinculado a uma matrícula existente.

## Dúvidas para o Cliente

# Plano

Um aluno pode trocar de plano durante uma matrícula?
Se puder trocar, o que acontece com o pagamento atual?

# Pagamento

Quais formas de pagamento serão aceitas? PIX, cartão e dinheiro?
O pagamento deve ser registrado manualmente pelo recepcionista?
O aluno recebe algum comprovante?

# Check-in

O check-in será feito por cartão/passe?
O sistema precisa registrar também o horário de saída ou somente a entrada?

# Professor

O aluno Ouro pode escolher o professor?
O professor pode cancelar ou alterar um agendamento?
Quanto tempo dura cada treinamento?

# Usuários

O recepcionista pode alterar o preço de um plano ou somente o gerente?
O gerente pode cadastrar e desativar recepcionistas?

# Aluno

O aluno terá acesso ao sistema ou somente recepcionista e gerente?
O aluno pode cancelar sua própria matrícula?






