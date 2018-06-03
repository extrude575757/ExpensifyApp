import React from 'react';
import ReactDOM from 'react-dom';
import {Switch, BrowserRouter,NavLink, Link, Route} from 'react-router-dom';
const Header = () => (
    <div>
    <header><h1 className="font-effect-neon">Expensify</h1>
    <NavLink to="/"  activeClassName="is-active" className="visitedLinks" exact={true}>Home</NavLink> 
    <NavLink to="/create" activeClassName="is-active" className="visitedLinks3">Create</NavLink>
    <NavLink to="/help" activeClassName="is-active" className="visitedLinks4">Help</NavLink>
    </header>
    </div>
    
);
export default Header;