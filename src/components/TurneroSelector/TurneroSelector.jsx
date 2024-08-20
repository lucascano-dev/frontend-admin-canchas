import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { DropDownComponent } from '../DropDownComponent/DropDownComponent';
import './TurneroSelector.css';
export const TurneroSelector = ({ titulo }) => {
  return (
    <>
      <div className="container-turnero-selector d-flex gap-3 justify-content-center align-items-center">
        <DropDownComponent titulo="Elegí una cancha" />
        <Form className="d-flex align-items-center gap-3">
          <Form.Group className="mb-0" controlId="formBasicEmail">
            <Form.Control type="date" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-0" controlId="formBasicPassword">
            <Form.Control type="time" placeholder="Password" />
          </Form.Group>

          <Button className="btn-reservar" variant="success" type="submit">
            Reservar
          </Button>
        </Form>
      </div>
    </>
  );
};
