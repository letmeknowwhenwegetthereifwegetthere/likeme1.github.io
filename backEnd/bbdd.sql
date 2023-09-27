CREATE DATABASE likeme;

\c likeme;

CREATE TABLE posts (
    id SERIAL,
    titulo VARCHAR(25),
    img VARCHAR(1000),
    descripcion VARCHAR(255),
    likes INT
);

DELETE FROM posts;

INSERT INTO posts (titulo, img, descripcion, likes)
VALUES (
        'Nike Store',
        'https://www.svgrepo.com/show/303214/nike-4-logo.svg',
        'Tienda oficial de Nike',
        5000
    );
INSERT INTO posts (titulo, img, descripcion, likes)
VALUES (
        'Adidas Outlet',
        'https://thumbs.dreamstime.com/b/adidas-logo-editorial-ilustrativo-sobre-fondo-blanco-eps-descargar-vector-jpeg-banner-208329055.jpg',
        'Tienda de descuentos de Adidas',
        3500
    );

INSERT INTO posts (titulo, img, descripcion, likes)
VALUES (
        'Apple Store',
        'https://i.pinimg.com/originals/5d/22/55/5d22555b9eccd85d6c478baae08ecb09.png',
        'Tienda oficial de Apple',
        8000
    );


SELECT *
FROM posts;