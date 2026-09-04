/*
  Warnings:

  - Added the required column `dataHora` to the `Agendamento` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Agendamento" ADD COLUMN     "dataHora" TIMESTAMP(3) NOT NULL;
