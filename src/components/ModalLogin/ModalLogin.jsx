import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export const ModalLogin = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event);
    console.log({
      email: email,
      password: password,
    });
  };

  return (
    <>
      <Button className="ms-5 d-flex align-items-center text-white fw-bold" variant="success" onClick={handleShow}>
        <span className="material-symbols-outlined">person</span>Acceder
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ingresa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" onChange={(event) => setEmail(event.target.value)} />
              {/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                onChange={(event) => setPassword(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 fs-6" style={{ fontWeight: 'normal' }} controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Recordarme" defaultChecked={true} />
            </Form.Group>
            <Form.Group className="d-flex justify-content-end gap-3">
              <Button variant="secondary" onClick={handleClose}>
                Cancelar
              </Button>
              <Button variant="success" type="submit">
                Ingresar
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Form.Group className="d-flex justify-content-center align-items-center">
            <span className="fs-6 fw-normal">¿No estás registrado?</span>
            <Button variant="link">Registrate ahora</Button>
          </Form.Group>
        </Modal.Footer>
      </Modal>
    </>
  );
};
