import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "../Home/Home";
import NotFound from "../NotFound/NotFound";
import Checkout from "../Checkout/Checkout";

const RouteHandler = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/checkout" component={Checkout}/>
                <Route exact path="*" component={NotFound}/>
            </Switch>
        </Router>
    );
};

export default RouteHandler;
