-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema workoutdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `workoutdb` ;

-- -----------------------------------------------------
-- Schema workoutdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `workoutdb` DEFAULT CHARACTER SET utf8 ;
USE `workoutdb` ;

-- -----------------------------------------------------
-- Table `workout`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `workout` ;

CREATE TABLE IF NOT EXISTS `workout` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` TEXT NULL,
  `location` VARCHAR(100) NULL,
  `enabled` TINYINT(1) NOT NULL DEFAULT 1,
  `day` VARCHAR(40) NULL,
  `img` TEXT NULL,
  `weight` TEXT NULL,
  `date` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lift`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `lift` ;

CREATE TABLE IF NOT EXISTS `lift` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `description` TEXT NULL,
  `img` TEXT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user` ;

CREATE TABLE IF NOT EXISTS `user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `age` INT(3) NULL,
  `weight` INT(4) NULL,
  `goal_weight` INT(4) NULL,
  `enabled` TINYINT(2) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS workout@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'workout'@'localhost' IDENTIFIED BY 'workout';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'workout'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `workout`
-- -----------------------------------------------------
START TRANSACTION;
USE `workoutdb`;
INSERT INTO `workout` (`id`, `name`, `description`, `location`, `enabled`, `day`, `img`, `weight`, `date`) VALUES (1, 'Dead Lift', 'Was feeling a little light.', '24 hours', 1, 'Monday', 'https://www.trainingbeta.com/wp-content/uploads/2016/02/Deadlift.jpg', 'Set 1/10 reps - 200lb, Set 2/10 reps - 220lb, Set 3/10 reps - 230lb', '11/09/2020');
INSERT INTO `workout` (`id`, `name`, `description`, `location`, `enabled`, `day`, `img`, `weight`, `date`) VALUES (2, 'Squats', 'Was a good burn', 'Golds', 1, 'Monday', 'https://i.dlpng.com/static/png/6990851_preview.png', 'Set 1/5 reps - 300b, Set 2/5 reps - 320lb, Set 3/5 reps - 335lb', '11/09/2020');
INSERT INTO `workout` (`id`, `name`, `description`, `location`, `enabled`, `day`, `img`, `weight`, `date`) VALUES (3, 'Leg Press', 'Could not complete. Need to lower the weight', 'Planet Fit', 1, 'Tuesday', 'https://thethaokhoe.com/wp-content/uploads/2019/06/leg-press.jpg', 'Set 1/10 reps - 350, Set 2/10 reps - 355lb, Set 3/5 reps - 340lb', '11/10/2020');

COMMIT;

