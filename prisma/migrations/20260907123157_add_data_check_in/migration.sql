/*
  Warnings:

  - Added the required column `dataCheckIn` to the `CheckIn` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CheckIn" ADD COLUMN     "dataCheckIn" TIMESTAMP(3) NOT NULL;
