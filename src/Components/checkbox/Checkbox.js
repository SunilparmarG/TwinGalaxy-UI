import "./Checkbox.scss";
import { Form } from 'react-bootstrap'; 
import PropTypes from 'prop-types';
const Checkbox = ({ props, label, id }) => { 
    return (
        <>
            {/* <Form.Check type="radio" aria-label="radio 1" /> */}
            <div className="radioWrap">
                <input id={id} type="radio" name="radio-group" checked />
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