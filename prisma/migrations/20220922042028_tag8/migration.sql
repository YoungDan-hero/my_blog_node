/*
  Warnings:

  - Made the column `userId` on table `bookmark` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userId` on table `skill` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userId` on table `tool` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `bookmark` DROP FOREIGN KEY `bookmark_userId_fkey`;

-- DropForeignKey
ALTER TABLE `skill` DROP FOREIGN KEY `skill_userId_fkey`;

-- DropForeignKey
ALTER TABLE `tool` DROP FOREIGN KEY `tool_userId_fkey`;

-- AlterTable
ALTER TABLE `bookmark` MODIFY `userId` BIGINT UNSIGNED NOT NULL;

-- AlterTable
ALTER TABLE `skill` MODIFY `userId` BIGINT UNSIGNED NOT NULL;

-- AlterTable
ALTER TABLE `tool` MODIFY `userId` BIGINT UNSIGNED NOT NULL;

-- AddForeignKey
ALTER TABLE `tool` ADD CONSTRAINT `tool_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `skill` ADD CONSTRAINT `skill_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `bookmark` ADD CONSTRAINT `bookmark_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
