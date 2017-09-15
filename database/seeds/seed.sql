# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.17)
# Database: sps
# Generation Time: 2017-08-22 04:12:33 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table faqs
# ------------------------------------------------------------

LOCK TABLES `faqs` WRITE;
/*!40000 ALTER TABLE `faqs` DISABLE KEYS */;

INSERT INTO `faqs` (`id`, `question`, `answer`, `topic_id`, `created_at`, `updated_at`)
VALUES
	(1,'What types of questions should be entered into ECCO for technical assistance versus what types of questions should be directed towards the Regional Prevention Specialist (RPS)','The questions entered in ECCO should be questions concerning the strategies, process, implementation of the project. Any programmatic, invoice related or budget questions should be directed to your RPS.',1,'2017-08-22 04:09:29','2017-08-22 04:09:29'),
	(2,'Will future regional meetings have the option for web capability if a Provider is unable to attend in-person?','We can accommodate with a conference line. However, providers are welcome to use their own technology to web conference with staff at their agencies who are unable to attend the meeting.',2,'2017-08-22 04:09:29','2017-08-22 04:09:29'),
	(3,'Does attending the SAPST training in Macon count as the required conference within the contract for FY2017','Yes, this training will for the FY17 contract year.',2,'2017-08-22 04:09:29','2017-08-22 04:09:29'),
	(4,'If a Provider cannot spend all of his/her funds for FY2017, can they be carried over into next year? If not, what are some suggestions for spending down the available funds?','No funds cannot be carried over to another contract year. Please speak individually with your RPS concerning funding.',5,'2017-08-22 04:09:29','2017-08-22 04:09:29'),
	(5,'Can you explain what the Providers are required to implement for Red Ribbon Week? Also, what can the funds for Red Ribbon Week be spent on, besides just ribbons? Do you have examples of activ','Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',4,'2017-08-22 04:09:29','2017-08-22 04:09:29'),
	(6,'Can Providers pay for trainings out of funds from FY2017 for trainings that occur during FY2018?','Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',5,'2017-08-22 04:09:29','2017-08-22 04:09:29'),
	(7,'Can you provide some guidance and/or examples of how to incorporate tobacco cessation and suicide awareness into ASAPP?\r\n','Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.lorem',2,'2017-08-22 04:09:29','2017-08-22 04:09:29'),
	(8,'What is the approval process with Communications if a Provider is re-using messaging from APP?','Etiam dolor urna, egestas sed eros cursus, pulvinar ultricies augue. Cras bibendum sodales malesuada. Cras ex augue, bibendum mollis orci non, convallis molestie arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed non dictum ipsum, at pellentesque magna. Donec auctor, justo posuere gravida pharetra, elit arcu eleifend nulla, nec pellentesque purus turpis ut lectus. Donec sollicitudin mattis enim, vitae convallis lectus rutrum at. Nulla quis fringilla sem. Sed sit amet urna tristique, scelerisque ligula in, porttitor libero. Praesent mollis dignissim mattis. Ut pellentesque leo in leo malesuada tristique. Pellentesque ullamcorper augue nec convallis tincidunt. Ut commodo hendrerit sodales.',2,'2017-08-22 04:09:29','2017-08-22 04:09:29'),
	(9,'Will there be an area on the ECCO website where Providers can communicate with each other about their work, strategies, messaging/creative materials, etc.?','Maecenas quis sodales felis. Nulla eget mauris nibh. Sed feugiat libero vitae placerat eleifend. Nunc eu lorem ac neque porta mollis in in dolor. In scelerisque varius congue. Proin pretium turpis eu urna ornare, non rutrum lacus consectetur. In lacus odio, ornare vel dignissim malesuada, elementum interdum diam. Phasellus mi justo, semper at purus eu, blandit rutrum elit. Ut hendrerit dui ullamcorper imperdiet tempor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi augue elit, vulputate eget placerat ultrices, ultrices ac magna. Mauris auctor odio at lobortis dapibus. Sed in enim vitae eros mollis efficitur vel vitae enim.',1,'2017-08-22 04:09:29','2017-08-22 04:09:29'),
	(10,'For ASAPP, do Providers still need approval before purchasing anything that costs more than $500?','Phasellus non placerat sapien. Vivamus condimentum diam sapien, condimentum sagittis metus tristique eu. Curabitur sed vestibulum eros, sed tempor nulla. Nullam consequat in velit eget gravida. Pellentesque posuere pretium odio sed tincidunt. Vivamus gravida nec nulla ac mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id tincidunt orci.',5,'2017-08-22 04:09:29','2017-08-22 04:09:29');

/*!40000 ALTER TABLE `faqs` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table topics
# ------------------------------------------------------------

LOCK TABLES `topics` WRITE;
/*!40000 ALTER TABLE `topics` DISABLE KEYS */;

INSERT INTO `topics` (`id`, `name`, `created_at`, `updated_at`)
VALUES
	(1,'Using ECCO','2017-08-22 04:09:29','2017-08-22 04:09:29'),
	(2,'Alcohol and Substance Abuse Prevention Project','2017-08-22 04:09:29','2017-08-22 04:09:29'),
	(3,'Suicide Prevention','2017-08-22 04:09:29','2017-08-22 04:09:29'),
	(4,'Red Ribbon Week','2017-08-22 04:09:29','2017-08-22 04:09:29'),
	(5,'Contracts','2017-08-22 04:09:29','2017-08-22 04:09:29'),
	(6,'Prescription Drug Abuse Prevention (GENRx)','2017-08-22 04:09:29','2017-08-22 04:09:29'),
	(7,'DBHDD/OBHP','2017-08-22 04:09:29','2017-08-22 04:09:29'),
	(8,'Continuing Education','2017-08-22 04:09:29','2017-08-22 04:09:29');

/*!40000 ALTER TABLE `topics` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
