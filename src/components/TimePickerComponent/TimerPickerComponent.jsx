import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
// import 'react-datepicker/dist/react-datepicker.css';
import './TimerPickerComponent.css';

export const TimePickerComponent = () => {
  const [selectedDate, setSelectedDate] = useState();

  // Horas bloqueadas: 14:30, 17:00, 18:00, 21:00
  const horasBloqueadas = [
    { hours: 14, minutes: 30 },
    { hours: 17, minutes: 0 },
    { hours: 18, minutes: 0 },
    { hours: 21, minutes: 0 },
  ];

  // Función para habilitar solo ciertos intervalos de tiempo
  const filterPassedTime = (time) => {
    const horaActual = time.getHours();
    const minutoActual = time.getMinutes();
    const tiempoEnMinutos = horaActual * 60 + minutoActual;

    // Verificar si la hora actual o la siguiente hora está bloqueada
    const esHoraBloqueada = horasBloqueadas.some((horaBloqueada) => {
      const horaBloqueadaEnMinutos = horaBloqueada.hours * 60 + horaBloqueada.minutes;
      const horaActualEnMinutos = horaActual * 60 + minutoActual;

      return horaActualEnMinutos >= horaBloqueadaEnMinutos && horaActualEnMinutos < horaBloqueadaEnMinutos + 60;
    });

    if (esHoraBloqueada) {
      return false;
    }

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
          placeholderText="Seleccione una hora"
        />
      </div>
    </div>
  );
};
