

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();
const expense1 = store.dispatch(addExpense({description: 'Rent',amount:300, createdAt: -1000}));
const expense2 = store.dispatch(addExpense({description: 'Fire Bill',amount:200, createdAt: 10200}));

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});
store.dispatch(setTextFilter('sdf'));

//console.log(store.getState());
ReactDOM.render(<AppRouter />, document.getElementById('app'));