import Dropdown from 'react-bootstrap/Dropdown';
import './DropDownComponent.css';

export const DropDownComponent = ({ titulo }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {titulo}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Cancha 1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Cancha 2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Cancha 3</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Cancha 4</Dropdown.Item>
        <Dropdown.Item href="#/action-5">Cancha 5</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
