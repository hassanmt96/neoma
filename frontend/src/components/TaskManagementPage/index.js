import React, { useContext } from 'react'
import Dashboard from './containers/Dashboard'
import styled from 'styled-components';
import Sidebar from './Sidebar/Sidebar'
import Main from '../SignUpFormPage/Main';



const TaskManagementPage = () => {
    return (
        <Container>
            <Main/>
        <Sidebar/>
        </Container>
    )
}


export default TaskManagementPage;


const Container = styled.div`
background:#D5DBEB;
height: 200vh;`

