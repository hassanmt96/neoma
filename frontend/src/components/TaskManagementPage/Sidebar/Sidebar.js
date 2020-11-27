import React from 'react'
import styled from 'styled-components'
import Menu from './Menu/Menu'
import Logo from './Logo'


const Container = styled.div`
    background-color: #171C48;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 13rem;
    display: flex;
    flex-direction: column;
    align-items: center;

`

const Sidebar = () => {

    return (
        <Container>
            <Logo />
            <Menu />
        </Container>
    )
}

export default Sidebar
