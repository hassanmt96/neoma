import React from 'react'
import styled from 'styled-components'
// import SortBar from 'Tasks'
import Sortbar from './Tasks/Sortbar';


const Container = styled.div`
    width: auto;
    margin-left: 16rem;
    position: relative;
    padding: 0 4rem;
`


const Main = () => {
    return (
        <Container>
            <Sortbar title="Tasks Due Soon" count={2} />
            <Sortbar title="Recent Projects" count={3} />
        </Container>
    )
}



export default Main;
