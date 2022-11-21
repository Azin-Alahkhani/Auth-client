import { AUTH_USER } from "./types";
import axios from 'axios'

// sign up action creator
export const signup = (formProps) => async (dispatch) => {
         const response = await axios.post('http://localhost:3000/signup', formProps)

         dispatch({type : AUTH_USER, payload: response.data.token})

        }
