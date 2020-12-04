import React from 'react'
import styled from 'styled-components';
import list from '../../assets/listapp.png';


const ListLogo = () =>{
    return (
        <LogoWrapper>
               <img src={list} type='list' alt=''/>
        </LogoWrapper>
     
     )
    }
    
    
    
    const LogoWrapper = styled.div`
    width: 50%;
    height: 50%;
    `
    
    
export default ListLogo;