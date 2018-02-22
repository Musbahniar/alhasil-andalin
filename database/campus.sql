/*
SQLyog Ultimate v11.11 (64 bit)
MySQL - 5.5.5-10.1.25-MariaDB : Database - db_campus_andalin
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`db_campus_andalin` /*!40100 DEFAULT CHARACTER SET latin1 */;

/*Table structure for table `aduh` */

DROP TABLE IF EXISTS `aduh`;

CREATE TABLE `aduh` (
  `nama` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `aduh` */

insert  into `aduh`(`nama`) values ('gayo');

/*Table structure for table `tbl_mahasiswaxx` */

DROP TABLE IF EXISTS `tbl_mahasiswaxx`;

CREATE TABLE `tbl_mahasiswaxx` (
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
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;

/*Data for the table `tbl_mahasiswaxx` */

insert  into `tbl_mahasiswaxx`(`cId`,`cNIM`,`cNamaMahasiswa`,`cIdProdi`,`cAlamat`,`cJenisKelamin`,`cAgama`,`cEmail`,`cHP`) values (1,'2016210092','Musbahniar',1,'Riung Bandung','Laki-laki','Islam','ruang.9campus@gmail.com','085222666513'),(2,'2016210091','Riani Hadiyanti',3,'Adipura Cemapaka No.72','Perempuan','Islam','myblues.9gagak@yahoo.com','08522266514'),(3,'2018210001','Kineta Nara Putriniar',3,'Adipura Palem No.190','Perempuan','Islam',NULL,NULL),(16,'gayo',NULL,NULL,NULL,NULL,NULL,NULL,NULL);

/*Table structure for table `tbl_mahasiwa` */

DROP TABLE IF EXISTS `tbl_mahasiwa`;

CREATE TABLE `tbl_mahasiwa` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(20) DEFAULT NULL,
  `nim` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

/*Data for the table `tbl_mahasiwa` */

insert  into `tbl_mahasiwa`(`id`,`titulo`,`nim`) values (1,'2',NULL),(3,'4',NULL);

/*Table structure for table `tbl_prodi` */

DROP TABLE IF EXISTS `tbl_prodi`;

CREATE TABLE `tbl_prodi` (
  `cIdProdi` smallint(4) NOT NULL AUTO_INCREMENT,
  `cNamaProdi` varchar(30) NOT NULL,
  `cInisialProdi` varchar(10) DEFAULT NULL,
  `cIsAktif` char(1) NOT NULL DEFAULT 'Y',
  PRIMARY KEY (`cIdProdi`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

/*Data for the table `tbl_prodi` */

insert  into `tbl_prodi`(`cIdProdi`,`cNamaProdi`,`cInisialProdi`,`cIsAktif`) values (1,'Sistem Informasi','SI','Y'),(2,'Teknik Informatika','TI','Y'),(3,'Manajemen Informasi','MI','Y'),(4,'Akuntansi','AK','N'),(5,'gayo',NULL,'Y');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
