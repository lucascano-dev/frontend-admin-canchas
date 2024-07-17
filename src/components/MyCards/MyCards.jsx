import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { Buttons } from '../Buttons/Buttons';

export const MyCards = ({ title, text, imageUrl, buttonVariant, textButton, toURL }) => {
  console.log(imageUrl);

  return (
    <Card style={{ width: '17rem' }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
      {/* <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup> */}
      <Card.Body>
        <Buttons text={textButton} toURL={toURL} styleBootstrap={buttonVariant} />
      </Card.Body>
    </Card>
  );
};

MyCards.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonVariant: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  textButton: PropTypes.string.isRequired,
  toURL: PropTypes.string.isRequired,
};
