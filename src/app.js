import React from 'react';
import ReactDOM from 'react-dom';
import {Switch, BrowserRouter,Link, Route} from 'react-router-dom'; // BrowserRouter to create the react router & Route for each page to say what route to take & what to do when user visits that route.  
import 'normalize.css/normalize.css';
import './styles/styles.scss';
const Header = () => (
    <header><h1>Expensify</h1>
    <Link to="/">Home</Link>
    <Link to="/editPage">Edit</Link>
    <Link to="/create">Create</Link>
    <Link to="/help">Help</Link>
    </header>
);
/// To access another page a request needs to come from the client to the server 
//You want to serve up index.html and let react router decide what gets rendered
const expenseDashboardPage = () => (
    <div className="dashColor">
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
// when linking internaling among the app use link to go to other pages. When linking externally to other
// Websites where client side advantages can be taken, use regular html ancher <a href> tag</a> because its going to go to the server anywqay
const notFound = () => (
    <div>
    <b>Halt 404</b> the not found 404 page.<Link to="/">Link to a real page</Link>
    </div>
);
// When a / is used in path when directing route path both components will show up to get only one component per
// route path use exact={true} to make only the exact component mathch up with router path
// Switch will look for a page that is  a match as it skips threw the order of routes in browser router
// When it sees a match it shows the page if there is no match it will always execute the last route which is 404 error
// Using this strategy will enable 404 error pages. Remeber it must be imported to work  gff
// You must conform to BrowserRouter's requirments which is a max of one element.
// If you place a component before the switch shindig & after BrowserRouter that component will show up on everypage which is perfect for icons or navigation links
const routes = (
    <BrowserRouter>
    <div>
    <Header />
    <Switch>
    <Route path="/" component={expenseDashboardPage} exact={true}/>
    <Route path="/create" component={addExpensePage} />
    <Route path="/help" component={helpPage} />
    <Route path="/editPage" component={editPage} />
    <Route component={notFound} />
    </Switch>
    </div>
    
    
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));