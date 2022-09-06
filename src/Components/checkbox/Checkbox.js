import "./Checkbox.scss";
// import Form from 'react-bootstrap/Form';

import PropTypes from 'prop-types';
// import Image from '../Image/Image'

const Checkbox = (props) => {

    return (
        <>
           {/* <Form.Check type="radio" aria-label="radio 1" /> */}
           <div className="radioWrap">
           
            <input id="01" type="radio" name="r" value="1" checked />
            <label for="01" className="ms-2">One</label>
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