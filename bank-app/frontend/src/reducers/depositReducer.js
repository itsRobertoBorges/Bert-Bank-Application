const initialState = {
  amount: 0,
};

const depositReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DEPOSIT_AMOUNT":
      return {
        ...state,
        amount: state.amount + action.payload,
      };
    default:
      return state;
  }
};

export default depositReducer;