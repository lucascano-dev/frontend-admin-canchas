import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
import { setHours, setMinutes } from 'date-fns';

import './DatePicker.css';
import { useState } from 'react';

registerLocale('es', es);

export const DatePickerComponent = () => {
  const [startDate, setStartDate] = useState(setHours(setMinutes(new Date(), 0), 10));

  //   let handleColor = (time) => {
  //     return time.getHours() > 9 ? 'text-success' : 'text-error';
  //   };

  const mostrarFecha = () => {
    console.log(startDate);
    alert(startDate);
  };

  const horarioBloqueados = {
    '2024-07-18': ['13:30'],
    '2024-07-20': ['14:00', '15:00'],
  };

  const filterTime = (time) => {
    const date = new Date(time);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    // // Bloquear 13:30 el 18 de julio
    // if (day === 18 && month === 6 && hours === 13 && minutes === 30) {
    //   return false;
    // }

    // // Bloquear 14:00 y 15:00 el 20 de julio
    // if (day === 20 && month === 6 && (hours === 14 || hours === 15) && minutes === 0) {
    //   return false;
    // }

    // // Permitir todos los demás horarios
    // return true;

    const formattedDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;

    if (horarioBloqueados[formattedDate] && horarioBloqueados[formattedDate].includes(formattedTime)) {
      return false;
    }

    return true;
  };

  return (
    <>
      <div>
        <DatePicker
          timeCaption="Hora"
          className="date-picker"
          inline
          showTimeSelect
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          //   timeClassName={handleColor}
          locale={'es'}
          dateFormat={'dd/MM/yyyy'}
          minTime={setHours(setMinutes(new Date(), 59), 9)}
          maxTime={setHours(setMinutes(new Date(), 30), 23)}
          //   excludeTimes={excludeTimes} // Filtra los horarios específicos
          //   excludeDates={excludeDates} // Excluye la fecha específica
          filterTime={filterTime}
        >
          <div style={{ color: 'red' }}>Seleccione una fecha y una hora</div>
        </DatePicker>
      </div>

      <input type="button" value="Mostrar fecha" onClick={mostrarFecha} />
    </>
  );
};
