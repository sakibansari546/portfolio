/*
  Warnings:

  - Added the required column `github` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `live` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "github" TEXT NOT NULL,
ADD COLUMN     "live" TEXT NOT NULL;
