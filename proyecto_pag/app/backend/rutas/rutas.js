const { query } = require('express');
const consulta = require('../conf/conexion');
const routes=require('express').Router();

routes.get('/catalogo',(req, res)=>{
    res.send('catalogo');
});

module.exports=routes;

routes.get('/catalogo/info-envio',(req, res)=>{
  res.send('informacion del envio');
});

routes.get('/catalogo/detalle-prod',(req, res)=>{
        res.send('detalle');
      });

routes.get('/envio',(req, res)=>{
    let sql = "select nombre, apellido, telefono, calle, ciudad, estado, codigo_postal from cliente;";
    consulta.query(sql,(err,rows)=>{
     if(!err){
       res.json(rows);
     }
     else{
       console.log(err);
     }
   
    })
    // ruta de la tabla producto
    routes.get('/producto',(req,res)=>{
    let query = "SELECT * from producto"
    conexion.query(query,(err,rows)=>{
        if(!err){
            res.json(rows);
        }
        else{
            console.log(err);
        }
        })
   });
    
    routes.get('/detalles_producto/:id',(req, res)=>{
    const {id}= req.params;
      let sql = "select imagen, nombre, precio,idproducto, stock, descripcion from producto;";
      conexion.query(sql,[id],(err,rows)=>{
       if(!err){
         res.json(rows);
       }
       else{
         console.log(err);
       }
     
      })
     });

     routes.get('/info_carrito',(req, res)=>{
        let sql = "select nombre, stock, precio from producto;";
        conexion.query(sql,(err,rows)=>{
         if(!err){
           res.json(rows);
         }
         else{
           console.log(err);
         }
       
        })
       });
    routes.get('/catalogo_productos',(req, res)=>{
    let sql = "select nombre, descripcion, precio from producto;";
    conexion.query(sql,(err,rows)=>{
     if(!err){
       res.json(rows);
     }
     else{
       console.log(err);
     }
   
    })
   });
