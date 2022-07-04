const routes=require('express').Router();
const { query } = require('express');
const consulta = require('../conf/conexion');

routes.get('/envio',(req, res)=>{
  let sql = "select nombre, apellido, telefono, calle, ciudad, estado, codigo_postal from cliente ;";
  consulta.query(sql,(err,rows)=>{
   if(!err){
     res.json(rows);
   }
   else{
     console.log(err);
   }
 
  })
 });
// informacion del envio por codigo postal
 routes.get('/envio-cp/:id',(req, res)=>{
  const {id}= req.params;
    let sql = "select nombre, apellido, telefono, calle, ciudad, estado, codigo_postal from cliente where codigo_postal=?;";
    consulta.query(sql,[id],(err,rows)=>{
     if(!err){
       res.json(rows);
     }
     else{
       console.log(err);
     }
   
    })
   });
 // datos envio por nombre de cliente 
   routes.get('/envio-cliente/:nombre',(req, res)=>{
    const {nombre}= req.params;
      let sql = "select nombre, apellido, telefono, calle, ciudad, estado, codigo_postal from cliente where cliente=?;";
      consulta.query(sql,[nombre],(err,rows)=>{
       if(!err){
         res.json(rows);
       }
       else{
         console.log(err);
       }
     
      })
     });
// datos de envio por ciudad
     routes.get('/envio-cliente/:ciudad',(req, res)=>{
      const {ciudad}= req.params;
        let sql = "select nombre, apellido, telefono, calle, ciudad, estado, codigo_postal from cliente where ciudad =?;";
        consulta.query(sql,[ciudad],(err,rows)=>{
         if(!err){
           res.json(rows);
         }
         else{
           console.log(err);
         }
       
        })
       });
//eliminar datos de envio 
     routes.delete('/eliminaenvio/:id',(req, res)=>{
      const {id}= req.params;
      let sql = "delete nombre, apellido, telefono, calle, ciudad, estado, codigo_postal from cliente where idcliente=?;";
      consulta.query(sql,[id],(err,rows)=>{
       if(!err){
         res.json('eliminado');
       }
       else{
         console.log(err);
       }
     
      })
     });
//modificar datos de envio 
     routes.put('/modificaenvio',(req, res)=>{
      const {idcliente,nombre,apellido,telefono,calle,ciudad,codigo_postal}= req.body;
      let query = "UPDATE `proyecto`.`cliente` SET `nombre` = '"+nombre+"',`apellido` = '"+apellido+"', `telefono` = '"+telefono+"', `calle` = '"+calle+"', `ciudad` = '"+ciudad+"', `estado` = '"+estado+"', `codigo_postal` = '"+codigo_postal+"' WHERE (`idcliente` = '"+idcliente+"')";
      consulta.query(query, (err,rows)=>{
        if(!err){
          res.json('Actualizadondo datos');
        }
        else{
          console.error(err);
        }
      
       });
      }); 
//incertar datos de envio
      routes.post('/envioinserta',(req, res)=>{
        const {idcliente,nombre,apellido,telefono,calle,ciudad,codigo_postal}= req.body;
        let sql = "INSERT INTO cliente (idcliente,nombre,apellido,telefono,calle,ciudad,codigo_postal) VALUES ('"+idcliente+"', '"+nombre+"','"+apellido+"','"+telefono+"','"+calle+"','"+ciudad+"','"+codigo_postal+"')";
        consulta.query(sql,(err,rows)=>{
         if(!err){
           res.json('registro incertado');
         }
         else{
           console.log(err);
         }
       
        })
       });
     
