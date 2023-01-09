import React from "react";
// import Image from "../Image/Image";
import "./Chips.scss";

const ChipsComponent = (props) => {
  return (
    <div className="chips"> 
      <span className="status-chip default">Unread Message</span>
      <span className="status-chip default">Read Message</span>
      <span className="status-chip default">Replied-to Message</span>
      <span className="status-chip default">orwarded Message</span>                 
    </div>
  );
};

export default ChipsComponent;
