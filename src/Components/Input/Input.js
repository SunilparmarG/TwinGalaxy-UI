import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import './Input.scss';
const Input = (props) => {
  return (
    <div className="inputFeild"> 
      <Form.Group className="mb-3">
        <Form.Label>{props.label}</Form.Label>
        <Form.Control
          type={props.type}
          placeholder={props.placeholder}
          className={props.className}
          onChange={props.handleOnChange}
          onBlur={props.handleOnBlur}
          onKeyPress={props.handleOnKeyPress}
        />
        {props.iconSrc ? (
          <img src={props.iconSrc} className={props.className} alt="img" />     
        ) : (
          ''
        )}
      </Form.Group>
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  iconSrc: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  handleOnChange: PropTypes.func,
  handleOnBlur: PropTypes.func,
  handleOnKeyPress: PropTypes.func,
};
export default Input;
