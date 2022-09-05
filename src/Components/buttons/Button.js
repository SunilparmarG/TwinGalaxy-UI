import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './Buttons.scss'; 

function ButtonComponent(props) { 

  return (

    <Button
      variant={props.variant}
      size={props.size}
      color={props.color}
      className={props.className}
    >
      {props.iconSrc ? (
        <img src={props.iconSrc} className="me-2" alt="img" />
      ) : (
        ''
      )}
      {props.title}
    </Button>

  );

}

ButtonComponent.propTypes = {
  variant: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  className: PropTypes.string,
  iconSrc: PropTypes.string,
  color: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default ButtonComponent;
