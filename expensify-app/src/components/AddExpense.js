import React from 'react';
import ExpenserForm from './ExpenseForm';
import {connect} from 'react-redux';
import {addExpense} from '../actions/expenses';


const AddExpense = (props) => (
    <div>
        <h1>AddExpense</h1>
        <ExpenserForm
            onSubmit={(expense)=>{
               props.dispatch(addExpense(expense));
               props.history.push('/');
            }}
        />
    </div>
    );

export default connect()(AddExpense);