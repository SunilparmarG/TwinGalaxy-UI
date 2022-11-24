import React from 'react';
import "./attachment.scss";

const SelectAttachmentComponent = (props) => {
    const classes =
    "text-center upload-style1 p-4 " +
    (props.className || "") ;
  
  return (
    <div className={classes}>
        <label htmlFor="one">
            <input type="file" id="one" />
            <span>{props.title}</span>
        </label>
        <p className="text-col5  fw500 fs-15 mb-0">{props.otherText}</p>
    </div>
  )
}

export default SelectAttachmentComponent