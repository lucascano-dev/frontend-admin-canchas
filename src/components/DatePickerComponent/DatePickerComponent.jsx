import { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePickerComponent.css';

registerLocale('es', es);

export const DatePickerComponent = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <DatePicker locale="es" className="w-75" showIcon selected={startDate} onChange={(date) => setStartDate(date)} />
    </>
  );
};
