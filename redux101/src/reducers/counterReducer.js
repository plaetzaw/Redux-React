// Reducers (state, action)
let initialState = {
  count: 0,
};
let counterReducer = (state, action) => {
  if (state === undefined) {
    state = initialState;
  }

  switch (action.type) {
    case "Increase":
      return {
        ...state,
        count: state.count + 1,
      };
    case "Decrease":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default counterReducer;
