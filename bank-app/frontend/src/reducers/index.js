import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import depositReducer from "./depositReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  deposit: depositReducer,
});