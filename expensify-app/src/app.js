import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

const expenseOne = store.dispatch(addExpense({description:'water bill', amount:100, createdAt:1000}));
const expenseTwo = store.dispatch(addExpense({description:'gas bill', amount:300,  createdAt:-1000}));
store.dispatch(setTextFilter('water'));

const state = store.getState();
const visb = getVisibleExpenses(state.expenses, state.filters);
console.log(visb);

ReactDOM.render(<AppRouter/>, document.getElementById('app'));
