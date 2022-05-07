CREATE DATABASE  IF NOT EXISTS `backend_disney_db` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `backend_disney_db`;

-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: backend_disney_db
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.20-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `character_movies`
--

DROP TABLE IF EXISTS `character_movies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `character_movies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `character_id` int(11) NOT NULL,
  `movie_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `character_movies_FK` (`character_id`),
  KEY `character_movies_FK_1` (`movie_id`),
  CONSTRAINT `character_movies_FK` FOREIGN KEY (`character_id`) REFERENCES `characters` (`id`),
  CONSTRAINT `character_movies_FK_1` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `character_movies`
--

LOCK TABLES `character_movies` WRITE;
/*!40000 ALTER TABLE `character_movies` DISABLE KEYS */;
INSERT INTO `character_movies` VALUES (12,38,68),(13,40,70),(14,43,73),(15,47,77),(16,41,71),(17,39,69);
/*!40000 ALTER TABLE `character_movies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `characters`
--

DROP TABLE IF EXISTS `characters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `characters` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image` varchar(100) COLLATE utf8mb4_bin NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_bin NOT NULL,
  `age` varchar(100) COLLATE utf8mb4_bin NOT NULL,
  `weight` varchar(100) COLLATE utf8mb4_bin NOT NULL,
  `story` text COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `characters`
--

