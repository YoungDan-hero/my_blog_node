/*
  Warnings:

  - Added the required column `update_time` to the `bookmark` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_time` to the `skill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `update_time` to the `tool` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `bookmark` ADD COLUMN `create_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `update_time` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `skill` ADD COLUMN `create_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `update_time` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `tool` ADD COLUMN `create_time` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `update_time` DATETIME(3) NOT NULL;
