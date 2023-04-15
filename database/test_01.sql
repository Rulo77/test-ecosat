CREATE DATABASE test_01;

USE test_01;

CREATE TABLE usuarios(
id_usuario int not null primary key auto_increment,
usuario varchar(45),
contrasena varchar(45)
);

CREATE TABLE ubicaciones(
id_ubicacion int not null primary key auto_increment,
descripcion varchar(45)
);

CREATE TABLE zonas(
id_zona int not null primary key auto_increment,
id_ubicacion int not null,
descripcion varchar(45),
foreign key(id_ubicacion) references ubicaciones(id_ubicacion)
);

CREATE TABLE sensores(
id_sensor int not null primary key auto_increment,
id_zona int not null,
descripcion varchar(45),
foreign key(id_zona) references zonas(id_zona)
);


CREATE TABLE alertas(
id_alerta int not null primary key auto_increment,
id_sensor int not null,
descripcion varchar(45),
fecha_hora datetime,
foreign key(id_sensor) references sensores(id_sensor)
);


