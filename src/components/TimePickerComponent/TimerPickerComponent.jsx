import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
// import 'react-datepicker/dist/react-datepicker.css';
import './TimerPickerComponent.css';

export const TimePickerComponent = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="time-picker-container">
      <div className="time-picker">
        <FontAwesomeIcon icon={faClock} className="icono-time" />
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={30}
          timeCaption="Time"
          dateFormat="HH:mm"
          timeFormat="HH:mm"
        />
      </div>
    </div>
  );
};
