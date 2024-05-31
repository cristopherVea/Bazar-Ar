const cors = require("cors");
const express = require('express');
const app = express();
const port = 3001;
let respuesta = false; //respuesta de comprobacion de usuario registrado en la DB

const usuarioRouter = require("./routes/usuario");
const { enviarCorreo } = require('./correo');
const { verificarUsuario } = require('./verificacionUsuario');


app.use(cors());
app.use(express.json());

app.use("/usuario" ,usuarioRouter);

//Peticion para mandar correos
app.post('/enviarCorreo', async (req, res) => {
    await enviarCorreo(req, res);
});

//verificacion de usuario registrado
app.post('/verificarUsuario', async (req, res) => {

    respuesta = await verificarUsuario(req, res);
    

});

app.get('/respuestaVerificacion', (req, res) => {


    res.json(respuesta);
    respuesta = false;
   // console.log("respuesta enviada");
    
});





app.listen(port, () => {
    console.log('Servidor escuchando por el puerto:',port);
}).on('error', err => { 
    console.log('Error al iniciar el servidor',err);
});