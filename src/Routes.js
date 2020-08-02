import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Users from './components/Users';
import CreateUser from "./components/CreateUser";
import EditUser from "./components/EditUser";

const Routes = () => {
    return(
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/users' component={Users}/> 
            <Route path='/user/create' component={CreateUser}/>
            <Route path='/user/edit/:id' component={EditUser}/>
        </Switch>
    )
}

export default Routes;