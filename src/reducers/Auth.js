import { AUTH_USER , AUTH_ERROR} from "../actions/types";

const INIT_STATE = {
  authenticated: "",
  errorMessage: "",
};

export default function (state = INIT_STATE, action) {
  switch (action.type) {
    case AUTH_USER:
      return {...state, authenticated: action.payload};
    case AUTH_ERROR :
      return {...state, errorMessage:action.payload}
      default:
        return state
  }
 
}
