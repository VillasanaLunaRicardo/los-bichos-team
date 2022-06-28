const routes=require('express').Router();

routes.get('/catalogo',(req, res)=>{
    res.send('catalogo');
});

module.exports=routes;

routes.get('/catalogo/info-envio',(req, res)=>{
  res.send('informacion del envio');
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
