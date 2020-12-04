import { ADD_TASK, setNotes, SET_TASK } from "./actions"

const initialState = {
  tasks: []
}

export const taskReducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_TASK: {
      return {...state, tasks: [...state.tasks, action.payload]}
    }
    case SET_TASK: {
      return {...state, tasks: action.payload}
    }
    default:
      return state
  }
}

export const saveReducer = () => async (dispatch, getState) => {
  const tasks = getState().tasks;
  await fetch("http://localhost:5000/tasks", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    },
    body: JSON.stringify(tasks)
  })
  alert("Success")
} 

export const loadReducer = () => async (dispatch, getState) => {
  const tasks = await fetch("http://localhost:5000/tasks").then(res => res.json())
  dispatch(setTasks(tasks))
} 