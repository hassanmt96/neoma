import React from "react";
import styled from "styled-components";

const Main = () => {
  return (
    <MainContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: #f2db96;
    font-size: 65px;
    font-weight: 200;

    @media (max-width: 900px) {
      display: none;
    }
  }
`;

export default Main;