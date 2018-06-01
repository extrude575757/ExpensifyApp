import React from 'react';
import ReactDOM from 'react-dom';
import {Switch, BrowserRouter, Route} from 'react-router-dom'; // BrowserRouter to create the react router & Route for each page to say what route to take & what to do when user visits that route.  
import 'normalize.css/normalize.css';
import './styles/styles.scss';
/// To access another page a request needs to come from the client to the server 
//You want to serve up index.html and let react router decide what gets rendered
const expenseDashboardPage = () => (
    <div>
    This is info from my dashboardPage
    </div>
);

const addExpensePage = () => (
    <div>
    This is info from my add expense component
    </div>
);
const helpPage = () => (
    <div>
    This is info from my helpPage
    </div>
);

const editPage = () => (
    <div>
    This is info from my edit component page
    </div>
);
const notFound = () => (
    <div>
    <b>Halt 404</b> the not found 404 page.
    </div>
);
// When a / is used in path when directing route path both components will show up to get only one component per
// route path use exact={true} to make only the exact component mathch up with router path
// Switch will look for a page that is  a match as it skips threw the order of routes in browser router
// When it sees a match it shows the page if there is no match it will always execute the last route which is 404 error
// Using this strategy will enable 404 error pages. Remeber it must be imported to work  gff
const routes = (
    <BrowserRouter>
    
    <Switch>
    
    <Route path="/" component={expenseDashboardPage} exact={true}/>
    <Route path="/create" component={addExpensePage} />
    <Route path="/help" component={helpPage} />
    <Route path="/editPage" component={editPage} />
    <Route component={notFound} />
    
    </Switch>
    
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));