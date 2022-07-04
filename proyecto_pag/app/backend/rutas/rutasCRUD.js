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
     //MODULO DETALLE-PRODUCTO

//detalles de producto por id
//GET
routes.get('/detalles_producto/:id',(req, res)=>{
    const {id}= req.params;
      let sql = "select imagen, nombre, precio,idproducto, stock, descripcion from producto where idproducto = ?;";
      consulta.query(sql,[id],(err,rows)=>{
       if(!err){
         res.json(rows);
       }
       else{
         console.log(err);
       }
     
      })
     });

//PUT  
  routes.put('/modificadetalles',(req, res)=>{
   const {nombre, precio, stock, descripcion, idproducto}= req.body;     
   let query = "UPDATE `ProyectoTP`.`producto` SET `nombre`= '"+nombre+"', `precio`='"+precio+"', `stock`= '"+stock+"', `descripcion`= '"+descripcion+"', `idproducto` = '"+idproducto+"' WHERE (`idproducto` = '"+idproducto+"');";
    consulta.query(query, (err,rows)=>{
     if(!err){
      res.json('Actualizadondo datos');
    }
      else{
     console.error(err);
          }
        
    });
});        
//POST
routes.post('/detallesinserta',(req, res)=>{
    const {imagen,nombre,precio,stock,descripcion,idproducto}= req.body;
    let sql = "INSERT INTO producto (imagen, nombre, precio, stock, descripcion, idproducto) VALUES ('"+imagen+"','"+nombre+"', '"+precio+"', '"+stock+"', '"+descripcion+"', '"+idproducto+"');";
    //let sql = "INSERT INTO rol (id_rol, rol) VALUES ('"+id_rol+"', '"+nombre_rol+"')";
    consulta.query(sql,(err,rows)=>{
     if(!err){
       res.json('registro insertado');
     }
     else{
       console.log(err);
     }
   
    })
   });

   //DELETE
   routes.delete('/deletedetalle/:id', (req,res)=>{
    const {id}= req.params;
    let sql = "delete from producto where idproducto=?;";
    consulta.query(sql,[id],(err,rows)=>{
        if(!err){
            res.json("registro eliminado exitosamente");
        }
        else{
            console.log(err);
        }
    })
  })
//agregar,modificar,eliminar y consultar un producto
//get equipos
routes.get('/producto',(req, res)=>{
    let sql ='select * from producto'
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })

})

// get un equipo
routes.get('/producto/:id',(req, res)=>{
    const {id} = req.params
    let sql ='select * from producto where idproducto = ?'
    conexion.query(sql,[id],(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})

//agregar equipo
routes.post('producto/agregar',( req, res)=>{
    const{nombre, precio,descripcion,categoria,stock} = req.body

    let sql = `insert into producto(nombre,precio,descripcion,categoria,stock) values('${nombre}','${precio}','${descripcion}','${categoria}','${stock}')`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'producto agregado'})
        }
    })
})

//eliminar 
routes.delete('producto/eliminar/:id',(req, res)=>{
    const{id} = req.params

    let sql =`delete from producto where idproducto = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'producto eliminado'})
        }
    })
});

//modificar
routes.put('/producto/modificar/:id',(req, res)=>{
    const{id}=req.params
    const{nombre, precio,descripcion, categoria, stock} = req.body

    let sql = `update producto set 
                nombre ='${nombre}',
                precio='${precio}',
                descripcion='${descripcion}',
                categoria='${categoria}',
                stock='${stock}'
                where idproducto = '${id}'
                `
    
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'producto modificado'})
        }
    })

})
    module.exports=routes
