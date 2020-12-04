
export const ADD_TASK = "ADD_TASK";
export const SET_TASK = "SET_TASK";

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const setTasks = (task) => ({
  type: SET_TASK,
  payload: task,
});