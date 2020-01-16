const initialState = {
  selectedDate: new Date(),
  disabledTime: true,
  time: null,
  timeIndex: -1,
  buttonState: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECTED":
      return { ...state, selectedDate: action.day, disabledTime: false };

    case "TIME":
      return { ...state, time: action.hour, timeIndex: action.key };

      case "INC":
      return { ...state, buttonState: state.buttonState + 1 };

      case "DEC":
      return { ...state, buttonState: state.buttonState - 1 };

      case "RESET":
      return { ...state, buttonState: 0 };
    default:
      return state;
  }
};

export default reducer;
