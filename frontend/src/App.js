import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignUpFormPage from "./components/SignUpFormPage";
import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import HomePage from './components/HomePage'
import TaskManagementPage from './components/TaskManagementPage'


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);


  return (
    
    isLoaded && (
      <Switch>
       <Route exact path="/">
          <HomePage />
        </Route> 
        <Route path="/login">
          <LoginFormPage />
        </Route>
        <Route path="/register">
          <SignUpFormPage />
        </Route>
        <Route path="/demo">
        <TaskManagementPage />
        </Route>
      </Switch>
    )
    );
  };
  
  export default App;
  {/* <Route path="/profile">
    <ProfilePage /> */}
  {/* </Route> */}