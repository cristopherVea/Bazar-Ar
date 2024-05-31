const boton = document.getElementById("button");

        boton.addEventListener("click", function() {


            // Obtener los valores de los campos
            const username = document.getElementById("username").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // Objeto con los datos del formulario
            const formData = {
                nombre: username,
                correoElectronico: email,
                password: password,
                boletin: true
            };

            // Realizar la solicitud POST usando Fetch
            fetch("http://localhost:3001/usuario/", { 
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                
                console.log(data);
                //Se realiza una segunda peticion para mandar correo de bienvenida

                const datosUsuario = {
                    nombre: username,
                    correo: email,
                    asunto: "Te damos la bienvenida a Bazar Ferrocarril MXL AR",
                    contenido: `
                            <html>
                                <head>
                                <title>Bienvenida</title>
                                </head>
                                <body>
                                <h1>¡Hola ${username}!</h1>
                                <p>Ahora que ya estás registrad@, puedes acceder a nuestros servicios y de la experencia que te estamos guardando. <b>¡No te lo pierdas!</b></p>
                                <p> <em> Atentamente, <b>Bazar del ferrocarril MXL</b> </em></p>
                                <img src="https://img.freepik.com/vector-gratis/diseno-tren-vapor_1152-67.jpg?w=826&t=st=1713861013~exp=1713861613~hmac=e3d2e16436262bd191c0fa6e1b5e6fe3d458a834801f4c6a49c232cf97346c4f">
                                </body>
                            </html>
                        `
                };

                //segunda solicitud POST
                fetch("http://localhost:3001/enviarCorreo/", { 
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(datosUsuario) 
                })
                .then(response => response.json())
                .then(data => {
                    
                    console.log(data);
                })
                .catch(error => {
                    console.error("Error al realizar la segunda solicitud:", error);
                });



            })
            .catch(error => {
                console.error("Error al realizar la solicitud:", error);
            });

            alert("Cuenta creada. Inicie sesion");

            window.location.href = "/frontHTML/login.html";


        });

    