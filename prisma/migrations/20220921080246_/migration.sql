/*
  Warnings:

  - You are about to drop the column `imgSrc` on the `tools` table. All the data in the column will be lost.
  - Added the required column `img_src` to the `tools` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tools` DROP COLUMN `imgSrc`,
    ADD COLUMN `img_src` VARCHAR(191) NOT NULL;
