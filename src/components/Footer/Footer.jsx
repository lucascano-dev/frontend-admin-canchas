import './Footer.css';
import logo from '../../assets/images/logo.png';

export const Footer = () => {
  return (
    <div className="Footer d-flex justify-content-center flex-column">
      <div>
        {' '}
        <img src={logo} alt="logo" width={90} />
      </div>
      <p className="text-center">© 2024. Todos los derechos reservados. </p>
      <p className="text-center">Desarrollado por RollingCode</p>
      <h1 className="text-center"></h1>
    </div>
  );
};
