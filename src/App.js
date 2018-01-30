import React from 'react';

import {Route, Switch} from 'react-router-dom';
import HomePage from './components/Home';
import ProjectPage from './components/Project';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/project/:id" component={ProjectPage}/>
                </Switch>
            </div>
        )
    }
}

