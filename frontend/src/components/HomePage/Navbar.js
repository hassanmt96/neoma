import React, { useState } from 'react'
import styled from 'styled-components'
import Title from '../../assets/asanamain1.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Nav>
            <Logo href="">
                <img src={Title} alt="" /><span>
                </span>
            </Logo>
            <Hamburger onClick={() => setIsOpen(!isOpen)}>
                <span />
                <span />
                <span />
            </Hamburger>
            <Menu isOpen={isOpen}>
                <MenuLink href="/">Why Neoma?</MenuLink>
                <MenuLink href="https://github.com/hassanmt96/neoma-solo">Github</MenuLink>
                <MenuLink href="">Login</MenuLink>
                <MenuLink href="">Try for free</MenuLink>
            </Menu>
        </Nav>
    )
}

const Nav = styled.div`
padding: 0 2rem;
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
background: #2D3BB5;`

const Logo = styled.a`
padding: 0rem 0;
 span{
    
 }`




const Hamburger = styled.div`
    display:none;
    flex-direction: column;
    cursor: pointer;

    span{
    height: 2px;
    width: 25px;
    margin-bottom: 4px;
    border-radius: 5px;
    background: #7b7fda;
}


@media (max-width: 768px){
  display: flex;

}
`

const Menu = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
position: relative;

@media (max-width: 768px){
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({isOpen}) => isOpen ? "300px" : "0"};
    transition: max-height 0.3s ease-in;
}
`

const MenuLink = styled.a`
padding: 1rem 2rem;
cursor: pointer;
text-align: center;
text-decoration: none;
color: white;
transition: all 0.2s ease-in;


&:hover{
    color: #34e1eb;

}
`

export default Navbar;