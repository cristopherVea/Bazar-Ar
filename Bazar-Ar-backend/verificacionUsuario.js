const usuarios = require('./models');

async function verificarUsuario(req, res){


    let registrado = false;
    const {nombre, correo, password} = req.body;

    console.log(nombre);
    console.log(correo);
    console.log(password);

    try {

        if(await usuarios.Usuario.findOne({ where: { correoElectronico: correo } })){


            const usuario = await usuarios.Usuario.findOne({ where: { correoElectronico: correo } });


            if(password == usuario.password){

                console.log("sesion iniciada con exito");
                registrado = true;

            }

            
        }
        else{
            console.log("El usuario no se encuentra registrado");
        }

        res.status(200).send('verificacion realizada');
    } catch (error) {

        console.error('Error al hacer la verificacion', error);
        res.status(500).send('Error al hacer la verificacion');
    }

    return registrado;
}


module.exports = { verificarUsuario };
