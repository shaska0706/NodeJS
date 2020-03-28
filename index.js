const bodyParser = require("body-parser");
const morgan = require('morgan');
const express = require("express");
const app = express();
const pokemon = require('./routes/pokemon');

//app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
/*
GET - obtener recursos
POST -almacenar / crear recurso
PATCH - modificar una parte de un recurso
PUT - modificar el recurso completo
DELETE - eliminar un recurso
*/

app.get('/', (req,res,next)=> {
    return res.status(200).send("Bienvenido al Pokedex");
});

app.use("/pokemon", pokemon);

/* req=request solicitud del usuario
   res=respose respuesta que se le da al usuario
   next =
*/

app.listen(process.env.Port || 3000, () => {
 console.log("Server is running...");
});