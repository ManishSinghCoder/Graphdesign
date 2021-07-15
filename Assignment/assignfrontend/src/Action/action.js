import axios from "axios";
import { REGISTER, LOGOUT } from "./type";
export const register = (data, history) => async (dispatch) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };
  try {
    const registration = await axios.post(
      "http://127.0.0.1:8000/social/register/",
      data,
      config
    );
    dispatch({
      type: REGISTER,
      payload: registration.data,
    });
    history.push("/Home");
  } catch (err) {
    dispatch({});
  }
};
export const Logout = (history) => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
  history.push("/");
};
