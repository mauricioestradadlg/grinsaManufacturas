const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/contacto', (req, res) => {
  const { nombre, correo, celular, mensaje } = req.body;

  // Configurar el transporte de nodemailer
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mauricioestrada580@gmail.com', // Tu correo electrónico
      pass: 'uqkm thih bipr zkeq' // La contraseña específica de la aplicación
    }
  });

  // Configurar el contenido del correo electrónico
  let mailOptions = {
    from: 'mauricioestrada580@gmail.com',
    to: 'al02976904@tecmilenio.mx, mauricioestrada580@gmail.com', // Correo electrónico del destinatario
    subject: 'Formulario de Contacto',
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
