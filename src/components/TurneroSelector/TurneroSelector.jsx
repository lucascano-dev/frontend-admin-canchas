import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { DropDownComponent } from '../DropDownComponent/DropDownComponent';
import './TurneroSelector.css';
import { DatePickerComponent } from '../DatePickerComponent/DatePickerComponent';
import { TimePickerComponent } from '../TimePickerComponent/TimerPickerComponent';
import { useNavigate } from 'react-router-dom';

export const TurneroSelector = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/reservas');
  };
  return (
    <>
      <div className="container-turnero-selector d-flex gap-3 justify-content-center align-items-center">
        <DropDownComponent titulo="Elegí una cancha" />
        <Form className="d-flex justify-content-center align-items-center gap-3">
          <DatePickerComponent placeholder="Ingresar fecha" />
          <TimePickerComponent className="time-input" placeholder="Ingresar hora" />

          <Button className="btn-reservar" variant="success" onClick={handleClick} type="submit">
            Reservar ⚽
          </Button>
        </Form>
      </div>
    </>
  );
};
