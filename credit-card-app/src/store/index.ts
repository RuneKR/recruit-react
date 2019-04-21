import { UserState } from "./user/types";
import { combineReducers, createStore } from "redux";
import userReducer from "./user/reducer";

export interface RootState {
  user: UserState;
}

const store = createStore(
  combineReducers({
    user: userReducer
  })
);

export default store;
