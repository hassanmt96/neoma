import React from "react";
import styled from "styled-components";
import bgImg from "../../assets/bg.png";
import SideBar from "./Sidebar";
import Main from "./Main";

const App = () => {
  return (
    <RegisterContainer>
      <RegisterWrapper>
        <Main />
        <SideBar />
      </RegisterWrapper>
    </RegisterContainer>
  );
};

const RegisterContainer = styled.div`
  background: #171c48;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
const RegisterWrapper = styled.div`
  background-image: url(${bgImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
`;

export default App;
