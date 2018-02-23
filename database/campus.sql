/*
SQLyog Ultimate v11.11 (64 bit)
MySQL - 5.5.36 : Database - db_campus_andalin
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
/*Table structure for table `tbl_mahasiswa` */

DROP TABLE IF EXISTS `tbl_mahasiswa`;

CREATE TABLE `tbl_mahasiswa` (
  `cId` int(8) NOT NULL AUTO_INCREMENT,
  `cNIM` varchar(20) DEFAULT NULL,
  `cNamaMahasiswa` varchar(30) DEFAULT NULL,
  `cIdProdi` smallint(4) DEFAULT NULL,
  `cAlamat` varchar(50) DEFAULT NULL,
  `cJenisKelamin` enum('Laki-laki','Perempuan') DEFAULT NULL,
  `cAgama` enum('Islam','Kristen Katolik','Kristen Protestan','Hindu','Budha','Konghucu') DEFAULT NULL,
  `cEmail` varchar(50) DEFAULT NULL,
  `cHP` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`cId`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

/*Data for the table `tbl_mahasiswa` */

LOCK TABLES `tbl_mahasiswa` WRITE;

insert  into `tbl_mahasiswa`(`cId`,`cNIM`,`cNamaMahasiswa`,`cIdProdi`,`cAlamat`,`cJenisKelamin`,`cAgama`,`cEmail`,`cHP`) values (1,'20162192','Tatang Konate',1,'Riung Bandung Permai N0.72','Laki-laki','Islam','andalin@gmail.com','085222333444');

UNLOCK TABLES;

/*Table structure for table `tbl_prodi` */

DROP TABLE IF EXISTS `tbl_prodi`;

CREATE TABLE `tbl_prodi` (
  `cIdProdi` smallint(4) NOT NULL AUTO_INCREMENT,
  `cNamaProdi` varchar(30) NOT NULL,
  `cInisialProdi` varchar(10) DEFAULT NULL,
  `cIsAktif` char(1) NOT NULL DEFAULT 'Y',
  PRIMARY KEY (`cIdProdi`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

/*Data for the table `tbl_prodi` */

LOCK TABLES `tbl_prodi` WRITE;

insert  into `tbl_prodi`(`cIdProdi`,`cNamaProdi`,`cInisialProdi`,`cIsAktif`) values (1,'Sistem Informasi','SI','Y'),(2,'Teknik Informatika','TI','Y'),(3,'Manajemen Informatika','MI','Y');

UNLOCK TABLES;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
