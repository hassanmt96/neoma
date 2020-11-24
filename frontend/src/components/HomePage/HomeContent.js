//ADD PICTURES OF THE SITE STUFF HERE
import React from 'react'
import styled from 'styled-components';
import Gif from './Gif'


 const HomeContent = () => {
    return (
        <Container>
        <Textbox>
            <h3>Work On your dreams with simplicty and comfort</h3></Textbox>
        <Gif/>
        </Container>
    )
}

const Container = styled.div`
    display:flex;
    justify-content: flex-end;
    
    h3 {
        color: #FFF0F0;
        text-align: center;
        font-size: 22px;
      }
    
      span {
        color: #5dc399;
        font-weight: 300;
        font-size: 18px;
      }
    `
const Textbox = styled.div`

h3 {
    color: #FFF0F0;
    text-align: center;
    font-size: 22px;
  }

  span {
    color: #5dc399;
    font-weight: 300;
    font-size: 18px;
  }
`
export default HomeContent;
