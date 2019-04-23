import * as actions from "../actions";
import reducer from "../reducer";
import { User } from "../../../models/user.model";

describe("User Reducer", () => {
  test("should return the initial state", () => {
    expect(reducer(undefined, {} as any)).toEqual({
      currentUser: {
        firstName: "Guest"
      }
    });
  });

  test("should handle SET_CURRENT_USER", () => {
    const user: User = {
      firstName: "Rookie"
    };
    expect(reducer(undefined, actions.setCurrentUser(user))).toEqual({
      currentUser: user
    });
  });
});
