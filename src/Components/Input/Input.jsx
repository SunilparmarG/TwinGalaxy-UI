import React from 'react'
import "../Input/Input.scss";

const inputComponent = ({ id, type, placeholder, labelValue, className, ...rest }) => {
  const name =
    "form-control " +
    (className || "");
  return (
      <div className="form-floating mb-3">
          <input {...rest} type={type} className={name} id={id} placeholder={placeholder}/>
          <label htmlFor={id}>{labelValue}</label>
      </div>
  );
};
export default inputComponent;
