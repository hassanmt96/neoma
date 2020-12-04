import { ADD_TASK, setTasks, SET_TASK } from './action'

const initialState = {
    task: []
}

export const taskReducer = (state = initialState, action ) => {
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

export const saveTasks = () => async (dispatch, getState) =>{
    const tasks = getState().tasks;
    await fetch("http://localhost:4000/tasks", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        body: JSON.stringify(tasks)
      })
      alert("Success")
    } 
    
    export const loadTasks = () => async (dispatch, getState) => {
      const tasks = await fetch("http://localhost:5000/projects").then(res => res.json())
      dispatch(setTasks(tasks))
    } 