import React from "react";

import ReactDOM from "react-dom";
<<<<<<< HEAD
import IndecisionApp from "./components/IndecisionApp";
import 'normalize.css/normalize.css';
=======

import {Provider} from 'react-redux';

import AppRouter from './routers/AppRouter';

import configureStore from './store/configureStore';

import {
    addExpense
} from './actions/expenses';

import {
    setTextFilter
} from './actions/filters';

import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';

>>>>>>> 82334206699375f3cf82229cf768cd61a7fa153d
import "./styles/styles.scss";

import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

// store.dispatch(addExpense({
//     description: 'Water bill',
//     amount:4500
// }));

// store.dispatch(addExpense({
//     description: 'Gas bill',
//     createdAt:1000,
//     amount:3500
// }));

// store.dispatch(addExpense({
//     description: 'Rent',
//     amount:109500
// }));



// const state = store.getState();

// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

// console.log(visibleExpenses);

console.log('test');

const jsx =(
    <Provider store={store}>
         <AppRouter/>
    </Provider>
   
);

ReactDOM.render( jsx , document.getElementById("app"));