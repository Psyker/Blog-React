import React from 'react';

import {Route, Redirect, Switch} from 'react-router-dom';
import HomePage from './components/Home';
import Layout from './components/Layout';
import ProjectPage from './components/Project';
import LoginPage from './components/Login';

export default class App extends React.Component {
    render() {
        return (
            window.location.pathname === '/login' ?
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

