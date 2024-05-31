
let respuesta = "false";

let username;
let email;
let password;

const boton = document.getElementById("loginButton");

    boton.addEventListener("click", function() {


        // Obtener los valores de los campos
        username = document.getElementById("username").value;
        email = document.getElementById("email").value;
        password = document.getElementById("password").value;

        localStorage.setItem('username', username);
        localStorage.setItem('email', email);


        const formData = {
            nombre: username,
            correo: email,
            password: password
        };


        fetch("http://localhost:3001/verificarUsuario/", { 
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData) 
        })
        .then(response => response.json())
        .then(data => {
            
            console.log(data);

        })
        .catch(error => {
            console.log(error);
            
        });

        alert("Presiona el botón para confirmar el inicio de sesión");
    
    });



function confirmarInicioSesion(){

    fetch('http://localhost:3001/respuestaVerificacion/')
    .then(response => response.json())
    .then(data => {

    respuesta = JSON.stringify(data);
    console.log("respuesta de verificacion: ", respuesta);

    if(respuesta=="true"){

        


        window.location.href = "/frontHTML/interfazUsuario.html";
        alert("sesion iniciada");
    
    }
   
    
    })
.catch(error => console.error('Error:', error));

    

}


confirmarInicioSesion();















