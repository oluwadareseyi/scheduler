const initialState = {
  formData: {
    name: {
      type: "input",
      elementConfig: {
        name: "name",
        type: "text",
        placeholder: "please enter your full name"
      },
      label: "name",
      value: "",
      validity: {
        required: true
      },
      valid: false,
      touched: false
    },
    
    email: {
      type: "input",
      elementConfig: {
        name: "email",
        type: "email",
        placeholder: "please enter your e-mail address"
      },
      label: "work email address",
      value: "",
      validity: {
        required: true
      },
      valid: false,
      touched: false
    },
    phone: {
        type: "input",
        elementConfig: {
          name: "phone",
          type: "tel",
          placeholder: "please enter your phone number"
        },
        label: "phone number",
        value: "",
        validity: {
          required: true
        },
        valid: false,
        touched: false
      }
  },


};

const reducer = (state = initialState, action) => {
  switch (action.type) {
      case "CHANGE":
          const formCopy = {...state.formData}
          const formElement ={...formCopy[action.id]}
          const event = action.event;
          formElement.value = event.target.value;
          formCopy[action.id] = formElement;
        //   console.log(formCopy);
          
          
          
      return {
        ...state,
        formData: formCopy
      }
    default:
      return state;
  }
};

export default reducer;
