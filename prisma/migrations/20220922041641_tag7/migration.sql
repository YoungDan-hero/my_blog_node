/*
  Warnings:

  - You are about to drop the `skills` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tools` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `bookmark` ADD COLUMN `userId` BIGINT UNSIGNED NULL;

-- DropTable
DROP TABLE `skills`;

-- DropTable
DROP TABLE `tools`;

-- CreateTable
CREATE TABLE `tool` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `img_src` TEXT NOT NULL,
    `label` VARCHAR(191) NOT NULL,
    `link` VARCHAR(191) NOT NULL,
    `userId` BIGINT UNSIGNED NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `skill` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `img_src` VARCHAR(191) NOT NULL,
    `label` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `userId` BIGINT UNSIGNED NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tool` ADD CONSTRAINT `tool_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `skill` ADD CONSTRAINT `skill_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `bookmark` ADD CONSTRAINT `bookmark_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
