-- CreateTable
CREATE TABLE `bookmark` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `img_src` VARCHAR(191) NOT NULL,
    `label` VARCHAR(191) NOT NULL,
    `link` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
