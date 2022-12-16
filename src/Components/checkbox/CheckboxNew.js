import "./Checkbox.scss";
import { Form } from 'react-bootstrap'; 
import PropTypes from 'prop-types';
const Checkbox = ({ props, label, id }) => { 
    return (
        <>
            {/* <Form.Check type="radio" aria-label="radio 1" /> */}
            <div className="checkboxWrap form-check">  
                <input id={id} type="checkbox" name="checkbox-group" className="form-check-input" /> 
                <label for={id}>{label}</label>  
            </div>
        </>
    );
};
Checkbox.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    className: PropTypes.string,
};

export default Checkbox; 