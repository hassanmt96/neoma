import React from 'react'
import styled from 'styled-components'
import Navbar from '../HomePage/Navbar';
// import SortBar from 'Tasks'
// import Sortbar from './Tasks/Sortbar';


const Container = styled.div`
    width: auto;
    margin-left: 16rem;
    position: relative;
    padding: 0 4rem;
`


const Main = () => {
    return (
        <Container>
            <Navbar/>
        </Container>
    )
}



export default Main;
