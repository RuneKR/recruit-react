import { action } from "typesafe-actions";
import { Constants } from "./constants";

export function getCurrentUser() {
  return action(Constants.GET_CURRENT_USER);
}
