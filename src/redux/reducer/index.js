import { combineReducers } from "redux";
import counter from "./counter";
import auth from "./auth";
import movie from "./movie";
import updateProfile from "./updateProfile";

export default combineReducers({
  counter,
  auth,
  movie,
  updateProfile,
});
