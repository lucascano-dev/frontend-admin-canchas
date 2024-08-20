// import hero from '../../assets/images/hero.jpeg';
import { useNavigate } from 'react-router-dom';
import './Hero.css';
import { TurneroSelector } from '../TurneroSelector/TurneroSelector';

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="hero">
      <div className="container-hero">
        <div className="titulos">
          <div className="titulo">
            <h1 className="text-white">
              Reservá tus canchas <br /> ahora mismo
            </h1>
          </div>
          {/* <div className="subtitulo">
            <h2 className="text-white">Buscá un turno ideal para tu partido</h2>
          </div> */}
          <div className="subtitulo">
            <h2 className="text-white">Buscá canchas disponibles para vos y tus amigos.</h2>
          </div>
        </div>
        <div className="container-turnero">
          <TurneroSelector />
        </div>
      </div>
      {/* <Selector textoInicial="Elegí una cancha" optionsData={optionsData} handleChange={handleChange} /> */}
      {/* <DatePickerComponent /> */}
    </div>
  );
};
