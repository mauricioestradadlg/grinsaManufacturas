import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';

const textStyle = {
  color: 'white',
  fontFamily: 'Arial, Verdana, sans-serif'
};

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 25.72059084395817, // Latitud de tu ubicación
  lng: -100.28494357570801, // Longitud de tu ubicación
};

export default function Contacto() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [celular, setCelular] = useState('');
  const [mensaje, setMensaje] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log('Enviando datos al backend:', { nombre, correo, celular, mensaje });
      const response = await fetch('https://grinsamanufacturasbackend.onrender.com/contacto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, correo, celular, mensaje }),
      });
      if (response.ok) {
        navigate('/formEnviado');
      } else {
        const errorData = await response.json();
        console.error('Error al registrar el contacto:', errorData);
        alert('Error al registrar el contacto');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al registrar el contacto');
    }
  };

  return (
    <main style={{ textAlign: 'left' }}>
      <Container>
        <h1 className="mt-4" style={textStyle}>Contacto</h1>
        <h4 style={textStyle}>Cualquier duda o comentario envíanos un mensaje!</h4><br />
        <Row className="mt-4 align-items-center">
          <Col md={6} className="mb-4">
            <img alt="" id="imagenContacto" src="./imagenes/forms.jpeg" />
          </Col>
          <Col md={6} className="mb-4">
            <br />
            <br />
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="nombre">
                <Form.Label style={textStyle}>Nombre:</Form.Label>
                <br />
                <Form.Control type="text" required placeholder="--INSERTAR NOMBRE--" value={nombre} onChange={(e) => setNombre(e.target.value)} />
              </Form.Group><br />

              <Form.Group controlId="correo">
                <Form.Label style={textStyle}>Correo:</Form.Label>
                <br />
                <Form.Control type="email" required placeholder="--INSERTAR CORREO--" value={correo} onChange={(e) => setCorreo(e.target.value)} />
              </Form.Group><br />

              <Form.Group controlId="celular">
                <Form.Label style={textStyle}>Celular:</Form.Label>
                <br />
                <Form.Control type="tel" required placeholder="--INSERTAR CELULAR--" value={celular} onChange={(e) => setCelular(e.target.value)} />
              </Form.Group><br />

              <Form.Group controlId="mensaje">
                <Form.Label style={textStyle}>Comentarios:</Form.Label>
                <br />
                <Form.Control as="textarea" rows="5" required placeholder="--COMENTARIOS--" value={mensaje} onChange={(e) => setMensaje(e.target.value)} />
              </Form.Group><br />

              <Button variant="primary" type="submit">Enviar</Button>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </Form>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={10}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          </Col>
        </Row>
      </Container>
      <br />
    </main>
  );
}