LOCK TABLES `characters` WRITE;
/*!40000 ALTER TABLE `characters` DISABLE KEYS */;
INSERT INTO `characters` VALUES (38,'Spider-Man','Peter Parker','25 years','70kg','Spider-Man (real name Peter Benjamin Parker) is a superhero from Marvel Comics and is arguably Marvel\'s most well-known superhero, Spider-Man has appeared in countless media throughout his lifetime. Peter Parker was a high school student bitten by a genetically-altered radioactive spider that granted him spider-like superpowers. However, due to the death of his uncle Ben Parker or his aunt May Parker, Peter vowed to use his powers responsibly and for good, becoming a superhero known as Spider-Man.'),(39,'Moon Knight','Marc Spector','30 years','83kg','Moon Knight is empowered by Khonshu, the Egyptian god of the Moon. This gives him superhuman strength. Besides that, he is an expert at boxing and martial arts and a great combat strategist.'),(40,'Doctor Strange','Stephen Vincent Strange','33 years','80kg','Dr. Stephen Vincent Strange is a superhero from Marvel Comics. He is a neurosurgeon who suffered nerve damage to his hands in a car crash. He sought out The Ancient One, hoping to cure his disability, but abandons that notion after being taught to use and utilize magic from The Ancient One, eventually becoming the Sorcerer Supreme.'),(41,'Iron Man','Anthony \"Tony\" Edward Stark','35 years','83kg','Iron Man (real name Anthony \"Tony\" Edward Stark) is a superhero from Marvel Comics, the Marvel Cinematic Universe and the Iron Man trilogy. He is also one of the protagonists of the TV series The Avengers: Earth\'s Mightiest Heroes and Avengers Assemble.'),(42,'Thor','Thor Odinson','200 years','100kg','Thor Odinson, simply known as Thor, is a superhero from Marvel Comics and the Marvel Cinematic Universe. He is the eponymous protagonist of the Thor films and one of the protagonists of the Avengers films. Thor is an Asgardian warrior-prince, the God of Thunder, and a self-proclaimed protector of Earth. Thor subsequently became well known for his actions on Earth, which included acting as a founding member of the Avengers despite being the only Avenger that is not from Earth. Thor is mostly known wielded the mystical war hammer Mjolnir, which controls the weather, but he himself has god-like strength, durability, and agility.'),(43,'Captain America','Steven Rogers','39 years','109kg','Captain America is a super-soldier from World War II who was frozen in ice for 70 years and then resumed his heroic duties. An idealistic American hero, Captain America advocates for freedom and justice as the leader and one of the founding members of the superhero team known as the Avengers. After the events of Captain America: Civil War, Steve became a fugitive from the authorities, known as Nomad. However, five years after the Infinity War, Captain America rejoins the Avengers to undo the Thanos\'s snap by travelling back in time to collect the Infinity Stones. They were successful in undoing the snap and managed to defeat an alternate version of Thanos and his armies.'),(44,'Hulk','Robert Bruce Banner','37 years','540kg','The Incredible Hulk, and his alter ego Robert Bruce Banner, are superheroes from Marvel Comics who appear in Marvel Cinematic Universe. Bruce Banner is a brilliant scientist who, after a lab accident involving gamma radiation, can transform into an immensely strong green-skinned monster called the Hulk whenever he gets angry or his heart beats very rapidly.'),(45,'Captain Carter','Peggy Carter','30 years','90kg','Captain Carter was a member of the military, fighting in World War II, when she became the subject of a serum that transformed her into a super soldier. She fought against HYDRA and the Red Skull, before being transported nearly seventy years forward in the future, through the power of the Tesseract. She eventually joined S.H.I.E.L.D. and later was chosen by The Watcher to form the Guardians of the Multiverse, a team united against the threat of Ultron, a being in possession of the Infinity Stones.'),(46,'Scarlet Witch','Wanda Maximoff','28 years','68 kg','anda is the twin sister of Pietro Maximoff, alias Quicksilver. She started out as a vengeful lackey to the evil Ultron, before redeeming herself and joining the Avengers following the death of her brother, who would have done likewise if he had lived.'),(47,'Black Widow','Natasha Romanoff','30 years','67 kg','She debuts as a major character in 2010\'s film Iron Man 2, and becomes a prominent character of the Infinity Saga after returning in 2012\'s The Avengers. She is the titular protagonist of the Black Widow film.');
/*!40000 ALTER TABLE `characters` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genres`
--

DROP TABLE IF EXISTS `genres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `genres` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_bin NOT NULL,
  `image` varchar(100) COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genres`
--

LOCK TABLES `genres` WRITE;
/*!40000 ALTER TABLE `genres` DISABLE KEYS */;
INSERT INTO `genres` VALUES (10,'Action','action_image.jpg'),(11,'Comedy','comedy_image.jpg'),(12,'Drama','drama_image.jpg'),(13,'Fantasy','fantasy_image.jpg'),(14,'Horror','horror_image.jpg'),(15,'Mystery','mystery_image.jpg'),(16,'Romance','romance_image.jpg'),(17,'Thriller','thriller_image.jpg'),(18,'Western','western_image.jpg');
/*!40000 ALTER TABLE `genres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies`
--

DROP TABLE IF EXISTS `movies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `movies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image` varchar(100) COLLATE utf8mb4_bin NOT NULL,
  `title` varchar(100) COLLATE utf8mb4_bin NOT NULL,
  `creation_date` date DEFAULT NULL,
  `rating` int(11) NOT NULL DEFAULT 1,
  `genre_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `movies_FK` (`genre_id`),
  CONSTRAINT `movies_FK` FOREIGN KEY (`genre_id`) REFERENCES `genres` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=78 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies`
--

LOCK TABLES `movies` WRITE;
/*!40000 ALTER TABLE `movies` DISABLE KEYS */;
INSERT INTO `movies` VALUES (68,'Spider-Man','Spider-Man','2022-05-06',5,10),(69,'Moon Knight','Moon Knight','2022-03-09',4,13),(70,'Doctor Strange','Doctor Strange','2020-04-25',5,15),(71,'Iron Man','Iron Man','2018-06-03',5,10),(72,'Thor','Thor','2019-09-29',3,11),(73,'Captain America','Captain America','2019-04-09',5,10),(74,'Hulk','Hulk','2017-05-15',2,13),(75,'Captain Carter','Captain Carter','2021-09-28',3,18),(76,'Scarlet Witch','Scarlet Witch','2021-10-19',4,12),(77,'Black Widow','Black Widow','2022-02-28',2,10);
/*!40000 ALTER TABLE `movies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8mb4_bin NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_bin NOT NULL,
  `password` varchar(100) COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_un` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (11,'test_api','test@gmail.com','$2b$12$ba63gK8cFMYHzDvATjjjuOdkIHZRXwmv7aFgZ2wjtkxmkwBehBkmu');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'backend_disney_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-06 17:40:32
