import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux"; // Import combineReducers
import errorReducers from "./reducers/errorReducers";
import authReducers from "./reducers/authReducers";

const initialState = {};
const middleware = [thunk];

// Combine the reducers
const rootReducer = combineReducers({
  errorReducers,
  authReducers,
  // Add more reducers if needed
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
