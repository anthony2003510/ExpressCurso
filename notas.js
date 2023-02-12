// const express = require('express')
// const app = express()

// app.get('/', (req, res)=>
// {
//     res.sendFile('./static/index.html', 
//     {
//         root: __dirname
//     })
// })


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////ROUTING
// app.get
// (
//     '/',
//     (req, res)=>
//     {
//         res.send('hello world')
//     }
// )

// app.get
// (
//     '/about', 
//     (req, res)=>
//     {
//         res.send('about')
//     }
// )

// app.get
// (
//     '/weather', 
//     (req, res)=>
//     {
//         res.send('the current weather is nice')
//     }
// )

// app.use
// (
//     (req,res)=>
//     {

//         res.status(404).send("no se encontro tu pagina web sirr")
//     }
// )


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////HTTP METHODS
// app.get
// (
//     '/',
//     (req,res)=>
//     {
//         res.send("sweet HOME alabama")
//     }
// )


// app.get
// (
//     '/products',
//     (req,res)=>
//     {
//         // validate data
//         // query into database
//         // process data
//         res.send("estas en la lista de productos")
//     }
// )

// app.post
// (
//     '/products',
//     (req,res)=>
//     {
//         res.send("creando productos")
//     }
// )

// app.put
// (
//     '/products',
//     (req,res)=>
//     {
//         res.send("actualizando producto")
//     }
// )

// app.delete
// (
//     '/products',
//     (req,res)=>
//     {
//         res.send("borrando productos")
//     }
// )

// app.patch
// (
//     '/products',
//     (req,res)=>
//     {
//         res.send("actualizando una parte del producto")
//     }
// )

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////HTTP RESPONSE
// app.get("/", (req, res) => {
//     res.send("hello world");
//   });
  
//   app.get("/myfile", (req, res) => {
//     res.sendFile("./pitbull1.jpg", {
//       root: __dirname,
//     });
//   });
  
//   app.get("/user", (req, res) => {
//     res.json({
//       name: "Ansony",
//       apellido: "Rodriguez",
//       age: 20,
//       points: [5, 6, 7, 8],
//       address: {
//         City: "New York",
//         "favourite place": "Times Square",
//       },
//     });
//   });
  
//   app.get("/isAlive", (req, res) => {
//       res.sendStatus(204);
//     });
  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////REQUEST BODY

//app.use(express.text())
// app.use(express.json())
// app.use(express.urlencoded({extended: false})) //
// app.post
// (
//     "/user",
//     (req,res) => 
//     {
//         console.log(req.body)
//         res.send("nuevo usuario creado")
//     }
// )


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////PARAMS
//app.get
// (
//     '/hello/:username/:latestname',
//     (req,res)=>
//     {

//         res.send(`Hey, how are u ${req.params.username} ${req.params.latestname}`)
//     }
// )

// app.get
// (
//     '/add/:x/:y',
//     (req,res)=>
//     {
//         const {x,y} = req.params
//         res.send(`La suma total es ${parseInt(x) + parseInt(y)}`);
//     }
// )

// app.get
// (
//     '/users/:username/photo',
//     (req,res)=>
//     {
//         if(req.params.username == "pitbull")
//         {
//             res.sendFile('./pitbull1.jpg', {
//                 root: __dirname
//             })
//         }else
//         {
//             res.send("el usuario no existe sir")
//         }
//     }
// )

// app.get
// (
//     '/usuarios/username1/:username1/age1/:age1/username2/:username2/age2/:age2',
//     (req,res)=>
//     {
//        res.send(req.params)
//     }
// )



////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////QUERY
// app.get
// (
//     '/gods',
//     (req,res) =>
//     {
//         if(req.query.god !="")
//         {
//             res.send(`estas en la pagina de ${req.query.god}`)
//         }else
//         {
//             res.send("la pagina de este dios no existe sirr")
//         }
//     }
    
// )

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////METODO ALL
// app.all
// (
//     '/info',
//     (req,res) =>
//     {
//         res.send("info del servidor")
//     }
// )



////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////MIDDLEWARE
// app.use //FUNCION MIDDLEWARE
// (
//     (req,res,next) =>
//     {
//         console.log(`estoy en ${req.url} usando el metodo ${req.method} y el dios del reino ${req.query.god}`)
//         next();
//     }
// )
// //////////////////////////////////////

// app.all
// (
//     '/dioses',
//     (req,res) =>
//     {
//         if(req.query.god !="")
//         {
//             res.send(`este es el reino de ${req.query.god}`)
//         }else{
//             res.send("este dios no tiene reino")
//         }
//     }
// )


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////MIDDLEWARE SEGUNDA PARTE
// app.use //FUNCION MIDDLEWARE
// (
//     (req,res,next) =>
//     {
//         console.log(`estoy en ${req.url} usando el metodo ${req.method} y el dios del reino ${req.query.god}`)
//         next();
//     }
// )
// //////////////////////////////////////

// /// AUTORIZAR USUARIO, ANTES DE LA ROUTE Y DESPUES DEL MIDDLEWARE
// app.use
// (
//     (req,res,next) =>
//     {
//         if(req.query.user === "awrodriguez")
//         {
//             next()
//         }else
//         {
//             res.send("usuario no autorizado")
//         }
//     }
// )

// app.all
// (
//     '/dioses',
//     (req,res) =>
//     {
//         if(req.query.god !="")
//         {
//             res.send(`este es el reino de ${req.query.god}`)
//         }else{
//             res.send("este dios no tiene reino")
//         }
//     }
// )




////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////MIDDLEWARE TERCERA PARTE
// app.use(morgan('dev'))
// /// AUTORIZAR USUARIO, ANTES DE LA ROUTE Y DESPUES DEL MIDDLEWARE
// app.use
// (
//     (req,res,next) =>
//     {
//         if(req.query.user === "awrodriguez")
//         {
//             next()
//         }else
//         {
//             res.send("usuario no autorizado")
//         }
//     }
// )

// app.all
// (
//     '/dioses',
//     (req,res) =>
//     {
//         if(req.query.god !="")
//         {
//             res.send(`este es el reino de ${req.query.god}`)
//         }else{
//             res.send("este dios no tiene reino")
//         }
//     }
// )

// app.listen(3000)
// console.log(`el servidor esta en el puerto ${3000}`)