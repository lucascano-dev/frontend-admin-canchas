import hero from '../../assets/images/hero.jpeg';
import { DatePickerComponent } from '../DatePicker/DatePicker';
import { Selector } from '../Selector/Selector';
import { useNavigate } from 'react-router-dom';
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
      <img className="hero-image" src={hero} alt="manarola italia" />

      <div className="hero-overlay">
        <div className="container-left">
          <h1 className="overlay-title text-center">Sale Fulbacho⚽</h1>

          <p className="overlay-paragraph">
            Disfrutá con nostros la pasión por el fútbol y reservá tu cancha para un fulbacho con amigos.
          </p>
        </div>

        <div className="container-right">
          <div className="contenedor-selector">
            <Selector textoInicial="Elegí una cancha" optionsData={optionsData} handleChange={handleChange} />
            <DatePickerComponent />
          </div>
        </div>
      </div>
    </div>
  );
};
