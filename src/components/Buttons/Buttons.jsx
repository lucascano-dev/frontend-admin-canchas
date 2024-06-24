import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export const Buttons = ({ text, styleBootstrap, toURL }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(toURL);
  };

  return (
    <div className="d-grid col-6 mx-auto">
      <button onClick={handleClick} className={styleBootstrap} type="button">
        {text}
      </button>
    </div>
  );
};

Buttons.propTypes = {
  text: PropTypes.string.isRequired,
  styleBootstrap: PropTypes.string,
  toURL: PropTypes.string.isRequired,
};
