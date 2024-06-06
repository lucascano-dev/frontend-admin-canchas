import hero from '../../assets/images/hero.jpeg';
import './Hero.css';
import { Buttons } from '../Buttons/Buttons';
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/about');
  };

  return (
    <div className="hero">
      <img className="hero-image" src={hero} alt="manarola italia" />

      <div className="hero-overlay">
        <h1 className="overlay-title">Sale Fulbacho⚽</h1>

        <div className="overlay-container">
          <p className="overlay-paragraph">
            La pasión por el fútbol la podes disfrutar con nosotros y la manera más sencilla y rápida de reservar
            canchas de fútbol en tu ciudad. Con solo unos clics, encuentra la cancha perfecta para tu equipo, elige la
            hora que mejor te convenga y disfruta del mejor fútbol.
          </p>

          <Buttons text="¡Reserva ahora!" handleClick={handleClick} color="btn btn-outline-warning fw-bold py-xxl-2" />
        </div>
      </div>
    </div>
  );
};
