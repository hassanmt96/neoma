import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    padding: 0.4rem 1rem;
    background-color: #fc4903;
    margin: 2rem 0;
    border-radius: 5px;
`

const Text = styled.h1`
    font-size: 0.6rem;
    text-transform: uppercase;
    font-weight: 500;
    color: #4103fc;
`

const Person = styled(Text)`
    width: 30%;
`

const TaskStatus = styled(Text)`
    width: 15%;
`



const ProjectStatus = styled(Text)`
    
`

const SortingBar = () => {
    return (
        <Container>
            <Person>Team Member</Person>
            <TaskStatus>Task Status</TaskStatus>
            <ProjectStatus>Project Funding</ProjectStatus>
        </Container>
    )
}

export default SortingBar;