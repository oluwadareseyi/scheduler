import React from "react";
import { withRouter, Route, NavLink, Switch} from 'react-router-dom';
import Calendar from "../../Components/Calendar/Calendar";
import AppDone from '../AppDone/AppDone';

import * as dateFns from "date-fns";
import { connect } from "react-redux";
import "./AppStart.scss";
import ContactData from "../../Components/ContactData/ContactData";

const AppStart = props => {


  const goBack = () => {
    props.history.goBack();
    props.decBtnState();
  }

  let appSkel = (
    <React.Fragment>
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
          <Switch>
              <Route exact path="/" component={Calendar}/>
              <Route path="/form" component={ContactData} />
            </Switch>
          </div>
        </div>
        <div className="footer">
          <div className="footer-items">
              <button 
                onClick={goBack}
                className={`prev ${props.location["pathname"] === "/" ? "disabled" : ""}`}>
                <i className="fas fa-arrow-left"></i> Back
              </button>
            <NavLink className={`${
                  props.time === null && props.timeIndex === -1 ? "disabled" : ""
                }`} to={`${props.buttonState === 0 ? "form" : (props.buttonState === 1 ? "final" : "/" )}`}>
              <button
              onClick={props.incBtnState}
                className={`next`}
              >
                Next Step
              </button>
            </NavLink>
          </div>
        </div>
    </React.Fragment>
  )

  if (props.location["pathname"] === "/final") {
    appSkel = null;
  }
  
  
  return (
    <div>
      <Route path="/final" component={AppDone} />
      {appSkel}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    time: state.calendar.time,
    selectedDate: state.calendar.selectedDate,
    disabledTime: state.calendar.disabledTime,
    timeIndex: state.calendar.timeIndex,
    buttonState: state.calendar.buttonState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    incBtnState: () => dispatch({ type: "INC" }),
    decBtnState: () => dispatch({ type: "DEC" })

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AppStart));
