import React, { useContext, useState } from 'react'
import Dashboard from './containers/Dashboard'
import { NewTaskInput } from './Tasks/TaskInput';
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components';
import Sidebar from './Sidebar/Sidebar'
// import Main from '../SignUpFormPage/Main';
import './TaskManagement.css'
import { store } from './Tasks/store'
import { addTask } from './action';
import { saveTasks, loadTasks } from './taskreducer'



const TaskManagementPage = () => {

    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    const onAddTask = (task) => {
        dispatch(addTask(task));
    }

    const onSave = () => {
        dispatch(saveTasks());
    }

    const onLoad = () => {
        dispatch(loadTasks());
    }



    // const [projectName, setProjectName ] = useState('')
    // const [task, setTask ] = useState('')

    return (
        <Container>
            <Sidebar />
            <crudContainer>


                <input addTask={onAddTask} />
                <hr />
                <ul>
                    {/* {tasks.map((task) => {
                        return <li key={task}>{task}</li>;
                    })} */}
                </ul>
                <hr />
                <button onClick={onSave}>Save</button>
                <button onClick={onLoad}>Load</button>



                { //IGNORE FOR NOW 
                    /* <label>Tasks Name:</label>
                    <input type='text' name="projectName" onChange={(e)=>{
                        setProjectName(e.target.value)
                    }} />
                    <label>Task:</label>
                    <input type='text' name="task" onChange={(e)=>{
                        setTask(e.target.value) }} />
                    <button>Submit</button> */}



            </crudContainer>

            {/* /* <Main/>  */}
        </Container>
    )
}


export default TaskManagementPage;


const Container = styled.div`
background:#D5DBEB;
height: 200vh;`

const crudContainer = styled.div`
display:flex;`
