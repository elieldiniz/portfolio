/*
  Warnings:

  - You are about to drop the column `descrição` on the `tecnologias` table. All the data in the column will be lost.
  - You are about to drop the column `nombre` on the `tecnologias` table. All the data in the column will be lost.
  - Added the required column `descricao` to the `tecnologias` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `tecnologias` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tecnologias" DROP COLUMN "descrição",
DROP COLUMN "nombre",
ADD COLUMN     "descricao" TEXT NOT NULL,
ADD COLUMN     "nome" TEXT NOT NULL;
