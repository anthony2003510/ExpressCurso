const e = require("express");
const express = require("express");
const app = express();
const morgan = require('morgan')


// app.use //FUNCION MIDDLEWARE
// (
//     (req,res,next) =>
//     {
//         console.log(`estoy en ${req.url} usando el metodo ${req.method} y el dios del reino ${req.query.god}`)
//         next();
//     }
// )
//////////////////////////////////////

app.use(morgan('dev'))
/// AUTORIZAR USUARIO, ANTES DE LA ROUTE Y DESPUES DEL MIDDLEWARE
app.use
(
    (req,res,next) =>
    {
        if(req.query.user === "awrodriguez")
        {
            next()
        }else
        {
            res.send("usuario no autorizado")
        }
    }
)

app.all
(
    '/dioses',
    (req,res) =>
    {
        if(req.query.god !="")
        {
            res.send(`este es el reino de ${req.query.god}`)
        }else{
            res.send("este dios no tiene reino")
        }
    }
)


app.listen(3000);
console.log(`el servidor esta en el puerto ${3000}`);
