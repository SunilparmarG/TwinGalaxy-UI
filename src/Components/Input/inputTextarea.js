import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import React from 'react';
import './Input.scss';
const InputTextarea = (props) => {
  return (
    <div className="inputFeild"> 
      <Form.Group className="mb-3">
      <Form.Label>Message</Form.Label>  
        <Form.Control as="textarea" placeholder='Type Something' rows={3} />
      </Form.Group>
    </div>
  );
};

export default InputTextarea; 
