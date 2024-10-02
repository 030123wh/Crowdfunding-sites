/*
 Navicat Premium Data Transfer

 Source Server         : project
 Source Server Type    : MySQL
 Source Server Version : 50737
 Source Host           : localhost:3306
 Source Schema         : crowdfunding_db

 Target Server Type    : MySQL
 Target Server Version : 50737
 File Encoding         : 65001

 Date: 01/10/2024 10:19:46
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category`  (
  `CATEGORY_ID` int(11) NOT NULL AUTO_INCREMENT,
  `NAME` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`CATEGORY_ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES (1, 'Medical');
INSERT INTO `category` VALUES (2, 'Memorial');
INSERT INTO `category` VALUES (3, 'Emergency');
INSERT INTO `category` VALUES (4, 'Nonprofit');
INSERT INTO `category` VALUES (5, 'Education');

-- ----------------------------
-- Table structure for fundraiser
-- ----------------------------
DROP TABLE IF EXISTS `fundraiser`;
CREATE TABLE `fundraiser`  (
  `FUNDRAISER_ID` int(11) NOT NULL AUTO_INCREMENT,
  `ORGANIZER` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `CAPTION` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `TARGET_FUNDING` decimal(10, 2) NOT NULL,
  `CURRENT_FUNDING` decimal(10, 2) NULL DEFAULT 0.00,
  `CITY` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `ACTIVE` tinyint(1) NULL DEFAULT 1,
  `CATEGORY_ID` int(11) NULL DEFAULT NULL,
  `DESCRIBE` varchar(10240) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `URL` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`FUNDRAISER_ID`) USING BTREE,
  INDEX `CATEGORY_ID`(`CATEGORY_ID`) USING BTREE,
  CONSTRAINT `fundraiser_ibfk_1` FOREIGN KEY (`CATEGORY_ID`) REFERENCES `category` (`CATEGORY_ID`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of fundraiser
-- ----------------------------
INSERT INTO `fundraiser` VALUES (1, 'Janet Weiss', 'Help Unwound\'s Sara Lund Beat Breast Cancer', 25000.00, 56828.00, 'Portland, OR', 1, 1, 'This past April, my dear, sweet friend Sara Lund, beloved drummer of Unwound, musical inspiration, and extraordinary human, was diagnosed with breast cancer. The news was extremely out of the blue and a huge shock not only for Sara, but for her family, her teenage son, her partner, and her very tight knit circle of friends. For the past six uneasy months, the medical details have been slowly unfolding, with a surgery and many doctors\' appointments bringing more clarity in regards to the scope of the cancer and what path to take. The official diagnosis is Invasive Lobular Carcinoma in the left breast with a lymph node also positive for cancer. Fortunately Sara won\'t need to endure chemotherapy, which she desperately wanted to avoid. She and her medical team have instead opted for a lumpectomy, radiation and endocrine therapy. Treatment and recovery will be challenging in all the ways mental, physical, emotional and financial. Luckily, we can help!', 'http://localhost:3000/image/help.png');
INSERT INTO `fundraiser` VALUES (2, 'Avantika Kumar', 'Aid Vishal Kumar\'s Recovery and Family Stability', 90000.00, 25878.00, 'Concord, NC', 1, 1, 'On September 23rd 2024, our lives were changed forever when my beloved husband, Vishal Kumar, suffered a devastating brain stroke. He is a loving father to our two beautiful daughters, aged 3 and 8, and an incredible partner. Unfortunately, Vishal is now battling severe complications from the stroke, and his recovery timeline remains uncertain. He currently remains in intensive care as doctors are monitoring his health, and the long-term implications of the stroke are unknown.', 'http://localhost:3000/image/aid.png');
INSERT INTO `fundraiser` VALUES (3, 'Jacob Woods', 'Support the Sells Family in Memory of Mason', 12000.00, 16704.00, 'Macon, GA', 1, 2, 'Hi, my name is Jacob Woods and I am the president of Alpha Tau Omega at Mercer University.\r\n\r\nMason Sells was a dear friend, boyfriend, brother, and son. His passing was not only shocking but heartbreaking to all that knew Mason\'s love. The impact Mason had on the people around him can’t be stated enough. Whether it was in the classroom, on the soccer field, hanging out with his friends, working on his car, or spending time with his loved ones, Mason’s light never failed to reach people’s hearts.', 'http://localhost:3000/image/mem.png');
INSERT INTO `fundraiser` VALUES (4, 'Erica Calvillo', 'Support Victor\'s Family After Tragic Fire', 200000.00, 90865.00, 'Mobile, AL', 2, 3, 'My brother , Victor and his family were in a house fire this morning . Victor and his wife Sharon are in ICU . Their youngest son Donovan is in the trauma center but he is stable. Their oldest son, Junior made it out of house safely , no injuries . Isabel, their second oldest has minor injuries but she is ok .\r\n', 'http://localhost:3000/image/victor.png');
INSERT INTO `fundraiser` VALUES (5, 'Tcc Cat Rescue', 'Help Pinot, the Cat, Beat Cancer!', 6800.00, 6056.00, 'Byron Bay', 1, 4, 'Meet Pinot, an amazing 11-year-old cat who came into our lives after being surrendered with chronic ear infections and polyps. We’ve poured our hearts into caring for her, and with your help, we can give her the happy, healthy life she deserves.\r\n', 'http://localhost:3000/image/cat.png');
INSERT INTO `fundraiser` VALUES (6, 'Naina Ramrakhani', 'Support Plenitud PR: Empowering Youth in Rural Puerto Rico', 19475.00, 30000.00, 'Las Marías, PR', 1, 5, 'Plenitud PR es una finca educativa y sin fines de lucro dedicada a servir a niños y jóvenes a través de la educación holística. Enseñamos a los estudiantes cómo vivir en armonía con la naturaleza y su entorno a través de aprendizajes experienciales. El equipo de Plenitud cree firmemente que para proporcionar momentos significativos a estos jóvenes, debemos comprometernos no solo con lo que hacemos, sino también con cómo lo hacemos.', 'http://localhost:3000/image/6.png');

SET FOREIGN_KEY_CHECKS = 1;
