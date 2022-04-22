import React, { useEffect } from 'react';
import '../../App.css';
import Home from '../UserMainPage/home/Home';
import Pagenotfound from '../LogInPage/pagenotfound/Pagenotfound';
import Login from '../LogInPage/login/Login'
import Register from '../LogInPage/Register/Register'
import { Switch, Route, Redirect } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import { UserAllowance } from '../Redux/AuthSlice';

function Routes() {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  useEffect(() => {
    console.log('dispatch: ', state)
    if ('isUserAuthenticated' in localStorage && 'userToken' in localStorage) {
      dispatch(UserAllowance({
        isUserLoggedIn: localStorage.getItem('isUserAuthenticated'),
        userToken: localStorage.getItem('userToken')
      }))
    }
  }, [dispatch]);


  return (
    <>
      <Switch>
        {
          state.isUserLoggedIn !== 'false' && state.isUserLoggedIn !== false ?
            (
              <>
                <Redirect from='/' to="/home" />
                <Route path="/home" component={Home} />
              </>
            ) : (
              <>
                <Redirect from='/' to="/login" />
                <Route path="/login" component={Login} />
                <Route path="/pagenotfound" component={Pagenotfound} />
                <Route path="/register" component={Register} />
              </>
            )
        }
      </Switch>
    </>
  );
}

export default Routes;
