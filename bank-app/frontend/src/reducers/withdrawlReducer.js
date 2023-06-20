const initialState = {
    amount: 0,
  };
  
  const withdrawlReducer = (state = initialState, action) => {
    switch (action.type) {
      case "WITHDRAWL_AMOUNT":
        return {
          ...state,
          amount: state.amount - action.payload,
        };
      default:
        return state;
    }
  };
  
  export default withdrawlReducer;
  