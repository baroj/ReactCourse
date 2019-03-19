import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

const expenseOne = store.dispatch(addExpense({description:'water bill', amount:100, createdAt:0}));
const expenseTwo = store.dispatch(addExpense({description:'gas bill', amount:300,  createdAt:250}));
store.dispatch(setTextFilter('water'));

setTimeout(()=>{
    store.dispatch(setTextFilter('bill'));
} , 3000);

const state = store.getState();
const visb = getVisibleExpenses(state.expenses, state.filters);
console.log(visb);

const jsx = (
    <Provider store = {store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render( jsx, document.getElementById('app'));
