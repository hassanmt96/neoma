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
            <MenuLink title="Home" icon={'home'}/>
            <br></br>
            <MenuLink title="My-Tasks" icon={'file-multiple'} />
            <br></br>
            <MenuLink title="Inbox" icon={'inbox'}/>
            <br></br>
            <MenuLink title="Favorites" icon={'heart'}/>
            <br></br>
            <MenuLink title="Settings" icon={'cog'} />
            <br></br>
            <MenuLink title="Calendar" icon={'calendar'} />
        </Container>
    )
}

export default Menu;
