import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    padding: 1rem;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 3rem;
`

const ProfileImg = styled.img`
    height: 2rem;
    margin: 0 1rem;
    cursor: pointer;
`

const MessageIcon = styled.span`
    color: ${({ theme }) => theme.colorGray}; 
    font-size: 27px;
    cursor: pointer;
`



const Navbar = () => {
    return (
        <Container>
            <MessageIcon className="iconify" data-inline="false" data-icon="mdi-light:email"></MessageIcon>
            <h1>hello helloo testing</h1>
            
            <ProfileImg src={require('../../assets/images/profilelg.png')} />
        </Container>
    )
}

export default Navbar;