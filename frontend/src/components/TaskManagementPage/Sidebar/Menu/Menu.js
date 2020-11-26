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
            <MenuLink title="My-Tasks" icon={'file-multiple'} active />
            <MenuLink title="Inbox" icon={'inbox'}/>
            <MenuLink title="Favorites" icon={'heart'}/>
            <MenuLink title="Settings" icon={'cog'} />
            <MenuLink title="Calendar" icon={'calendar'} />
        </Container>
    )
}

export default Menu;
