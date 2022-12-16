import React from "react";
// import Image from "../Image/Image";
import "./Chips.scss";

const ChipsComponent = (props) => {
  return (
    <div className="chips"> 
      <span className="status-chip default">Allow Basic BB Code: Yes</span>
      <span className="status-chip default">Allow Color BB Code: Yes</span>
      <span className="status-chip default">Allow Basic BB Code: Yes</span>
      <span className="status-chip default">Allow Color BB Code: Yes</span>
      <span className="status-chip default">Allow Basic BB Code: Yes</span>
      <span className="status-chip default">Allow Color BB Code: Yes</span>
    </div>
  );
};

export default ChipsComponent;
