import { AUTH_USER, AUTH_ERROR } from "./types";
import axios from "axios";

// signup action creator
export const signup = (formProps, callback) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/signup",
      formProps
    );
    dispatch({ type: AUTH_USER, payload: response.data.token });
    callback();
  } catch (e) {
    dispatch({
      type: AUTH_ERROR,
      payload:
        "An account with this email already exists in our system. try logging in :) ",
    });
    callback();
  }
};
