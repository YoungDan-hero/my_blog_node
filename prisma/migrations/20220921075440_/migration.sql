/*
  Warnings:

  - You are about to drop the column `content` on the `user` table. All the data in the column will be lost.
  - Added the required column `update_time` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `content`,
    ADD COLUMN `introduce` VARCHAR(191) NULL,
    ADD COLUMN `update_time` DATETIME(3) NOT NULL;

-- CreateTable
CREATE TABLE `tools` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `imgSrc` VARCHAR(191) NOT NULL,
    `label` VARCHAR(191) NOT NULL,
    `link` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
