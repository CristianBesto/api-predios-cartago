-- -----------------------------------------------------
-- Crear y usar la base de datos cartago
-- -----------------------------------------------------
CREATE DATABASE IF NOT EXISTS `cartago` DEFAULT CHARACTER SET utf8;
USE `cartago`;

-- -----------------------------------------------------
-- Tabla predios
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `predios` (
  `idPredio`      INT          NOT NULL AUTO_INCREMENT,
  `descripcion`   VARCHAR(250) NULL,
  `area`          VARCHAR(45)  NULL,
  `direccion`     VARCHAR(45)  NULL,
  `statusActivo`  VARCHAR(45)  NULL DEFAULT 'activo',
  `fotografia`    VARCHAR(250) NULL,
  `observaciones` VARCHAR(45)  NULL,
  `evaluo`        INT          NULL,
  PRIMARY KEY (`idPredio`)
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Datos de prueba
-- -----------------------------------------------------
INSERT INTO `predios` (`descripcion`, `area`, `direccion`, `statusActivo`, `fotografia`, `observaciones`, `evaluo`) VALUES
('Casa de habitacion',   '120 m2', 'Calle 10 # 5-23',    'activo',   'casa1.jpg',   'Buen estado',         150000000),
('Apartamento',          '80 m2',  'Carrera 3 # 12-45',  'activo',   'apto1.jpg',   'Piso 3',              95000000),
('Local comercial',      '60 m2',  'Avenida 1 # 8-10',   'activo',   'local1.jpg',  'Esquinero',           200000000),
('Finca',                '500 m2', 'Vereda El Rosal',     'activo',   'finca1.jpg',  'Con fuente de agua',  350000000),
('Lote',                 '200 m2', 'Calle 5 # 20-00',    'inactivo', 'lote1.jpg',   'Sin construccion',    80000000);