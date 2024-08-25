import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { DropDownComponent } from '../DropDownComponent/DropDownComponent';
import './TurneroSelector.css';
import { DatePickerComponent } from '../DatePickerComponent/DatePickerComponent';
import { TimePickerComponent } from '../TimePickerComponent/TimerPickerComponent';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const TurneroSelector = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  // const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    // if (selectedDate && selectedTime) {
    console.log('Fecha seleccionada:', selectedDate);
    console.log('Hora seleccionada:', selectedTime);
    // } else {
    console.log('Selecciona una fecha y hora antes de reservar');
    // }
    // navigate('/reservas');
  };

  return (
    <>
      <div className="container-turnero-selector d-flex gap-3 justify-content-center align-items-center">
        <DropDownComponent titulo="Elegí una cancha" />
        <Form className="d-flex justify-content-center align-items-center gap-3">
          <DatePickerComponent onDateChange={(date) => setSelectedDate(date)} placeholder="Ingresar fecha" />
          <TimePickerComponent
            onTimeChange={(time) => setSelectedTime(time)}
            className="time-input"
            placeholder="Ingresar hora"
          />

          <Button className="btn-reservar" variant="success" onClick={handleClick} type="submit">
            Reservar ⚽
          </Button>
        </Form>
      </div>
    </>
  );
};
