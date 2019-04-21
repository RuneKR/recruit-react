import { ActionType } from "typesafe-actions";
import { User } from "../../models/user.model";
import * as actions from "./actions";

export interface UserState {
  currentUser: User;
}

export type UserActions = ActionType<typeof actions>;
