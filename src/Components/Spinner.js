import React from "react";
import "./Spinner.css";
const Spinner = () => {
  return (
    <>
      <div className="custom">
        <div className="loader mt-3">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </div>
    </>
  );
};

export default Spinner;
