import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (<div>dashdboard component</div>);
const AddExpense = () => (<div>add expense component</div>);
const EditExpensePage = () => (<div>edit expense component</div>);
const HelpPage = () => (<div>help page component</div>);
const NotFoundPage = () => (<div>404! <Link to="/">Go Home</Link></div>);


const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home </NavLink>
        <NavLink to="/create" activeClassName="is-active">Create </NavLink>
        <NavLink to="/edit" activeClassName="is-active">Edit </NavLink>
        <NavLink to="/help" activeClassName="is-active">Help </NavLink>
    </header>
);


const routes = (
    <BrowserRouter>
    <div>
        <Header/>
        <Switch>
           <Route path="/" component={ExpenseDashboardPage} exact={true}/> 
           <Route path="/create" component={AddExpense}/>
           <Route path="/edit" component={EditExpensePage}/>
           <Route path="/help" component={HelpPage}/>
           <Route component={NotFoundPage}/>
        </Switch>
    </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
