# Relacionamento entre Entidades

## 1. ALUNO → MATRÍCULA

Um aluno pode possuir várias matrículas ao longo do tempo.

Uma matrícula pertence a um único aluno.

**Relação:** 1:N

**Regra:** um aluno não pode possuir mais de uma matrícula ativa simultaneamente.

## 2. PLANO → MATRÍCULA

Um plano pode estar associado a várias matrículas.

Uma matrícula está associada a um único plano.

**Relação:** 1:N

## 3. MATRÍCULA → PAGAMENTO

Uma matrícula pode possuir vários pagamentos.

Um pagamento pertence a uma única matrícula.

**Relação:** 1:N

## 4. ALUNO → AGENDAMENTO

Um aluno pode possuir vários agendamentos.

Um agendamento pertence a um único aluno.

**Relação:** 1:N

## 5. PROFESSOR → AGENDAMENTO

Um professor pode possuir vários agendamentos.

Um agendamento pertence a um único professor.

**Relação:** 1:N

## 6. ALUNO → CHECK-IN

Um aluno pode possuir vários registros de check-in.

Um check-in pertence a um único aluno.

**Relação:** 1:N

# Chaves Primárias e Estrangeiras

## ALUNO

* `id` → PK

## USUÁRIO

* `id` → PK

## PROFESSOR

* `id` → PK

## PLANO

* `id` → PK

## MATRÍCULA

* `id` → PK
* `alunoId` → FK → `ALUNO.id`
* `planoId` → FK → `PLANO.id`

## PAGAMENTO

* `id` → PK
* `matriculaId` → FK → `MATRÍCULA.id`

## AGENDAMENTO

* `id` → PK
* `alunoId` → FK → `ALUNO.id`
* `professorId` → FK → `PROFESSOR.id`

## CHECK-IN

* `id` → PK
* `alunoId` → FK → `ALUNO.id`
