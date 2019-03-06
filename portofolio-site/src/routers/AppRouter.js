import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFound';
import HomePage from '../components/HomePage';
import Portfolio from '../components/Portfolio';
import PortfolioItem from '../components/PortfolioItem';
import Contact from '../components/Contact';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={HomePage} exact={true}/>
                <Route path="/portfolio/" exact={true} component={Portfolio}/>
                <Route path="/portfolio/:id" component={PortfolioItem}/>
                <Route path="/contact" component={Contact}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
        </BrowserRouter>
);

export default AppRouter;