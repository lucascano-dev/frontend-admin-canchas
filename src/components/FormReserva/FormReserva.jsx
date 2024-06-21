import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import './FormReserva.css';

export const FormReserva = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/reservas');
  };

  return (
    <Form className="form-reserva">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre y Apellido</Form.Label>
        <Form.Control type="text" placeholder="Nombre y apellido" />
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">Well never share your email with anyone else</Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button className="btn btn-warning fw-bold" variant="primary" type="submit" onClick={handleClick}>
        Reserva cancha
      </Button>
    </Form>
  );
};
