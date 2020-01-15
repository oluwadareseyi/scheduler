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
    default:
      return state;
  }
};

export default reducer;
