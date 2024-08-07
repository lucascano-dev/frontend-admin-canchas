// import hero from '../../assets/images/hero.jpeg';
import { DatePickerComponent } from '../DatePicker/DatePicker';
import Form from 'react-bootstrap/Form';
import { Selector } from '../Selector/Selector';
import { useNavigate } from 'react-router-dom';
import imgJugador from '../../assets/images/jugador-futbol1.png';
import './Hero.css';

export const Hero = () => {
  const navigate = useNavigate();
  const optionsData = [
    {
      label: 'Canchas',
      options: [
        { value: '0', text: 'Cancha 1' },
        { value: '1', text: 'Cancha 2' },
        { value: '2', text: 'Cancha 3' },
        { value: '3', text: 'Cancha 4' },
        { value: '4', text: 'Cancha 5' },
      ],
    },
  ];

  const handleChange = (event) => {
    if (event.target.value !== '0') {
      navigate('/reservas');
    }
  };

  return (
    <div className="hero">
      <div className="container-hero">
        <div className="titulos">
          <div className="titulo">
            <h1 className="text-white">Reservá tu canchas ahora</h1>
          </div>
          <div className="subtitulo">
            <h2 className="text-white">Buscá un turno ideal para tu partido</h2>
          </div>
        </div>
      </div>
      {/* <Selector textoInicial="Elegí una cancha" optionsData={optionsData} handleChange={handleChange} /> */}
      {/* <DatePickerComponent /> */}
    </div>
  );
};
