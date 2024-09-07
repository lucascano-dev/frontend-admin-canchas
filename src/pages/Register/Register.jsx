import { FormularioRegistro } from '../../components/FormularioRegister/FormularioRegistro';
import './Register.css';
import logo from '../../assets/images/logo.png';

export const Register = () => {
  return (
    <div className="container-page-register">
      <div className="container-form-register d-flex">
        <FormularioRegistro />
      </div>
      <div className="container-logo-register">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};
