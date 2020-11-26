import React from 'react'
import styled from 'styled-components';
import './HomePage.css'
import NavBar from './Navbar'
import HomeContent from './HomeContent'



const HomePage = () => {
    return (
        <Container>
            <NavBar />
            <HomeContent/>
        </Container>
    )
}

const Container = styled.div`
background:#171C48;
height: 200vh;`




export default HomePage;