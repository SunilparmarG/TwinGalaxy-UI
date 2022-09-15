import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import './Input.scss';

function Select(props) {
  return (
    <Form.Group className="mb-3 me-3 inputFeild">
      <Form.Label>{props.label}</Form.Label>
      <Form.Select className={props.className}>
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
    </Form.Group>
  );
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};
export default Select;
