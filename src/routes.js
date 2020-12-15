import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// páginas
import Login from './pages/login';
import UserList from './pages/crud/users/read';
import PatientList from './pages/crud/patients/read';
import ExamList from './pages/crud/exams/read';
import Dashboard from './pages/dashboard';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route component={Login} path="/" exact />
                <Route component={UserList} path="/register" exact />
                <Route component={PatientList} path="/patients" exact />
                <Route component={ExamList} path="/exams" exact />
                <Route component={Dashboard} path="/dashboard" exact />
                {/* 
                <Route path="/profile" component={Profile} />
                <Route path="/incidents/new" component={NewIncident} />
                */}
            </Switch>
        </BrowserRouter>
    )
}