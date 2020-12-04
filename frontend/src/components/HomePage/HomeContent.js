//ADD PICTURES OF THE SITE STUFF HERE
import React from 'react'
import styled from 'styled-components';
import Gif from './Gif'
import './HomePage.css';
import ListLogo from './ListLogo'
import dude from '../../assets/dude.png'
import list from '../../assets/list.png'




const HomeContent = () => {
  return (
    <Container>
      <Textbox>
        <h3>Work on your dreams with simplicity and comfort.</h3>
        <br />
        <br />
        <h2>From the small ideas to the bigger picture, Neoma organizes work so teams can work in peace without any hassle.</h2>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h3>Know what's up.</h3>
        <br />
        <h2>Bring your teams notes, ideas, and files all in one place.</h2>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h3>Itemized viewing system.</h3>
        <br></br>
        <h2>Organize and assign tasks. Teams can immediately see what they need to do and which tasks are a priority</h2>
      </Textbox>
      <ItemText>
        <br></br>
        <br></br>
        <br></br>
        <h3>
          <img src={list} type="pic" alt='' />
          {/* <ListLogo /> */}
        </h3>
        {/* <ImgThing src={`../../assets/`}/> */}
      </ItemText>
      <Gif />
    </Container>
  )
}

const ImgThing = styled.img`
    height: 2rem;
    margin: 0 1rem;
    cursor: pointer;`

const Container = styled.div`
    display:flex;
    justify-content: flex-end;
    
    h3 {
        color: #FFF0F0;
        font-size: 22px;
      }
    
      h2 {
        color: #FFF0F0;
        font-size: 22px;
      }
      span {
        color: #5dc399;
        font-weight: 200;
        font-size: 18px;
      }
    `
const Textbox = styled.div`
position: absolute;
width: 518px;
height: 327px;
left: 123px;
top: 218px;

h3 {
    font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 36px;
line-height: 42px;
  }

h2{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
}

  span {
    color: #5dc399;
    font-weight: 100;
    font-size: 18px;
  }
`


const ItemText = styled.div`
position: absolute;
width: 478px;
height: 270px;
left: 788px;
top: 752px;

h3{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 42px;
    color: #FFF0F0;


h2{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
}
span{
    color: #5dc399;
    font-weight: 100;
    font-size: 18px;
}
     
}
`
export default HomeContent;
