import hero from '../../assets/images/hero.jpeg';
import './Hero.css';
import { Buttons } from '../Buttons/Buttons';
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/reservas');
  };

  return (
    <div className="hero">
      <img className="hero-image" src={hero} alt="manarola italia" />

      <div className="hero-overlay">
        <div className="container">
          <h1 className="overlay-title text-center">⚽Sale Fulbacho</h1>

          <p className="overlay-paragraph text-center">
            Disfrutá con nostros la pasión por el fútbol y reservá tu cancha para un fulbacho con amigos.
          </p>

          <Buttons text="¡Reserva ahora!" handleClick={handleClick} color="btn btn-warning fw-bold py-xxl-2" />
        </div>
      </div>
    </div>
  );
};
