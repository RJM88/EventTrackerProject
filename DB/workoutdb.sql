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
INSERT INTO `workout` (`id`, `name`, `description`, `location`, `enabled`, `day`, `img`, `weight`, `date`) VALUES (1, 'Dumbbell chest press', 'Was feeling a little light.', '24 hours', 1, 'Monday', 'https://images.squarespace-cdn.com/content/v1/55e406fbe4b0b03c5e7543ae/1492943899613-FMQR88UGXP5NKKBU39S8/ke17ZwdGBToddI8pDm48kHlZ51lbe8ilPcxU1J_shrlZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVEAbiLQYc2gKaU69H6HlPiIR-jdXWp95pzbeNHzaEXGueWQ2NE_qdOrf1Dw30SAtXQ/Decline+Dumbbell+Chest+Press?format=1000w', 'Set 1/10 reps - 60lb, Set 2/10 reps - 60lb, Set 3/10 reps - 65lb', '11/09/2020');
INSERT INTO `workout` (`id`, `name`, `description`, `location`, `enabled`, `day`, `img`, `weight`, `date`) VALUES (2, 'Dips', 'Was a good burn', '24 hours', 1, 'Monday', 'https://thumbs.dreamstime.com/b/exercising-dips-bodybuilding-target-muscles-marked-red-initial-final-steps-43688912.jpg', 'Set 1 / Reps 10, Set 2 / Reps 10, Set 3 / Reps 10', '11/09/2020');
INSERT INTO `workout` (`id`, `name`, `description`, `location`, `enabled`, `day`, `img`, `weight`, `date`) VALUES (3, 'Run', 'The weather was cold and windy. Planed to run 3 miles made it only 2', 'Sloans Lake', 1, 'Monday', 'https://www.interactive-biology.com/wp-content/uploads/2012/04/MuscleManRunning-1024x813.jpg', '2 miles- 10 Min mile', '11/09/2020');
INSERT INTO `workout` (`id`, `name`, `description`, `location`, `enabled`, `day`, `img`, `weight`, `date`) VALUES (4, 'Dead Lift', 'Was feeling a little light.', 'Planet Fit', 1, 'Tuesday', 'https://www.trainingbeta.com/wp-content/uploads/2016/02/Deadlift.jpg', 'Set 1/10 reps - 200lb, Set 2/10 reps - 220lb, Set 3/10 reps - 230lb', '11/10/2020');
INSERT INTO `workout` (`id`, `name`, `description`, `location`, `enabled`, `day`, `img`, `weight`, `date`) VALUES (5, 'Squats', 'Was a good burn', 'Planet Fit', 1, 'Tuesday', 'https://www.inspireusafoundation.org/wp-content/uploads/2020/07/muscles-targeted-by-squat.jpg', 'Set 1/5 reps - 300b, Set 2/5 reps - 320lb, Set 3/5 reps - 335lb', '11/10/2020');
INSERT INTO `workout` (`id`, `name`, `description`, `location`, `enabled`, `day`, `img`, `weight`, `date`) VALUES (6, 'Leg Press', 'Could not complete. Need to lower the weight', 'Planet Fit', 1, 'Tuesday', 'https://thethaokhoe.com/wp-content/uploads/2019/06/leg-press.jpg', 'Set 1/10 reps - 350, Set 2/10 reps - 355lb, Set 3/5 reps - 340lb', '11/10/2020');
INSERT INTO `workout` (`id`, `name`, `description`, `location`, `enabled`, `day`, `img`, `weight`, `date`) VALUES (7, 'Run', 'Great day Record best 3 miles', 'Sloans Lake', 1, 'Wednesday', 'https://www.interactive-biology.com/wp-content/uploads/2012/04/MuscleManRunning-1024x813.jpg', '3 miles- 9 Min mile', '11/11/2020');
INSERT INTO `workout` (`id`, `name`, `description`, `location`, `enabled`, `day`, `img`, `weight`, `date`) VALUES (8, 'Basket Ball Game', 'Played 3 games of 3 vs 3', 'Golds', 1, 'Thursday', 'https://image.shutterstock.com/image-illustration/muscleman-anatomy-heroic-body-playing-600w-1627606039.jpg', 'game 1 (21-15) game 2 (19-21) game 3 (21-20)', '11/12/2020');
INSERT INTO `workout` (`id`, `name`, `description`, `location`, `enabled`, `day`, `img`, `weight`, `date`) VALUES (9, 'Hike', 'Hiked up Mount Evans', 'Mount Evans', 1, 'Friday', 'https://images1.westword.com/imager/u/745xauto/11385353/screen_shot_2019-06-19_at_2.20.27_pm.png', 'N/A', '11/13/2020');
INSERT INTO `workout` (`id`, `name`, `description`, `location`, `enabled`, `day`, `img`, `weight`, `date`) VALUES (10, 'Recovery ', 'Recovered All day ', 'Home', 1, 'Saturday', 'http://www.interactive-biology.com/wp-content/uploads/2012/04/MuscularManPosing.jpg', 'N/A', '11/14/2020');
INSERT INTO `workout` (`id`, `name`, `description`, `location`, `enabled`, `day`, `img`, `weight`, `date`) VALUES (11, 'SLEEP', 'Slept all day', 'Home', 1, 'Sunday', 'https://100percentchiropractic.com/wp-content/uploads/2019/11/iStock-904902642.jpg', 'N/A', '11/15/2020');

COMMIT;

