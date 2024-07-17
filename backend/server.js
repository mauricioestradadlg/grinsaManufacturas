const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');


const app = express();

const port = process.env.PORT || 5000;

app.use(cors({
  origin: 'https://grinsamanufacturas.onrender.com',
  credentials: true,
}));

app.use(bodyParser.json());

app.get('/', (req, res) => {

  res.send('Conexión exitosa entre React y Node JS');

});


app.post('/contacto', (req, res) => {

  const { nombre, correo, celular, mensaje } = req.body;

  // Configurar el transporte de nodemailer
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL, // Tu correo electrónico
      pass: process.env.PASS// La contraseña específica de la aplicación
    }
  });

  // Configurar el contenido del correo electrónico
  let mailOptions = {

    from: process.env.EMAIL,
    to: process.env.CORREOS, // Correo electrónico del destinatario
    subject: 'Formulario de Contacto (Pagina Web)',
    text: `
      Nombre: ${nombre}
      Correo: ${correo}
      Celular: ${celular}
      Mensaje: ${mensaje}
    `
  };

  // Enviar el correo electrónico
  transporter.sendMail(mailOptions, (error, info) => {

    if (error) {
      console.log(error);
      return res.status(500).send('Error al enviar el correo electrónico');
    }
    console.log('Correo enviado: ' + info.response);
    res.status(200).send('Correo enviado');

  });
  
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
