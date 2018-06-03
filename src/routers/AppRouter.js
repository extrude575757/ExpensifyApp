
import React from 'react';
import ReactDOM from 'react-dom';
import {Switch, BrowserRouter,NavLink, Link, Route} from 'react-router-dom';  
import Header from '../components/Header';
import Expense from '../components/Expense';
import Edit from '../components/Edit';
import Dashboard from '../components/Dashboard';
import Help from '../components/Help';
import NotFound from '../components/NotFound';






const AppRouter = () => (
    <BrowserRouter>
    <div>
    <Header />
    <Switch>
    <Route path="/" component={Expense} exact={true}/>
    <Route path="/create" component={Dashboard} />
    <Route path="/help" component={Help} />
    <Route path="/editPage/:id" component={Edit} />
    <Route component={NotFound} />
    </Switch>
    </div> 
    </BrowserRouter>
);

export default AppRouter;