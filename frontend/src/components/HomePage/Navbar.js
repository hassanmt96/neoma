import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
    return (
        <Nav>
            <Logo href="">
                Logo<span>
                </span>
            </Logo>
            <Hamburger>
                <span/>
                <span/>
                <span/>
            </Hamburger>
            <Menu>

            </Menu>
        </Nav>
    )
}

const Nav = styled.div`
`

const Logo = styled.a`
`


const Hamburger = styled.div``

const Menu = styled.div``

const MenuLink = styled.a``

export default Navbar;