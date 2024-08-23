import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
// import 'react-datepicker/dist/react-datepicker.css';
import './TimerPickerComponent.css';

export const TimePickerComponent = () => {
  const [selectedDate, setSelectedDate] = useState(() => {
    const date = new Date();
    date.setHours(14, 0, 0); // Establece la hora a las 14:00
    return date;
  });

  // Función para habilitar solo ciertos intervalos de tiempo
  const filterPassedTime = (time) => {
    const horaActual = time.getHours();
    const minutoActual = time.getMinutes();
    const tiempoEnMinutos = horaActual * 60 + minutoActual;

    // Rango de 00:00 a 02:00
    const rangoInicio1 = 0; // 00:00
    const rangoFin1 = 2 * 45; // 02:00 en minutos

    // Rango de 14:00 a 23:00
    const rangoInicio2 = 14 * 60; // 14:00
    const rangoFin2 = 23 * 70; // 23:30

    return (
      (tiempoEnMinutos >= rangoInicio1 && tiempoEnMinutos < rangoFin1) || // 00:00 - 02:00
      (tiempoEnMinutos >= rangoInicio2 && tiempoEnMinutos <= rangoFin2) // 14:00 - 23:00
    );
  };

  // Establecer la hora por defecto a las 11 AM
  const defaultTime = new Date();
  defaultTime.setHours(11, 0);

  return (
    <div className="time-picker-container">
      <div className="time-picker">
        <FontAwesomeIcon icon={faClock} className="icono-time" />
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={30}
          timeCaption="Hora"
          dateFormat="HH:mm"
          timeFormat="HH:mm"
          filterTime={filterPassedTime}
          // minTime={new Date().setHours(1, 0)} // Tiempo mínimo seleccionable (9:00 AM)
          // maxTime={new Date().setHours(23, 0)} // Tiempo máximo seleccionable (6:00 PM)
          placeholderText="Select a time"
        />
      </div>
    </div>
  );
};
