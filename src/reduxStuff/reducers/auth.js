import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  REGISTER,
  USER_ID
} from "../actions/auth";

export default (
  state = {
    isAuthenticated: false,
    user: {},
    id: {}
  },
  action
) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.user
      };
    case USER_ID:
      return {
        ...state,
        id: action.id
      };
    case REGISTER:
      return {
        ...state,
        user: action.user,
        isAuthenticated: true
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        user: {}
      };
    default:
      return state;
  }
};
