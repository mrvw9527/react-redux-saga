import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from './views/home';
import Mine from './views/mine';


const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/mine" component={Mine}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;