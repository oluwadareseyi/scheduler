const initialState = {
  selectedDate: new Date(),
  disabledTime: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECTED":
      return { ...state, selectedDate: action.day, disabledTime: false };

    default:
      return state;
  }
};

export default reducer;
