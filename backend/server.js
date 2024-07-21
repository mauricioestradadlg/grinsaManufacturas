const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
  origin: 'https://grinsamanufacturas.onrender.com',
  credentials: true,
}));

app.use(bodyParser.json());

// Middleware para servir los archivos estáticos de React
app.use(express.static(path.join(__dirname, '..frontend/build')));

app.get('/', (req, res) => {
  res.send('Conexión exitosa entre React y Node JS');
});

app.post('/contacto', async (req, res) => {
  const { nombre, correo, celular, mensaje } = req.body;

  console.log('Datos recibidos:', { nombre, correo, celular, mensaje });

  try {
    // Configurar el transporte de nodemailer
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS
      }
    });

    // Configurar el contenido del correo electrónico
    let mailOptions = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: 'Formulario de Contacto (Pagina Web)',
      text: `
        Nombre: ${nombre}
        Correo: ${correo}
        Celular: ${celular}
        Mensaje: ${mensaje}
      `
    };

    // Enviar el correo electrónico
    let info = await transporter.sendMail(mailOptions);
    console.log('Correo enviado: ' + info.response);
    res.status(200).json({ message: 'Correo enviado' });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    res.status(500).json({ message: 'Error al enviar el correo electrónico' });
  }
});

// Enviar el archivo index.html para cualquier otra ruta
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto http://localhost:${port}`);
});
