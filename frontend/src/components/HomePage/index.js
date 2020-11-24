import React from 'react'
import styled from 'styled-components';
import './HomePage.css'
import NavBar from './Navbar'



const HomePage = () => {
    return (
        <Container>
            <NavBar />
        </Container>
    )
}

const Container = styled.div`
background:#171C48;
height: 100vh;`

export default HomePage;