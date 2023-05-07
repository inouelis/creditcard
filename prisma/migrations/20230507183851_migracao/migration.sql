/*
  Warnings:

  - You are about to drop the column `verication_code` on the `Cartoes` table. All the data in the column will be lost.
  - Added the required column `verification_code` to the `Cartoes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cartoes" DROP COLUMN "verication_code",
ADD COLUMN     "verification_code" TEXT NOT NULL;
