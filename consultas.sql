select id_cliente, cliente, num_tarjeta, banco where id_cliente=1;
-- Detalles producto
select idproducto, nombre, imagen, stock, idproducto from producto;

-- Detalles producto (Descripcion)
select imagen, nombre, precio,idproducto, stock, descripcion from producto where idproducto = 3;

-- Carrito de Compras
select nombre, stock, precio, idproducto from producto;

-- Info Carrito
select nombre, stock, precio, idproducto from producto where idproducto=?;

-- Inventario productos
select nombre, stock, precio from producto;
select idproducto, nombre, imagen, stock from producto where idproducto=4;
select idproducto, nombre, imagen, stock from producto where stock=10; -- Consulta para resurtir

-- Info tarjeta
select id_cliente, cliente, num_tarjeta, banco from tarjeta;
select id_cliente, cliente, num_tarjeta, banco from tarjeta  where id_cliente= 2; -- Cliente por ID

-- informacion de la tarjeta por nombre de banco
Select id_cliente, cliente, num_tarjeta, banco from tarjeta  where banco=''; 







-- Consulta de categoria
select idproducto, nombre , categoria.categoria from categoria,producto; 
-- detalles producto
select imagen, nombre, precio, idproducto, stock, descripcion from proyectotp.producto;

-- Consultas de Envio
select imagen, nombre, precio, idproducto, stock, descripcion from producto where idproducto=2 ;
select imagen, nombre, precio, idproducto, stock, descripcion from producto where nombre= 'Batidora';
select imagen, nombre, precio, idproducto, stock, descripcion from producto where precio<= 3099 ;


-- Consulta Detalle envio
select cliente.idcliente, 
cliente.nombre, 
cliente.calle, 
cliente.ciudad, 
detalle_orden.id_detalle_orden, 
detalle_orden.id_orden, 
detalle_orden.id_producto, 
detalle_orden.precio, 
detalle_orden.cantidad, orden.total from cliente, detalle_orden, orden;

-- Envio Codigo postal
select nombre, apellido, telefono, calle, ciudad, estado, codigo_postal from cliente where codigo_postal=2;

-- Envio Cliente
select nombre, apellido, telefono, calle, ciudad, estado, codigo_postal from cliente where cliente=1;

select nombre, apellido, telefono, calle, ciudad, estado, codigo_postal from cliente where codigo_postal=3;