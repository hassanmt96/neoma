import React, { Component } from 'react';
import Title from '../../../assets/asanamain1.png'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

class Logo extends Component {
  render() {
    return (
      <Logostyle to='/'>
          <img src={Title} alt='' /><span>
          </span>
      </Logostyle>
    )
  }
}

const Logostyle = styled(NavLink)``




export default Logo;