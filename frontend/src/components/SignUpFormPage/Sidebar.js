import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignUpForm.css';
import logo from '../../assets/atlogo.png';
import styled from 'styled-components'
import Input from "./Input";




function SideBar() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(res => {
          if (res.data && res.data.errors) setErrors(res.data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };





  return (
   
    <Container 
        onSubmit={handleSubmit}>
        <LogoWrapper>
          <img src={logo} alt='' />
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </LogoWrapper>
        <Form onSubmit={handleSubmit}>
          <h3>register.</h3>
          <Input
            type="text"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="text"
            value={username}
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <Input
            type="password"
            value={password}
            placeholder='password'
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Input
           type="password"
           value={confirmPassword}
           placeholder='confirm password'
           onChange={(e) => setConfirmPassword(e.target.value)}
           required
          />
        <button type="submit">Sign Up</button>
        </Form>
        <div>
        <Terms>
        By signing up, I agree this developer should get a dev job<br /> and I should star 
          this repo on gitHub.
        </Terms>
        <h4>
        Already have an account? <span>Sign In</span>
        </h4>
        </div>
    </Container>
  );
}




const Terms = styled.p`
  padding: 0 1rem;
  text-align: center;
  font-size: 10px;
  color: #FFF0F0;
  font-weight: 300;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    color: #FFF0F0;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 40px;
    margin-bottom: 2rem;
  }

  button {
    width: 80%;
    max-width: 350px;
    min-width: 250px;
    height: 40px;
    border: none;
    margin: 1rem 0;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    background-color: #A0D3F8;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in;

    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const LogoWrapper = styled.div`
  img {
    height: 6rem;
  }

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
`;

const Container = styled.div`
  min-width: 400px;
  backdrop-filter: blur(35px);
  background-color: #394084;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 2rem;

  @media (max-width: 900px) {
    width: 100vw;
    position: absolute;
    padding: 0;
  }

  h4 {
    color: #FFF0F0;
    font-weight: bold;
    font-size: 13px;
    margin-top: 2rem;

    span {
      color: #ff8d8d;
      cursor: pointer;
    }
  }
`;


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


export default SideBar;