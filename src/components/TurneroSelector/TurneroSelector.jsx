import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { DropDownComponent } from '../DropDownComponent/DropDownComponent';
import './TurneroSelector.css';
import { DatePickerComponent } from '../DatePickerComponent/DatePickerComponent';
import { TimePickerComponent } from '../TimePickerComponent/TimePickerComponent';

export const TurneroSelector = ({ titulo }) => {
  return (
    <>
      <div className="container-turnero-selector d-flex gap-3 justify-content-center align-items-center">
        <DropDownComponent titulo="Elegí una cancha" />
        <Form className="d-flex justify-content-center align-items-center gap-3">
          <Form.Group className="mb-0" controlId="formBasicEmail">
            <DatePickerComponent placeholder="Ingresar fecha" />
          </Form.Group>

          <Form.Group className="mb-0" controlId="formBasicPassword">
            <TimePickerComponent className="time-input" placeholder="Ingresar hora" />
          </Form.Group>

          <Button className="btn-reservar" variant="success" type="submit">
            Reservar ⚽
          </Button>
        </Form>
      </div>
    </>
  );
};
