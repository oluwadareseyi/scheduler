import React from "react";
import "./AppDone.scss";
import * as dateFns from "date-fns";
import { connect } from "react-redux";

const AppDone = props => {
  console.log(props.history);

  const btnClick = () => {
    props.history.push('/');
    props.resetBtnState();
  }

  return (
    <div className="app-done">
      <div className="check-icon">
        <svg
          className={`svg`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 500"
        >
          <polyline
            fill="none"
            stroke="#5793e5"
            strokeWidth="60px"
            className={`check animate`}
            points="114,245 194,323 370,140"
          />
        </svg>
      </div>

      <div className="message">We just scheduled a demo for you.</div>
      <div className="email-not">
        A calendar invitation for your upcoming demo session has been sent to
        your email <span className="email">({props.formData["email"].value})</span>
      </div>
      <div className="dt-con">
        <div className="dt-wrapper">
            <div className="date-con">
              <div className="title">Date</div>
              <div className="date black">{dateFns.format(props.selectedDate, "dd, MMMM yyyy.")}</div>
            </div>
            <div className="time-con">
              <div className="title">Time</div>
              <div className="time black">
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

      <div className="buttons">
          <button onClick={btnClick} className="button-1">Get back home</button>
          <button className="button-2">Resend E-Mail</button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    formData: state.contact.formData,
    time: state.calendar.time,
    selectedDate: state.calendar.selectedDate,
    buttonState: state.calendar.buttonState
  };
};

const mapDispatchToProps = dispatch => {
    return {
      resetBtnState: () => dispatch({ type: "RESET" })
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(AppDone);
