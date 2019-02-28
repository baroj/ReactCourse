import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (<div>dashdboard component</div>);
const AddExpense = () => (<div>add expense component</div>);
const EditExpensePage = () => (<div>edit expense component</div>);
const HelpPage = () => (<div>help page component</div>);



const routes = (
    <BrowserRouter>
        <div>
           <Route path="/" component={ExpenseDashboardPage} exact={true}/> 
           <Route path="/create" component={AddExpense}/>
           <Route path="/edit" component={EditExpensePage}/>
           <Route path="/help" component={HelpPage}/>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
