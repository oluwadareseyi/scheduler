import React from "react";
import "./ContactData.scss";
import { connect } from "react-redux";
import Input from "../UI/Input/Input";

const ContactData = props => {
  const inputArray = [];
  for (const key in props.formData) {
    inputArray.push({
      id: key,
      inputInfo: props.formData[key]
    });
  }

//   console.log(inputArray);
  

  return (
    <div className="contact-data">
      <div className="title-1">Enter your information</div>
      <div className="title-2">Personal data</div>
      {inputArray.map(element => (
          <Input 
          key={element.id}
          value={element.inputInfo.value}
          label={element.inputInfo.label}
          elementConfig={element.inputInfo.elementConfig}
          changed={(event) => props.changedHandler(event, element.id)}
          />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    formData: state.contact.formData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changedHandler: (event, id) => dispatch({ type: "CHANGE", event, id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactData);
