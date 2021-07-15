import React from "react";
import { REGISTER, LOGOUT } from "../Action/type";

const initialState = {
  users: false,
};
export default function reducer(state = initialState, Action) {
  const { type, payload } = Action;
  switch (type) {
    case REGISTER:
      return {
        ...state,
        users: true,
      };
    case LOGOUT:
      return {
        ...state,
        users: false,
      };
    default:
      return state;
  }
}
