import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';
import './Selector.css';

export const Selector = ({ textoInicial = 'Seleccione una opción', optionsData, handleChange }) => {
  // FORMATO DEL OBJETO CON LAS OPCIONES DEL SELECTOR
  // const optionsData = [
  //   {
  //     label: 'Reservas',
  //     options: [{ value: '0', text: 'Reservar otros días' }],
  //   },
  //   {
  //     label: 'Disponibilidad',
  //     options: [
  //       { value: '1', text: 'Consultá disponibilidad' },
  //       { value: '2', text: 'Hoy hay canchas disponibles' },
  //     ],
  //   },
  // ];

  return (
    <div className="container-selector">
      <Form.Select
        className="formulario-selector w-auto"
        aria-label="Default select"
        onChange={handleChange}
        defaultValue=""
      >
        <option value="" disabled>
          {textoInicial}
        </option>
        {optionsData.map((group, index) => (
          <optgroup key={index} label={group.label}>
            {group.options.map((option, idx) => (
              <option key={idx} value={option.value}>
                {option.text}
              </option>
            ))}
          </optgroup>
        ))}
      </Form.Select>
    </div>
  );
};

Selector.propTypes = {
  optionsData: PropTypes.array,
  textoInicial: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};
