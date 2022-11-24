import React, {useState} from 'react'
import './Input.scss';
import {Form, FloatingLabel} from 'react-bootstrap'

const InputComponent = ({  type,  label, className, required, ...rest }) => {
    
  const [inputType, setInputType] = useState(type)
  const name =
      "form-control " +
      (className || "");
      const labelRequired =  <span className='required'>Required</span>
    
    return (
      <>
         <FloatingLabel  label={label}
        className="mb-3"
      >
        <Form.Control  {...rest} type={inputType} className={name}   />
        {
          (required === true) ? (labelRequired) : <span></span>
        }
      </FloatingLabel>
      
      </>
        
    );
  };
  
  
  export default InputComponent;