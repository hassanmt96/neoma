import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import React, { Component } from 'react';
import {Field, reduxForm } from 'redux-form';

//redux???

function TaskManagement({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);



  return(

    <form>
        <Field 
            name="Task Title"
            component={}
            />
        </form>
  )


//

  }

//there will be multiple forms where the user has the ability to create and delete a Task within a Project
  export default reduxForm(
      {
        form: 'TaskNewForm'
      }
  )(TaskManagement);


  //TaskEdit- merge forms together 