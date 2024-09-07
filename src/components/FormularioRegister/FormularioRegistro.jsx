import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './FormularioRegistro.css';

export const FormularioRegistro = () => {
  return (
    <Form className="container-formulario-registro">
      <Form.Group className="fs-6 mb-3 d-flex flex-column gap-2" controlId="formBasicEmail">
        <h3 className="mb-4">Creá una cuenta</h3>
        <div className="nombre-apellido d-flex gap-5">
          <div>
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Nombre completo" />
          </div>
          <div>
            <Form.Label>Apellido</Form.Label>
            <Form.Control type="text" placeholder="Apellido" />
          </div>
        </div>
        <div className="email-domicilio-password d-flex gap-5">
          <div>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Ingresa tu email" />
          </div>
          <div>
            <Form.Label>Domicilio</Form.Label>
            <Form.Control type="text" placeholder="Domicilio" />
          </div>
        </div>
        <div className="datos-password d-flex gap-5">
          <div>
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Contraseña" />
          </div>
          <div>
            <Form.Label>Domicilio</Form.Label>
            <Form.Control type="password" placeholder="" />
          </div>
        </div>
      </Form.Group>

      <Form.Group className="formulario-aceptar-condicionesmb-3 fs-6 fw-normal mb-2" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" defaultChecked={false} label="Acepto términos y condiciones" />
      </Form.Group>
      <Form.Group className="d-flex justify-content-start align-items-center">
        <Button variant="success" type="submit">
          Registrarse
        </Button>
      </Form.Group>
    </Form>
  );
};
