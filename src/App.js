import React from 'react';

import { Route, Redirect, Switch } from 'react-router-dom';
import HomePage from './pages/home';
import Layout from './layout/layout';
import ProjectPage from './pages/project';
import LoginPage from './pages/login';

export default class App extends React.Component {
    render() {
        const {match, location, history} = this.props
        return (
        window.location.pathname == '/login' ?
         <Route path="/login" component={LoginPage}/> :
        <div>
            <Layout>
                <Switch>
                    <Route exact path="/home" component={HomePage}/>
                    <Route path="/project/:id" component={ProjectPage}/>
                </Switch>
            </Layout>
        </div> 
        )
    }
}

