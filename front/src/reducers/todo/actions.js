import axios from "axios";

import {createAction} from 'redux-actions'

import { todoTypes } from "./types";

const URL = "http://localhost:5000/api/todos";

// export const changeDescription = (description) => ({
//   type: todoTypes.DESCRIPTION_CHANGED,
//   payload: description,
// });

export const changeDescription = createAction(todoTypes.DESCRIPTION_CHANGED)

export const searchTask = (task) => {
  return (dispatch) => {
    axios.get(`${URL}?sort=-createdAt`).then((resp) => {
      dispatch(sucess(resp.data));
    });
  };
  function sucess(data) {
    return {
      type: todoTypes.SEARCH_TASK,
      payload: data,
    };
  }
};

export const addTask = (task) => {
  return (dispatch) => {
    axios.post(URL, { task }).then();
    dispatch(resetDescription());
    dispatch(sucess(task));
  };
  function resetDescription() {
    return {
      type: todoTypes.DESCRIPTION_CHANGED,
      payload: "",
    };
  }

  function sucess(task) {
    return { type: todoTypes.ADD_TASK, payload: task };
  }
};

// export const doneTask = (id) => ({
//   type: todoTypes.DONE_TASK,
//   payload: id,
// });

export const doneTask = createAction(todoTypes.DONE_TASK)

// export const removeTask = (id) => ({
//   type: todoTypes.REMOVE_TASK,
//   payload: id,
// });

export const removeTask = createAction(todoTypes.REMOVE_TASK)
