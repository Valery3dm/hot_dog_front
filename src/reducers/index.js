import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import items from "./items";

export default combineReducers({
  items,
  form: formReducer,
});