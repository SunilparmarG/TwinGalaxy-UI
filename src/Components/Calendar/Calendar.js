import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "./Calendar.scss";

import DatePicker from 'react-date-picker';

const Datepicker = (props) => {
  const names = props.className + " " + (props.size || "");
  return (
    <div className="inputFeild">
      <Form.Group className="mb-3">  
        <Form.Label className="mb-2">{props.label}</Form.Label>  
        <div className="new-datepicker">
          <DatePicker
            onChange={props.onChange}
            value={props.value}
            clearIcon={null}
            className="calenderHidden position-absolute"
            placeholderText={props.placeholder}
            dayPlaceholder={"dd"}
            monthPlaceholder={"mm"}
            yearPlaceholder={'yyyy'}
            maxDate={props.maxDate && new Date(props.maxDate)}
            minDate={props.minDate && new Date(props.minDate)}
            name={props.name} 
          /> 
        </div> 
        {props.errors && props.errors[props.name] && 
          <div className="textError mt-2 text-col2 fs-14 fw400">
            {props.errors[props.name]}
          </div>
        }
      </Form.Group>
    </div>
  );
};

export default Datepicker; 

