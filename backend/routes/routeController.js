const router  = require("express").Router();
const con = require("../connection");
const jwt = require("jsonwebtoken");
const verifyToken = require('./validate-token');

router.get('/alldata', verifyToken , async (req,res)=> {
  await con.query(`select u.id_ubicacion, u.descripcion as ubicacion,
 z.id_zona, z.descripcion as zona,
  s.id_sensor, s.descripcion as sensor,
  a.id_alerta, a.descripcion as alerta, a.fecha_hora
  from ubicaciones u inner join zonas z
  on u.id_ubicacion = z.id_ubicacion
  inner join sensores s on
  z.id_zona = s.id_zona 
  inner join alertas a on
  s.id_sensor = a.id_sensor;`, function (err,results,values){
    if(err) throw err

     console.log(results)
     if(results.length > 0){
     res.json(results)
     }else{
      res.json({"mensje":"no data"})
     }
    
  });
 
})

router.get('/data/:filtro', (req,res)=> res.send("Hola mundo"))

router.post('/login',(req,res)=> {

  if(req.body.usuario === undefined || req.body.contrasena === undefined){
    res.status(400).json({mensaje: "Bad Request"})
  }

   con.query(`SELECT * FROM usuarios WHERE usuario='${req.body.usuario}' AND contrasena='${req.body.contrasena}'`,
function (err,results,values){
  if(err) throw err

  if(results.length > 0){


    const token = jwt.sign({
      name: results[0].usuario,
      id: results[0].id
  }, process.env.TOKEN_SECRET)

    res.status(200).json({
      mensaje:"Bienvenido",
      token:token
    })
  }
  else{
    res.json({"mensaje": "usuario o contraseña incorrectas"})
  }

});

});

router.post('/registro',async (req,res)=> {

  await con.query(`INSERT INTO usuarios (usuario, contrasena) VALUES ('${req.body.usuario}', '${req.body.contrasena}');`,
  function (err,results,values){
    if(err) throw err
  
     console.log(results)

  });
   
  res.json({
      error: null,
      data: 'exito bienvenido'
  })
  });

module.exports = router;