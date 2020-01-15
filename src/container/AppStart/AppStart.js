import React from "react";
import Calendar from '../../Components/Calendar/Calendar';
import './AppStart.scss';

const AppStart = () => {
  return (
    <div>
      <div className="top-section">
        <div className="top-section--left">
          <div className="title-1">Walkthrough</div>
          <div className="title-2">Schedule a demo</div>
          <div className="interval">
            <i className="fas fa-clock"></i>{" "}
            <div className="interval-text">10-20min</div>
          </div>
        </div>
        <div className="top-section--right">
            <Calendar />
        </div>
      </div>
      <div className="footer">
          <div className="footer-items">
              <button className="prev"><i class="fas fa-arrow-left"></i> Back</button>
              <button className="next">Next Step</button>
          </div>
      </div>
    </div>
  );
};

export default AppStart;
