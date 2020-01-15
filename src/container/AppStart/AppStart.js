import React from "react";
import Calendar from "../../Components/Calendar/Calendar";
import * as dateFns from "date-fns";
import { connect } from "react-redux";
import "./AppStart.scss";

const AppStart = props => {
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

          <div className={`selecteds ${props.disabledTime ? "" : "visible"}`}>
            <div className="date-wrapper">
              <div className="title">DATE</div>
              <div className="date black">
                {dateFns.format(props.selectedDate, "dd, MMMM yyyy.")}
              </div>
            </div>

            <div className="time-wrapper">
              <div className="title">TIME</div>
              
              <div className={`time ${props.time ? "black" : ""}`}>
                {`${
                  props.time
                    ? `${props.time} - ${props.time.slice(0, 3)}${parseInt(
                        props.time.slice(-2)
                      ) + 15}`
                    : "Please Select"
                } `}
              </div>

            </div>
          </div>
        </div>
        <div className="top-section--right">
          <Calendar />
        </div>
      </div>
      <div className="footer">
        <div className="footer-items">
          <button className="prev">
            <i className="fas fa-arrow-left"></i> Back
          </button>
          <button
            className={`next ${
              props.time === null && props.timeIndex === -1 ? "disabled" : ""
            }`}
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    time: state.time,
    selectedDate: state.selectedDate,
    disabledTime: state.disabledTime,
    timeIndex: state.timeIndex
  };
};

export default connect(mapStateToProps)(AppStart);
