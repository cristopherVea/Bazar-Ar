//Mandar correos a usuarios registrados
const nodemailer = require('nodemailer');
require('dotenv').config(); //para usar archivos .env

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.MAIL_USERNAME, //claves de autenticacion de google
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN
  }
});

async function enviarCorreo(req, res) {
  const {nombre, correo, asunto, contenido} = req.body; //se reciben los datos del frontend

  try {
    const mailOptions = {
      from: "bazarferrocarrilmxlar@gmail.com", //correo preterminado
      to: correo,
      subject: asunto,
      html: contenido
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Correo enviado: ' + info.response);
    res.status(200).send('Correo electrónico enviado correctamente');
  } catch (error) {
    console.error('Error al enviar el correo electrónico:', error);
    res.status(500).send('Error al enviar el correo electrónico');
  }
}

module.exports = { enviarCorreo };