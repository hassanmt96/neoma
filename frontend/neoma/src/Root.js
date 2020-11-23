
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

import Landing from "./components/Landing/Landing";
import SignupFormPage from "./components/SignUpFormPage/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage/LoginFormPage.js";
import Navigation from "./components/Navigation";
import * as sessionActions from "./store/session";

const RootContainer = styled.div`
    background-color: #323f4b;
    height: 100vh;
`;

function Root() {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    }, [dispatch]);

    return (
        <RootContainer>
            {isLoaded && (
                <Switch>
                    <Route exact path="/">
                        <Navigation isLoaded={isLoaded} />
                        <Landing />
                    </Route>
                    <Route path="/login">
                        <Navigation isLoaded={isLoaded} />
                        <LoginFormPage />
                    </Route>
                    <Route path="/signup">
                        <Navigation isLoaded={isLoaded} />
                        <SignupFormPage />
                    </Route>
                </Switch>
            )}
        </RootContainer>
    );
}

export default Root;
