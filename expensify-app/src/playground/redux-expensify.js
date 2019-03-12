import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';
// ADD_EXPENSE
const addExpense = ( 
    {
        description='',
        note='', 
        amount=0, 
        createAt=0 
    } ={} 
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createAt
    }
});

// REMOVE_EXPENSE   
const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// EDIT_EXPENSE
// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE


//Expenses Reducer
const expensesReducerDefState = []

const expensesReducer = (state= expensesReducerDefState, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return [...state,action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => (action.id != id))
        default:
            return state;
    }
};

const filtersReducerDefState = ['', 'date', undefined, undefined]

const filtersReducer = (state=filtersReducerDefState, action) =>{
    switch(action.type){
        default:
            return state;
    }
};


const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() =>{
    console.log(store.getState());    
});

const expenseOne = store.dispatch(addExpense({description:'Rent', amount:100}));
const expenseTwo = store.dispatch(addExpense({description:'Coffee', amount:300}));


store.dispatch(removeExpense({id: expenseOne.expense.id}))



const demoState = {
    expenses: [{
        id: 'blob',
        description:'Jan rent',
        note:'final payment',
        amout: 54500, 
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined,
    }
};