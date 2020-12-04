import React from 'react'
import MenuLink from './MenuLink'
import styled from 'styled-components'


const Container = styled.div`
    margin-top: 2rem;
    width: 100%;
    align-items: center;
`




const Menu = () => {
    return (
        <Container>
            <MenuLink exact path='/' title="Home" icon={'home'}/>
            <br></br>
            <MenuLink title="My-Tasks" icon={'file-multiple'} />
            <br></br>
            <MenuLink href='' title="Add a task" icon={'cog'} />
            <br></br>
            <MenuLink title="Invite friends" icon={'calendar'} />
        </Container>
    )
}

export default Menu;
