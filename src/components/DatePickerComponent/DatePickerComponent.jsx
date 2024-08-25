import { useState } from 'react';
import PropTypes from 'prop-types';

import DatePicker, { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePickerComponent.css';

registerLocale('es', es);

export const DatePickerComponent = ({ onDateChange }) => {
  const [startDate, setStartDate] = useState(null); // Inicialmente null para que aparezca el placeholder

  const handleDateChange = (date) => {
    setStartDate(date);
    onDateChange(date); // Llamada a la función para pasar la fecha al componente padre
  };

  return (
    <>
      <DatePicker
        locale="es"
        showIcon
        selected={startDate}
        placeholderText="Elegí una fecha"
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy" // Formato de fecha que se mostrará en el input
      />
    </>
  );
};

DatePickerComponent.propTypes = {
  onDateChange: PropTypes.func.isRequired,
};
