import React from 'react'
import styled from 'styled-components';
import effort from '../../assets/effort.gif';




const Video = () =>{
  return (
    <gifWrapper>
          <img src={effort} type="gif" />
      </gifWrapper>
    );
  }
  
  
    const gifWrapper = styled.div` 
  
    width: 100%;
    height: 100%;
    display: flex-end;
    justify-content: center;
    align-items: center;
  `


  export default Video; 


