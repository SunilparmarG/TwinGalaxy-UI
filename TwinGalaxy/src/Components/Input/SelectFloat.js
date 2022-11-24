import './Input.scss';
import {Form, FloatingLabel} from 'react-bootstrap'
import { propTypes } from 'react-bootstrap/esm/Image';

const SelectComponent = ({ id, defaultOption, labelValue, className, options, ...rest }) => {
    const name =
      "form-select " + "form-control" + 
      (className || "");
    return (
      <>
       <FloatingLabel controlId={id} label={labelValue} >
        <Form.Select aria-label="Floating label select example" className={name} >
          <option>{defaultOption}</option>
          <option>One</option>
          
        </Form.Select>
      </FloatingLabel>
      </>
        // <Form.Group>
        //   <Form.Control {...rest} type={type} className={name} id={id} placeholder={placeholder} />
        // </Form.Group>
    );
  };
  
  
  export default SelectComponent;