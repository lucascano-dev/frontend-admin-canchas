import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import './Selector.css';

export const Selector = () => {
  const navigate = useNavigate();

  const handleChange = (event) => {
    if (event.target.value === '0') {
      navigate('/reservas');
    }
  };

  return (
    <div className="w-50">
      <Form.Select className="selector" aria-label="Default select example" onChange={handleChange} defaultValue="">
        <option value="" disabled>
          Clic aquí para reservar ahora
        </option>
        <optgroup label="Reservas">
          <option value="0">Reservar otros días</option>
        </optgroup>
        <optgroup label="Disponibilidad">
          <option value="1">Consultá disponibilidad</option>
          <option value="2">Hoy hay canchas disponibles</option>
        </optgroup>
      </Form.Select>
    </div>
  );
};
