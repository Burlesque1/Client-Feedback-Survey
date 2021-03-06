import axios from "axios";
import {
  FETCH_USER,
  FETCH_SURVEYS,
  DELETE_SURVEY,
  SORT_ASC
} from "./types";

// redux-thunk returns a function which gets called with 'dispatch'
export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post("/api/stripe", token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post("/api/surveys", values);

  history.push("/surveys");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchSurveys = () => async dispatch => {
  const res = await axios.get("/api/surveys");

  dispatch({ type: FETCH_SURVEYS, payload: res.data });
};

export const deleteSurvey = id => async dispatch => {
  await axios.delete(`/api/surveys/delete/${id}`);
  dispatch({ type: DELETE_SURVEY, id });
};

export const sortBy = () => dispatch => {
  dispatch({ type: SORT_ASC});
};
