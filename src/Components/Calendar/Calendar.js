import React, { useState } from "react";
import * as dateFns from "date-fns";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import "./Calendar.scss";

let hours = [];
for (let i = 0; i <= 47; i++) {
  let n = i % 2 === 0 ? i / 2 + ":00" : (i + 1) / 2 - 1 + ":30";
  if (n < 10) {
    n = "0" + n;
  }

  if (n.length === 4) {
    n = "0".concat(n);
  }
  hours.push(n);
}

const Calendar = props => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const nextMonth = () => {
    setCurrentDate(dateFns.addMonths(currentDate, 1));
  };
  const prevMonth = () => {
    setCurrentDate(dateFns.subMonths(currentDate, 1));
  };

  // console.log(
  //   
  // );

  const header = () => {
    const dateFormat = "MMMM yyyy";
    return (
      <div className="header">
        <div className="header-date">
          <TransitionGroup>
            <CSSTransition
              in={true}
              appear={false}
              key={currentDate}
              timeout={900}
              classNames={"slide"}
            >
              <span>{dateFns.format(currentDate, dateFormat)}</span>
            </CSSTransition>
          </TransitionGroup>
        </div>

        <div className="icons">
          <div className=" icon prev-arrow" onClick={prevMonth}>
            chevron_left
          </div>

          <div className="icon prev-arrow" onClick={nextMonth}>
            chevron_right
          </div>
        </div>
      </div>
    );
  };

  const daysOfWeek = () => {
    const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    return (
      <div className="days">
        {days.map((day, i) => (
          <div key={i} className="day">
            {day}
          </div>
        ))}
      </div>
    );
  };

  const cells = () => {
    const monthStart = dateFns.startOfMonth(currentDate);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);
    
    // console.log();

    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);

        const cloneDay = day;
        days.push(
          <div
            className={`column cell ${
              !dateFns.isSameMonth(day, monthStart)
                ? "disabled"
                : dateFns.isSameDay(day, props.selectedDate)
                ? "selected"
                : "today"
            } `}
            id={`${
              dateFns.format(day, "dd MMMM yyyy") ===
              dateFns.format(new Date(), "dd MMMM yyyy")
                ? "current-date"
                : ""
            }`}
            key={day}
            onClick={() => props.setSelectedDate(cloneDay)}
          >
            <span
              className={`number ${
                dateFns.format(day, "d").length === 1 ? "align-number" : ""
              }`}
            >
              {formattedDate}
            </span>
          </div>
        );
        day = dateFns.addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {" "}
          {days}{" "}
        </div>
      );
      days = [];
    }
    return <div className="calendar-body">{rows}</div>;
  };

  return (
    <div className="component">
      <div className="calendar">
        <div className="calendar-title">Select a Date & Time</div>
        <div>{header()}</div>
        <div>{daysOfWeek()}</div>
        <div>{cells()}</div>
      </div>
      <div className="hours">
        {hours.map((hour, i) => (
          <div
            key={i}
            className={`time ${props.disabledTime ? "disabled" : ""} ${
              i === props.timeIndex ? "active" : ""
            }`}
            onClick={() => props.setTimeIndex(hour, i)}
          >
            {hour}
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    selectedDate: state.calendar.selectedDate,
    disabledTime: state.calendar.disabledTime,
    time: state.calendar.time,
    timeIndex: state.calendar.timeIndex
  };
};


const mapDispatchToProps = dispatch => {
  return {
    setSelectedDate: (day) => dispatch({type: "SELECTED", day}),
    setTimeIndex: (hour, key) => dispatch({type: "TIME", hour, key})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
