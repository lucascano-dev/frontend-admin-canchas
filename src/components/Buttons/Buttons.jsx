import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export const Buttons = ({ text, styleBootstrap, toURL, type = 'button' }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(toURL);
  };

  return (
    <div className="d-grid col-6 mx-auto">
      <button onClick={handleClick} className={styleBootstrap} type={type}>
        {text}
      </button>
    </div>
  );
};

Buttons.propTypes = {
  text: PropTypes.string.isRequired,
  styleBootstrap: PropTypes.string,
  toURL: PropTypes.string.isRequired,
  type: PropTypes.string,
};
