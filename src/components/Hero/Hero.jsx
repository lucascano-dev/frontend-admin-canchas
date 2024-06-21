import hero from '../../assets/images/hero.jpeg';
import { Selector } from '../Selector/Selector';
import './Hero.css';

export const Hero = () => {
  return (
    <div className="hero">
      <img className="hero-image" src={hero} alt="manarola italia" />

      <div className="hero-overlay">
        <div className="container-left">
          <h1 className="overlay-title text-center">Sale Fulbacho⚽</h1>

          <p className="overlay-paragraph">
            Disfrutá con nostros la pasión por el fútbol y reservá tu cancha para un fulbacho con amigos.
          </p>

          <Selector />
        </div>
      </div>
    </div>
  );
};
