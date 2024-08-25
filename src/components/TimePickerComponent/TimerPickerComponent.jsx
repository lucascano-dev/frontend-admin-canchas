import { useState } from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
// import 'react-datepicker/dist/react-datepicker.css';
import './TimerPickerComponent.css';

export const TimePickerComponent = ({ onTimeChange }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  // Horas bloqueadas: 14:30, 17:00, 18:00, 21:00
  const turnosReservados = [
    { hours: 14, minutes: 30 },
    { hours: 17, minutes: 0 },
    { hours: 18, minutes: 0 },
    { hours: 21, minutes: 0 },
    { hours: 21, minutes: 30 },
  ];

  // // Función para formatear horas y minutos
  // const formatearHora = (hora, minutos) => {
  //   console.log('HORA FORMATEADA:', `${hora.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}`);
  //   return `${hora.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}`;
  // };

  // // Recorrer el array y formatear las horas
  // const horasFormateadas = turnosReservados.map((turno) => ({
  //   time: formatearHora(turno.hours, turno.minutes), //a cada hora le asigno una clave time
  // }));

  // // Crear un objeto JSON
  // const data = {
  //   turnos: horasFormateadas,
  // };
  // // Convertir a string JSON
  // const jsonData = JSON.stringify(data);
  // console.log(jsonData);

  // console.log('Horas formateadas', horasFormateadas);

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

    // Las horas fuera de los rangos permitidos estarán deshabilitadas
    return (
      (tiempoEnMinutos >= rangoInicio1 && tiempoEnMinutos < rangoFin1) || // 00:00 - 02:00
      (tiempoEnMinutos >= rangoInicio2 && tiempoEnMinutos <= rangoFin2) // 14:00 - 23:00
    );
  };

  // Función para asignar clases a las horas
  const getTimeClassName = (time) => {
    const horaActual = time.getHours();
    const minutoActual = time.getMinutes();
    const tiempoEnMinutos = horaActual * 60 + minutoActual;

    // Verificar si la hora actual es un turno reservado
    const esHoraReservada = turnosReservados.some(
      (turno) => turno.hours === horaActual && turno.minutes === minutoActual
    );

    // Verificar si la hora actual está a 30 minutos después de un turno reservado
    const esHora30MinutosDespues = turnosReservados.some((turno) => {
      const turnoEnMinutos = turno.hours * 60 + turno.minutes;
      return tiempoEnMinutos === turnoEnMinutos + 30;
    });

    if (esHoraReservada || esHora30MinutosDespues) {
      return 'turno-reservado';
    }

    return 'turno-libre';
  };

  const handleTimeChange = (tiempo) => {
    setSelectedDate(tiempo);
    const horaFormateada = tiempo.toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
    });
    console.log('TIME:', horaFormateada);
    onTimeChange(horaFormateada); // Llamada a la función para pasar solo la hora al componente padre
  };

  // const defaultTime = new Date();
  // defaultTime.setHours(11, 0);
  return (
    <div className="time-picker-container">
      <div className="time-picker">
        <FontAwesomeIcon icon={faClock} className="icono-time" />
        <DatePicker
          selected={selectedDate}
          onChange={handleTimeChange}
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
          timeClassName={getTimeClassName}
        />
      </div>
    </div>
  );
};

TimePickerComponent.propTypes = {
  onTimeChange: PropTypes.func.isRequired,
};
