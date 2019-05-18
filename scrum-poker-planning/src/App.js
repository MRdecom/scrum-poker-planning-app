import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import {Routes} from './Routes';

const routeComponents = Routes.map((route) => {
    return <Route path={route.path} component={route.component} key={'route' + route.path}/>;
});

class App extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    {routeComponents}
                </Switch>
            </div>
        );
    }
}

export default App;
